import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  const readStream = fs.createReadStream("./files/archive.gz");
  const writeStream = fs.createWriteStream("./files/fileToCompress.txt");
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
