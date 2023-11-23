// Streams
// Start using data, before it has finished loading like streaming video, you can watch it before all video data loaded

const fs = require("fs");

// receive data stream
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});
// send data stream
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("----- NEW CHUNK ------");
//   console.log(chunk);
//   // passing chunk to writeStream
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream);
