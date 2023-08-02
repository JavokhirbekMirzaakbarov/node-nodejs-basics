import fs from "fs/promises";

const read = async () => {
  try {
    const content = await fs.readFile("./files/fileToRead.txt", {
      encoding: "utf-8",
    });
    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
