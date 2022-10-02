names = [];
if (names.length == 0) console.log(" We need to find some users!");
else
  names.forEach((name) =>
    name == "admin"
      ? console.log(
          "Hello admin, would you like to see a status report?" + "\n"
        )
      : console.log("hello" + name + "thank you for logging in again.\n")
  );
