const products = [
  { brand_name: "Realme 7 Pro", price: 23500, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme 8 Pro", price: 26000, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme 9 Pro", price: 29000, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme  x3", price: 30000, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme x5", price: 32000, ram: "8GB", rom: "128GB" },
];
products.forEach((product) => console.log(product));
products.forEach((p) => console.log(`Brand Name: ${p.brand_name}`));
products.forEach((product) => console.log(`Price: ${product.price}`));
