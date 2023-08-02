import fs from "fs/promises";

const rename = async () => {
  try {
    await fs.rename("./files/wrongFilename.txt", "./files/properFileName.md");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
