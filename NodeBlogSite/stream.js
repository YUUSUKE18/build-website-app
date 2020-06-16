const fs = require("fs");

const readStream = fs.createReadStream("./posts/post3.txt", {
  encoding: "utf8",
});
const writeStrem = fs.createWriteStream("./posts/post4.txt");

// readStream.on("data", (chunk) => {
//   console.log("----NEW CHUNK-----");
//   console.log(chunk);
//   writeStrem.write(`\n New Chunk \n`);
//   writeStrem.write(chunk);
// });

readStream.pipe(writeStrem);
