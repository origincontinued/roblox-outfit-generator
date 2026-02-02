import { searchCatalog } from "./roproxy";

export async function generateOutfit(style: any) {
  const [shirt, pants, hair] = await Promise.all([
    searchCatalog(style.keywords[0], 11),
    searchCatalog(style.keywords[0], 12),
    searchCatalog("hair", 41)
  ]);

  return {
    shirt: shirt.data[0],
    pants: pants.data[0],
    hair: hair.data[0]
  };
}
