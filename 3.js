var name = "aAli saza";
const title = () => {
  arr = name.split(" ");
  arr.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return arr.join(" ");
};
console.log(`Lowercase ${name.toLowerCase()},Uppercase ${name.toUpperCase()} `);
console.log(`TitleCase ${title()}`);
