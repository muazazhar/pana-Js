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
