// EXAMPLE 1 - Check if a Key exists in a Map in JavaScript

const map = new Map();
map.set('name', 'bobbyhadz');

console.log(map.has('name')); // 👉️ true

console.log(map.has('age')); // 👉️ false

if (map.has('name')) {
  // 👇️ this runs
  console.log('The `name` key exists in the Map object');
} else {
  console.log('The `name` key does NOT exist in the Map object');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Value exists in a Map in JavaScript

// const map = new Map();
// map.set('name', 'bobby');

// // 👇️ ['bobby']
// const values = [...map.values()];
// console.log(values);

// console.log(values.includes('bobby')); // 👉️ true

// console.log(values.includes('alice')); // 👉️ false

// if (values.includes('bobby')) {
//   // 👇️ this runs
//   console.log('The value is contained in the Map');
// } else {
//   console.log('The value is NOT contained in the Map');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Value exists in a Map using a `for...of` loop

// const map = new Map();
// map.set('name', 'bobby');

// let valueInMap = false;

// for (const value of map.values()) {
//   if (value === 'bobby') {
//     valueInMap = true;

//     // ✅ value: bobby
//     console.log('value: ', value);
//     break;
//   }
// }

// console.log(valueInMap); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Map has an Object Key in JavaScript

// const obj = {country: 'Chile'};

// const map1 = new Map([[obj, {city: 'Santiago'}]]);

// // ✅ ( BEST ) - With reference
// console.log(map1.has(obj)); // 👉️ true
// console.log(map1.get(obj)); // 👉️ {city: 'Santiago'}

// // --------------------------------------------------------

// // ✅ If you don't have a reference, loop over the map to check
// let hasKey = false;

// for (const [key, value] of map1) {
//   if (typeof key === 'object' && key.country === 'Chile') {
//     hasKey = true;
//     break;
//   }
// }

// console.log(hasKey); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if an Object key exists in a Map without a reference

// const map1 = new Map([[{country: 'Chile'}, {city: 'Santiago'}]]);

// let hasKey = false;

// for (const [key, value] of map1) {
//   if (typeof key === 'object' && key.country === 'Chile') {
//     hasKey = true;
//     break;
//   }
// }

// console.log(hasKey); // 👉️ true
