import { parseStyle } from "../../lib/styles";
import { generateOutfit } from "../../lib/outfit";

export default async function handler(req, res) {
  const { prompt } = req.body;
  const style = parseStyle(prompt);
  const outfit = await generateOutfit(style);

  res.status(200).json(outfit);
}
