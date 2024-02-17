const products = [
  {
    id: 1,
    name: "Sony Xperia XZ Premium",
    brand: "Sony",
    price: 4428,
    color: "White",
    category: "Phone",
  },
  {
    id: 2,
    name: "OPPO F3 Plus",
    brand: "OPPO",
    price: 5487,
    color: "Black",
    category: "Phone",
  },
  {
    id: 3,
    name: "IPhone 13 Pro max",
    brand: "Apple",
    price: 21490,
    color: "Gray",
    category: "Phone",
  },
  {
    id: 4,
    name: "Samsung Galaxy S8",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "Phone",
  },
];

products.forEach((product) => {
  console.log(`#${product.id} Name: ${product.name},\nPrice: ${product.price}`);
});

const input = prompt("nhap vao so thu tu cua san pham");
if (input >= 0 && input < products.length) {
  const k = products[input];
  console.log(Object.values(k));
} else {
  console.log("so nhap khong hop le");
}
