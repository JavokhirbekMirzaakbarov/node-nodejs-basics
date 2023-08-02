import fs from "fs/promises";

const remove = async () => {
  try {
    await fs.unlink("./files/fileToRemove.txt");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
