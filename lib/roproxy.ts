export async function searchCatalog(keyword: string, assetType: number) {
  const url = `https://catalog.roproxy.com/v1/search/items/details?Keyword=${encodeURIComponent(
    keyword
  )}&AssetTypes=${assetType}&Limit=10`;

  const res = await fetch(url);
  return res.json();
}
