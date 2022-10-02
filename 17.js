names = ["ali", "raza", "ahmed"];
names.forEach((name) =>
  console.log(`hello ${name}! You are invited to dinner at my house tomorrow`)
);
console.log("\n");

console.log("ahmed can't make it");

names.pop();
names.push("riz");
console.log("\n");

names.forEach((name) =>
  console.log(`hello ${name}! You are invited to dinner at my house tomorrow`)
);

console.log("Found bigger table");
names.splice(1, 0, "mu");
names.push("als");

names.forEach((name) =>
  console.log(`hello ${name}! You are invited to dinner at my house tomorrow`)
);

console.log("Only two people are invited to dinner at my house tomorrow");

for (i = names.length; i >= 1; i--) {
  console.log(
    `hello ${names[i]}! You are not invited to dinner at my house tomorrow`
  );
}

for (i = 0; i <= names.length; i++) {
  names.pop();
}
console.log(names);
