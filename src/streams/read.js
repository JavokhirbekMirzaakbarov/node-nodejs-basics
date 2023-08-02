import fs from "fs";

const read = async () => {
  const stream = fs.createReadStream("./files/fileToRead.txt");
  stream.pipe(process.stdout);
};

await read();
