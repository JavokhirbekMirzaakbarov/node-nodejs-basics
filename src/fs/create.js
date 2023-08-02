import fs from "fs/promises";

const create = async () => {
  try {
    const content = "I am fresh and young";
    await fs.writeFile("./files/fresh.txt", content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
