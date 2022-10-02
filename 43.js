magician = ["ali", "raza", "ahmed", "riz", "nadia"];
function show_magicians(arr) {
  newArr = [];
  arr.forEach((element) => {
    newArr.push(`The Great ${element}`);
  });
  console.log(magician);
  console.log(newArr);
}

show_magicians(magician);
