import fs from "fs/promises";

const file = "sportData.json";

async function removeTrailingCommas() {
  try {
    const data = await fs.readFile(file, "utf-8");

    const dataRemovedTrailingCommas = data.replace(/\,(?=\s*?[\}\]])/g, ""); // regex to remove trailing comma from last object

    await fs.writeFile("db.json", dataRemovedTrailingCommas, "utf-8");
  } catch (error) {
    console.error("Error removing trailing commas:", error);
  }
}

removeTrailingCommas();
