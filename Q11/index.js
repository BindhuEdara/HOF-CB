const arr = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];
const productDetails = arr.map((el, i) => {
  return el.name;
});
console.log(productDetails);

arr.forEach((el) => {
  if (el.price > 50) {
    console.log(`${el.name} is above $50`);
  } else {
    console.log(`${el.name} is below $50`);
  }
});
