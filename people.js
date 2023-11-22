const people = ["Ali", "Randy", "Lisa", "Dandi"];
const ages = [20, 24, 12, 5];

console.log(people);

// export to other when require
module.exports = {
  // its same as 'people: people'
  people,
  ages,
};
