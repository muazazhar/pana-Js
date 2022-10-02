const isRequired = () => {
  throw new Error("param is required");
};

function car(
  manufacturer = isRequired(),
  model = isRequired(),
  color,
  feature
) {
  console.log({
    manufacturer,
    model,
    color: color || null,
    feature: feature || null,
  });
}

car("honda", 98);
