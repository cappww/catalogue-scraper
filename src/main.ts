import fse from "fs-extra";
import puppeteer from "puppeteer";
import * as evals from "./evals";
import * as lib from "./lib";

async function main() {
  // lib.addImgRefs(1);
  // lib.convertToCsv(1);
  lib.getSlugPageIndex("/drugs/iviglob-5gm-infusion-233043");
}

/**
 *
 * some drugs have no primary images, the default image is named hx2gxivwmeoxxxsc1hix.png, I stopped uploading those
 * It's safe to delete any image named that.
 *
 * Some drugs profiles return 404 error: see list-404.json
 *
 * The photos with uuids as names (in letters a-d) are not necessary because I decided to name the photo whatever some-catalogue-url named them.
 * Any photos that are uuids after letter d are necessary because that's what some-catalogue-url named them
 */

main().catch(console.log);
