import fse from "fs-extra";
import unzipper from "unzipper";
import xlsx from "xlsx";
import ImgRef from "../interfaces/ImgRef";
import Res, { Skus } from "../interfaces/Res";
import Row from "../interfaces/Row";
import * as lib from "../lib";

async function getHtml(slug: string, dir: unzipper.CentralDirectory) {
  const file = dir.files.find((f) => "/" + f.path === slug + ".html");
  if (!file) throw new Error("Cannot find file");
  const buf = await file.buffer();
  const html = buf.toString("utf-8");
  return html;
}

export async function parseDrugProfile(sku: Skus, file: unzipper.File) {
  const buf = await file.buffer();
  const html = buf.toString("utf-8");
  const parsedHtml = lib.parseHtml(html);

  const row: Row = {
    url: "https://www.some-catalogue-url.com" + sku.slug,
    product_name: sku.name,
    manufacturer: sku.manufacturer_name,
    pricing: sku.price,
    composition: sku.short_composition,
    primary_image: "",
    images: "",
    product_description: parsedHtml.product_description,
    prescription_required: sku.rx_required ? "Yes" : "No",
    therapeutic_class: parsedHtml.therapeutic_class,
    packaging_details: parsedHtml.packaging_details,
    usage: parsedHtml.usage,
    benefits: parsedHtml.benefits,
    storage: parsedHtml.storage,
  };
  return row;
}

export async function parseDrugProfiles(
  letterIndex: number,
  startPageIndex: number,
  startSkuIndex: number
) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = alphabet.charAt(letterIndex);
  const fileNames = fse.readdirSync("./drugs-all-medicines/" + letter);
  const list404 = fse.readJsonSync("./output/list-404.json") as Skus[];
  const dir = await unzipper.Open.file(`./drugs-zipped/${letter}.zip`);
  const rows: Row[] = [];
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
      if (list404.find((s) => s.slug === sku.slug)) {
        console.log("this is a 404 sku skipping...");
        continue;
      }
      const file = dir.files.find((f) => "/" + f.path === sku.slug + ".html");
      if (!file) throw new Error("Cannot find file");
      const row = await parseDrugProfile(sku, file);
      rows.push(row);
    }
    startSkuIndex = 0;
  }
  startPageIndex = 0;
  fse.outputJsonSync(`./output/json-no-imgs/${letter}.json`, rows, {
    encoding: "utf-8",
  });
}

export function addImgRefs(letterIndex: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = alphabet.charAt(letterIndex);
  const rows = fse.readJSONSync(
    `./output/json-no-imgs/${letter}.json`
  ) as Row[];
  const imgRefs = fse.readJsonSync(
    `./output/img-refs/${letter}.json`
  ) as ImgRef[];

  for (const row of rows) {
    console.log(row.url);
    const imgRef = imgRefs.find((ref) => row.url.includes(ref.slug));
    row.images = (imgRef?.images ?? []).toString();
    row.primary_image = imgRef?.primary_image ?? "";
  }

  fse.outputJsonSync(`./output/json/${letter}.json`, rows);
}

export function convertToCsv(letterIndex: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = alphabet.charAt(letterIndex);

  const json = fse.readJsonSync(`./output/json/${letter}.json`);
  const ws = xlsx.utils.json_to_sheet(json);
  const csv = xlsx.utils.sheet_to_csv(ws);
  fse.outputFileSync(`./output/csv/some-catalogue-url-${letter}.csv`, csv, {
    encoding: "utf-8",
  });
}

async function main() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let index = alphabet.indexOf("v"); index < alphabet.length; index++) {
    await parseDrugProfiles(index, 0, 0);
    addImgRefs(index);
    convertToCsv(index);
  }
}

main().catch(console.log);
