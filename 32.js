current_user = ["ali", "raza", "ahmed", "riz", "nadia"];
new_user = ["ALI", "raza", "aliza", "saima", "qudos"];
new_user.forEach((name) =>
  current_user.includes(name.toLowerCase())
    ? console.log("enter new name")
    : console.log("name available")
);
