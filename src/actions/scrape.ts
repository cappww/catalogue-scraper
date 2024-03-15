import axios, { AxiosError } from "axios";
import fse from "fs-extra";
import puppeteer from "puppeteer";
import * as evals from "../evals";
import Res, { Skus } from "../interfaces/Res";
import * as lib from "../lib";
import path from "path";
import retry from "async-retry";

export async function getDrugLists() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "/usr/bin/google-chrome",
    userDataDir: "/home/capp/.config/google-chrome",
  });

  const page = (await browser.pages())[0];

  await page.goto("https://www.some-catalogue-url.com/drugs-all-medicines");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let drugSkusRes: any | null = null;
  const index = alphabet.indexOf("a");
  let pageNum = 13;
  for (let i = index; i < alphabet.length; i++) {
    const letter = alphabet.charAt(i);
    do {
      console.log("\nCategory:", letter, "index:", i);
      console.log("Requesting from page", pageNum);
      drugSkusRes = await evals.getDrugSkus(page, letter, pageNum);

      if (drugSkusRes.status_code === 200) {
        console.log("request successful");
      } else {
        console.log("failed res:", drugSkusRes);
        throw new Error("request failed");
      }

      console.log("outputting result");
      fse.outputJsonSync(
        `./drugs-all-medicines/${letter}/page-${pageNum}.json`,
        drugSkusRes,
        { spaces: "\t" }
      );
      pageNum++;
      await lib.wait(5);
    } while (drugSkusRes.meta.count >= 30);
    pageNum = 1;
  }

  await browser.close();
}

export async function getDrugProfiles(
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

        const htmlFileNames = fse.readdirSync("./drugs/");
        const baseName = path.basename(sku.slug) + ".html";
        if (htmlFileNames.includes(baseName)) {
          console.log("site already scraped");
          continue;
        }

        console.log("scraping...");
        const url = "https://www.some-catalogue-url.com" + sku.slug;
        try {
          await retry(
            async (_, attempt) => {
              console.log("attempt:", attempt);
              const res = await axios.get(url, {
                headers: {
                  "user-agent":
                    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
                },
              });
              fse.outputFileSync("." + sku.slug + ".html", res.data, {
                encoding: "utf-8",
              });
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
        } catch (error) {
          if ((error as any).isAxiosError) {
            const err = error as AxiosError;
            if (err.response?.status === 404) {
              console.log("404 for " + sku.slug);
              const list404 = fse.readJsonSync(
                "./output/list-404.json"
              ) as Skus[];
              list404.push(sku);
              fse.outputJsonSync("./output/list-404.json", list404, {
                encoding: "utf-8",
                spaces: "\t",
              });
            } else {
              console.log("code:", err.code);
              console.log("status:", err.status);
              console.log("message:", err.message);
              console.log("name:", err.name);
              console.log("status code:", err.response?.status);
              throw (error as AxiosError).toString();
            }
          } else {
            const err = error as Error;
            console.log("error name:", err.name);
            console.log("error message:", err.message);
            throw err.toString();
          }
        }

        await lib.wait(0.5);
      }
      startSkuIndex = 0;
    }
    startPageIndex = 0;
  }
}

async function main() {
  await getDrugProfiles(11, 89, 27);
}

main().catch((error) => console.log(error.toString()));
