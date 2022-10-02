names = ["ali", "raza", "ahmed", "riz", "nadia"];
names.forEach((name) =>
  name == "admin"
    ? console.log("Hello admin, would you like to see a status report?" + "\n")
    : console.log("hello" + name + "thank you for logging in again.\n")
);
