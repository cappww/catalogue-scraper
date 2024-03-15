import { Page } from "puppeteer";

export async function getDrugSkus(
  page: Page,
  prefixTerm: string,
  pageNum: number
) {
  const result = await page.evaluate(
    `(async () => {
      const res = await fetch(
        "https://www.some-catalogue-url.com/pharmacy_api_gateway/v4/drug_skus/by_prefix?prefix_term=${prefixTerm}&page=${pageNum}&per_page=30",
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache, no-store, must-revalidate",
            "hkp-platform": "Healthkartplus-0.0.1-Desktop",
            pragma: "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-html-canrender": "True",
            "x-platform": "Desktop-0.0.1",
            Referer: "https://www.some-catalogue-url.com/drugs-all-medicines",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body: null,
          method: "GET",
        }
      );
      return await res.json();
    })();`
  );

  return result;
}
