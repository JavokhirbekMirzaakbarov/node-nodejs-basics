import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  const gzip = zlib.createGzip();
  const readStream = fs.createReadStream("./files/fileToCompress.txt");
  const writeStream = fs.createWriteStream("./files/archive.gz");

  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("Done compressing!");
    });
};

await compress();
