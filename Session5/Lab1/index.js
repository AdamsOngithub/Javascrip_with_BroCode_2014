// Arrays= a variable like structure that can hold more 1 value

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

// Adding one more element at the end
fruits.push("coconut");
console.log(fruits);

//let tag one more element at beginig
fruits.unshift("watermelon");
console.log(fruits);

//let remove an element from the begining
fruits.shift();
console.log(fruits);

// let remove an element from the end
fruits.pop();
console.log(fruits);

//let key an index of a given element

let index = fruits.indexOf("banana");
console.log(index);

//let get the lenght of the array fruits
let lenght = fruits.length;
console.log(lenght);

//and because we the lenght of the array
//we can print the whole elements using for loop

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Advanced way for looping through
for (let fruit of fruits) {
  console.log(fruit);
}

//let print them in reverse order
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

//let sort the array fruits in an alphabetic order
fruits.sort();
console.log(fruits);

//Now let's doing in reverse order
fruits.sort().reverse();
console.log(fruits);
