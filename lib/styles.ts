export const STYLE_MAP: Record<string, any> = {
  "old money": {
    keywords: ["blazer", "formal", "classic", "vest", "suit"],
    colors: ["black", "white", "beige", "navy"],
    maxAccessories: 2,
    maxPrice: 120
  },
  "streetwear": {
    keywords: ["hoodie", "baggy", "urban"],
    maxAccessories: 4,
    maxPrice: 150
  }
};

export function parseStyle(prompt: string) {
  const key = Object.keys(STYLE_MAP).find(style =>
    prompt.toLowerCase().includes(style)
  );
  return STYLE_MAP[key ?? "old money"];
}
