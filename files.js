// built in to read file system
const fs = require("fs");

// // reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// // write file
// // it will replace whatever it is inside blog1 to "Hello, world"
// fs.writeFile("./docs/blog1.txt", "Hello, word", () => {
//   console.log("file was written");
// });
// // if the file doesnt exist, it is will be created
// fs.writeFile("./docs/blog2.txt", "Hello, word", () => {
//   console.log("file was written");
// });

// // directories
// // create folder name assets in the refered path if it doesnt exist, else it willbe deleted
// if (!fs.existsSync("./assets")) {
//   // create folder reffered
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder was created");
//   });
// } else {
//   // delete folder referred
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
//   console.log("folder deleted");
// }

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
} else {
  console.log("the files doesnt exist");
}
