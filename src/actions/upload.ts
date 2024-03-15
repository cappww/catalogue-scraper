import retry from "async-retry";
import AWS from "aws-sdk";
import axios, { AxiosError } from "axios";
import fse from "fs-extra";
import path from "path";
import ImgRef from "../interfaces/ImgRef";
import Res, { Skus } from "../interfaces/Res";
import * as lib from "../lib";

const s3 = new AWS.S3({
  region: "AP-SOUTH-1",
  credentials: {
    accessKeyId: "some-access-key-id",
    secretAccessKey: "some-secret-access-key",
  },
});
const s3BucketName = "phar-prod-db-media";

export async function relayImage(imageUrl: string, imagePath: string) {
  const imageBaseName = path.basename(imageUrl);
  if (imageBaseName === "hx2gxivwmeoxxxsc1hix.png") {
    console.log("no primary image available");
    return "";
  }
  console.log("downloading image:", imageBaseName);
  const res = await axios.get(imageUrl, { responseType: "arraybuffer" });
  const s3Key = imagePath + "/" + imageBaseName;
  console.log("uploading image:", imageBaseName);
  await s3
    .putObject({
      Bucket: s3BucketName,
      Key: s3Key,
      Body: res.data,
    })
    .promise();
  return `s3://${s3BucketName}/${s3Key}`;
}

export async function uploadDrugImages(
  slug: string,
  primaryImageUrl: string,
  imageUrls: string[]
) {
  const slugName = slug.replace("/drugs/", "");
  const letter = slugName.charAt(0);
  const imagePath = `${letter}/${slugName}`;

  console.log("uploading images...");
  const s3Paths: string[] = [];
  for (const imageUrl of imageUrls) {
    try {
      await retry(
        async (_, attempt) => {
          console.log("attempt:", attempt);
          const s3Path = await relayImage(imageUrl, imagePath);
          s3Paths.push(s3Path);
        },
        {
          retries: 2,
          minTimeout: 1 * 60 * 1000,
          maxTimeout: 2 * 60 * 1000,
          onRetry: (e) => {
            console.log(e.message);
          },
        }
      );
    } catch (error: any) {
      if (error.isAxiosError) {
        const err = error as AxiosError;
        if (err.response?.status === 404) {
          console.log("missing photo");
        }
      } else {
        throw error;
      }
    }
  }
  console.log("uploading primary image...");
  let primary_image: string = "";
  try {
    await retry(
      async (_, attempt) => {
        console.log("attempt:", attempt);
        primary_image = await relayImage(primaryImageUrl, imagePath);
      },
      {
        retries: 2,
        minTimeout: 1 * 60 * 1000,
        maxTimeout: 2 * 60 * 1000,
        onRetry: (e) => {
          console.log(e.message);
        },
      }
    );
  } catch (error: any) {
    if (error.isAxiosError) {
      const err = error as AxiosError;
      if (err.response?.status === 404) {
        console.log("missing photo");
      }
    } else {
      throw error;
    }
  }

  return { images: s3Paths, primary_image };
}

export async function uploadAllDrugImages(
  startLetterIndex: number,
  startPageIndex: number,
  startSkuIndex: number
) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (
    let letterIndex = startLetterIndex;
    letterIndex < alphabet.length;
    letterIndex++
  ) {
    const letter = alphabet.charAt(letterIndex);
    const fileNames = fse.readdirSync("./drugs-all-medicines/" + letter);

    const imgRefsPath = `./output/img-refs/${letter}.json`;
    fse.pathExistsSync(imgRefsPath) || fse.outputJsonSync(imgRefsPath, []);
    const imgRefs: ImgRef[] = fse.readJsonSync(imgRefsPath);

    for (
      let pageIndex = startPageIndex;
      pageIndex < fileNames.length;
      pageIndex++
    ) {
      const fileName = fileNames[pageIndex];
      const json = fse.readJsonSync(
        `./drugs-all-medicines/${letter}/${fileName}`
      ) as Res;
      const skus = json.data.skus;
      for (let skuIndex = startSkuIndex; skuIndex < skus.length; skuIndex++) {
        const sku = skus[skuIndex];
        console.log("letterIndex:", letterIndex, "letter:", letter);
        console.log("pageIndex:", pageIndex, "fileName:", fileName);
        console.log("skuIndex:", skuIndex, "slug:", sku.slug);

        const list404 = fse.readJsonSync("./output/list-404.json") as Skus[];
        if (list404.find((s) => s.slug === sku.slug)) {
          console.log("Sku is in 404 list");
          continue;
        }
        if (imgRefs.find((i) => i.slug === sku.slug)) {
          console.log("images already uploaded");
          continue;
        }

        const html = fse.readFileSync("." + sku.slug + ".html", {
          encoding: "utf-8",
        });
        const { imageUrls } = lib.parseHtml(html);
        const primaryImageUrl = sku.image_url;

        const { primary_image, images } = await uploadDrugImages(
          sku.slug,
          primaryImageUrl,
          imageUrls
        );

        const row = { slug: sku.slug, images, primary_image };
        imgRefs.push(row);
        console.log("Adding row:", row);
        fse.outputJsonSync(imgRefsPath, imgRefs, { spaces: "\t" });
      }
      startSkuIndex = 0;
    }
    startPageIndex = 0;
  }
}

async function main() {
  await uploadAllDrugImages(19, 222, 24);
}

main().catch(console.log);
