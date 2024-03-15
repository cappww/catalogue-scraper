import * as cheerio from "cheerio";
import fse from "fs-extra";
import Res, { Skus } from "./interfaces/Res";
import { InitialState } from "./interfaces/InitialState";
import { PreloadedState } from "./interfaces/PreloadedState";

export function wait(seconds: number) {
  console.log("waiting", seconds, "seconds");
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export function parseHtml(html: string) {
  const initialStateStr = html.match(/window.__INITIAL_STATE__ = ({.+})/)?.[1];
  if (initialStateStr) {
    const initialState = JSON.parse(initialStateStr) as InitialState;
    return {
      product_description:
        initialState.drugPageReducer.data.schema.drug.description?.replace(
          /<br>/g,
          ""
        ) ?? "",
      therapeutic_class:
        initialState.drugPageReducer.data.sku.therapeutic_class?.replace(
          /<br>/g,
          ""
        ) ?? "",
      packaging_details:
        initialState.drugPageReducer.data.sku.quantity_in_pack.replace(
          /<br>/g,
          ""
        ),
      usage: initialState.drugPageReducer.data.composition.uses
        .reduce((acc, curr, i) => {
          const currUse =
            (curr?.values?.[0]?.prefix ? curr?.values?.[0]?.prefix + " " : "") +
              curr?.values?.[0]?.name ?? "";
          return acc + (i > 0 ? ", " : "") + currUse;
        }, "")
        .replace(/<br>/g, ""),
      benefits: initialState.drugPageReducer.data.composition.benefits
        .reduce((acc, curr, i) => {
          const currBen =
            (curr?.values?.[0]?.header ? curr?.values?.[0]?.header + " " : "") +
              curr?.values?.[0]?.display_text ?? "";
          return acc + (i > 0 ? ", " : "") + currBen;
        }, "")
        .replace(/<br>/g, ""),
      storage: (
        initialState.drugPageReducer.data.fact_box
          .find((b) => b.header === "General Information")
          ?.values.find((v) => v.header === "Storage")?.text ?? ""
      ).replace(/<br>/g, ""),
      imageUrls:
        initialState.drugPageReducer.data.sku.images?.map((i) =>
          i.medium.replace("watermark_", "")
        ) ?? [],
    };
  } else {
    const preloadedStateStr = html.match(
      /window.PRELOADED_STATE = \[(".+")\];/
    )?.[1];

    if (!preloadedStateStr) throw new Error("Failed to parse html");
    // I have to parse this twice wtf
    const preloadedState = JSON.parse(
      JSON.parse(preloadedStateStr)
    ) as PreloadedState;
    return {
      product_description:
        preloadedState.drugPage.drugInfo.schema.drugs.description,
      therapeutic_class: preloadedState.drugPage.drugInfo.sku.therapeuticClass,
      packaging_details: preloadedState.drugPage.drugInfo.sku.quantityProduct,
      usage: preloadedState.drugPage.drugInfo.sku.uses
        .reduce((acc, curr, i) => {
          const currUse =
            (curr?.values?.[0]?.prefix ? curr?.values?.[0]?.prefix + " " : "") +
              curr?.values?.[0]?.name ?? "";
          return acc + (i > 0 ? ", " : "") + currUse;
        }, "")
        .replace(/<br>/g, ""),
      benefits: preloadedState.drugPage.drugInfo.sku.benefits
        .reduce((acc, curr, i) => {
          const currBen =
            (curr?.values?.[0]?.header ? curr?.values?.[0]?.header + " " : "") +
              curr?.values?.[0]?.display_text ?? "";
          return acc + (i > 0 ? ", " : "") + currBen;
        }, "")
        .replace(/<br>/g, ""),
      storage:
        preloadedState.drugPage.drugInfo.sku.storageCondition?.display_text ??
        "",
      imageUrls:
        preloadedState.drugPage.drugInfo.sku.images?.map((i) =>
          i.medium.replace("watermark_", "")
        ) ?? [],
    };
  }
}

export function getStateSku(
  letterIndex: number,
  pageIndex: number,
  skuIndex: number
) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = alphabet.charAt(letterIndex);
  const fileNames = fse.readdirSync("./drugs-all-medicines/" + letter);
  const fileName = fileNames[pageIndex];

  const json = fse.readJsonSync(
    `./drugs-all-medicines/${letter}/${fileName}`
  ) as Res;
  const skus = json.data.skus;
  const sku = skus[skuIndex];

  const html = fse.readFileSync("." + sku.slug + ".html", {
    encoding: "utf-8",
  });
  const $ = cheerio.load(html);
  const scripts = $("script")
    .toArray()
    .filter((script) =>
      $.text(script.childNodes).includes("window.__INITIAL_STATE__")
    );

  const js = $.text(scripts[0].childNodes);
  const m = js.match(/window.__INITIAL_STATE__ = ({.+})/)?.[1];
  if (!m) throw new Error("Match failed");
  const state = JSON.parse(m) as InitialState;

  return { sku, state };
}

export async function iterateDrugLists(
  startLetterIndex: number,
  startPageIndex: number,
  startSkuIndex: number,
  cb: (sku: Skus) => Promise<void>
) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (
    let letterIndex = startLetterIndex;
    letterIndex < alphabet.length;
    letterIndex++
  ) {
    const letter = alphabet.charAt(letterIndex);
    console.log("letterIndex:", letterIndex, "letter:", letter);
    const fileNames = fse.readdirSync("./drugs-all-medicines/" + letter);
    for (
      let pageIndex = startPageIndex;
      pageIndex < fileNames.length;
      pageIndex++
    ) {
      const fileName = fileNames[pageIndex];
      console.log("pageIndex:", pageIndex, "fileName:", fileName);
      const json = fse.readJsonSync(
        `./drugs-all-medicines/${letter}/${fileName}`
      ) as Res;
      const skus = json.data.skus;
      for (let skuIndex = startSkuIndex; skuIndex < skus.length; skuIndex++) {
        const sku = skus[skuIndex];
        console.log("skuIndex:", skuIndex, "slug:", sku.slug);
        await cb(sku);
      }
      startSkuIndex = 0;
    }
    startPageIndex = 0;
  }
}

export function getSlugPageIndex(slug: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = slug.charAt(7);
  const letterIndex = alphabet.indexOf(letter);
  const fileNames = fse.readdirSync("./drugs-all-medicines/" + letter);
  for (let pageIndex = 0; pageIndex < fileNames.length; pageIndex++) {
    const fileName = fileNames[pageIndex];
    const json = fse.readJsonSync(
      `./drugs-all-medicines/${letter}/${fileName}`,
      { encoding: "utf-8" }
    ) as Res;
    const skus = json.data.skus;
    for (let skuIndex = 0; skuIndex < skus.length; skuIndex++) {
      const sku = skus[skuIndex];
      if (sku.slug === slug) {
        console.log(
          "letterIndex:",
          letterIndex,
          "pageIndex:",
          pageIndex,
          "skuIndex:",
          skuIndex
        );
        return [letterIndex, pageIndex, skuIndex];
      }
    }
  }
  return null;
}
