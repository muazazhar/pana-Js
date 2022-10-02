magician = ["ali", "raza", "ahmed", "riz", "nadia"];
function show_magicians(arr) {
  arr.forEach((element) => {
    magician[magician.indexOf(element)] = `The Great ${element}`;
  });
  console.log(magician);
}

show_magicians(magician);
