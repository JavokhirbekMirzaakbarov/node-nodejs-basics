import fs from "fs/promises";

const list = async () => {
  try {
    const files = await fs.readdir("./files");
    files.forEach((file) => console.log(file));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
