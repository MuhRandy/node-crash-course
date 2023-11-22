// import from exported required
const { people, ages } = require("./people");

// its return exported from require
console.log(people, ages);

// // we can't acces variable at require unless exported
// console.log(people);

// os (operating system) is built in node
const os = require("os");

console.log(os.platform(), os.homedir());
