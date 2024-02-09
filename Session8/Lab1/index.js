// Classes = (ES6 Feature) more structured and cleaner way to work with objects compared with traditional constructor function

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }
  calculateTotal(saleTax) {
    return this.price + this.price * saleTax;
  }
}

saleTax = 0.05;

const prodct1 = new Product("Shirt", 19.99);
prodct1.displayProduct();
const total1 = prodct1.calculateTotal(saleTax);
console.log(total1.toFixed(2));

//

const prodct2 = new Product("Pants", 150.2);
prodct2.displayProduct();
const total2 = prodct2.calculateTotal(saleTax);
console.log(total2.toFixed(2));

//

const prodct3 = new Product("Underwear", 90);
prodct3.displayProduct();
const total3 = prodct2.calculateTotal(saleTax);
console.log(total3.toFixed(2));
