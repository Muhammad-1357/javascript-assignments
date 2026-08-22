// ==========================
// JavaScript Assignments
// Muhammad Ibrahim
// ==========================

// Q1
var bunny = "Lucy";
let dog = "Tom";
const cat = "Molly";
console.log(bunny, dog, cat);

// Q2
// Valid: _bunny, $bunny, bunnyName
// Invalid: 1bunny, -bunny, @bunny

// Q3
console.log(pet); // undefined
var pet = "Lucy";
let animal = "Tom";

// Q4
let zoo = "Happy Zoo";
function animalName() {
  let bunny = "Lucy";
  console.log(bunny);
  console.log(zoo);
}
animalName();

// Q5
let bunnyObj = {
  name: "Lucy",
  age: 3,
  isHappy: true,
};
console.log(bunnyObj.name);
console.log(bunnyObj.age);
console.log(bunnyObj.isHappy);

// Q6
console.log(typeof 3.14);
console.log(typeof "Lucy");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol("Lucy"));
console.log(typeof { name: "Lucy" });
console.log(typeof ["Lucy", "Tom"]);

// Q7
const mixedDataTypes = [true, 10, "Lucy", null, undefined, { name: "Tom" }];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

// Q8
function sumBunnies() {
  let blackBunnies = 10;
  let whiteBunnies = 20;
  return blackBunnies + whiteBunnies;
}
console.log(sumBunnies());

// Q9
function sumBunnies2(blackBunnies, whiteBunnies) {
  return blackBunnies + whiteBunnies;
}
console.log(sumBunnies2(10, 20));
console.log(sumBunnies2(7, 3));

// Q10
const anonymous = function (a, b) {
  return a + b;
};
const arrow = (a, b) => a + b;
console.log(anonymous(10, 20));
console.log(arrow(7, 3));

// Q11
(function () {
  console.log(10 + 20);
})();

// Q12
let bunnies = ["Lucy", "Tom", "Molly", "Bella", "Jack", "Snow"];
bunnies.push("Mario");
bunnies.unshift("Luigi");
bunnies = bunnies.filter((name) => name !== "Lucy");
console.log(bunnies);

// Q13
const bunnyList = ["Lucy", "Tom", "Molly", "Bella"];
console.log(bunnyList[0]);
console.log(bunnyList[bunnyList.length - 1]);
console.log(bunnyList.indexOf("Tom"));
console.log([...bunnyList]);

// Q14
for (let i = 0; i < bunnyList.length; i++) {
  console.log(`Bunny ${bunnyList[i]} is scheduled for a checkup today.`);
}

// Q15
const nestedArrays = [
  ["Lucy", "Tom"],
  ["Molly", "Bella"],
];
for (let i = 0; i < nestedArrays.length; i++) {
  for (let j = 0; j < nestedArrays[i].length; j++) {
    console.log(nestedArrays[i][j]);
  }
}

// Q16
const bunny = { name: "Lucy", age: 3, isHappy: true };
const bunnyJSON = JSON.stringify(bunny);
console.log(bunnyJSON);

// Q17
let bunnyJSON2 = '{"name":"Lucy","age":3,"isHappy":true}';
let parsed = JSON.parse(bunnyJSON2);
console.log(parsed.name);
console.log(parsed.age);

// Q18
let bunny_age = 3;
let dog_age = "3";
console.log(bunny_age == dog_age);
console.log(bunny_age === dog_age);
console.log(bunny_age != dog_age);
console.log(bunny_age !== dog_age);

// Q19
const dogs = ["Max", "Rocky", "Buddy"];
if (bunnyList.length <= dogs.length) {
  console.log("There are more dogs than bunnies");
} else {
  console.log("There are more bunnies than dogs");
}

// Q20
let health = "healthy";
if (health === "healthy") console.log("Healthy");
else if (health === "sick") console.log("Sick");
else console.log("Unknown");

switch (health) {
  case "healthy":
    console.log("Healthy");
    break;
  case "sick":
    console.log("Sick");
    break;
  default:
    console.log("Unknown");
}

console.log(health === "healthy" ? "Healthy" : "Not Healthy");

// Q21
function evenOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
}
console.log(evenOdd(4));
console.log(evenOdd(7));
console.log(evenOdd(0));

// Q22
for (let i = 0; i < 10; i++) {
  console.log(`Number ${i}`);
}

let i = 0;
while (i < 10) {
  console.log(`Number ${i}`);
  i++;
}

// Q23
let j = 9;
while (j >= 1) {
  console.log(j);
  j--;
}

for (let k = 9; k >= 1; k--) {
  console.log(k);
}

// Q24
function safeSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
}

try {
  console.log(safeSum(10, "twenty"));
} catch (error) {
  console.log(error.message);
}

// Q25
let blackBunnies = 10;
let whiteBunnies = 5;
let total = blackBunnies + whiteBunnies;

console.log(blackBunnies === whiteBunnies);
console.log(total);
console.log(total > 12);
console.log(total > 12 ? "Yes" : "No");

// ==========================
// Brain Teasers
// ==========================

// BT1
let carrots = 3;
while (carrots) {
  console.log("munch");
  carrots--;
}

// BT2
const bunnyNames = ["Lucy", "Tom", "Molly", "Bella", "Mario", "Luigi"];

for (let i = 0; i < bunnyNames.length; i++) {
  if (bunnyNames[i].length > 4) console.log(bunnyNames[i]);
}

let x = 0;
while (x < bunnyNames.length) {
  if (bunnyNames[x].length > 4) console.log(bunnyNames[x]);
  x++;
}

// BT3
const groups = [
  ["Lucy", "Tom"],
  ["Molly", "Bella"],
  ["Mario", "Luigi"],
];

let count = 1;
for (let a = 0; a < groups.length; a++) {
  for (let b = 0; b < groups[a].length; b++) {
    console.log(`${count}. ${groups[a][b]}`);
    count++;
  }
}

// BT4
const bunnyGroup = [
  { name: "Lucy", isHappy: true },
  { name: "Tom", isHappy: false },
  { name: "Molly", isHappy: true },
];

function countHappyBunnies(bunnies) {
  let happy = 0;
  for (let i = 0; i < bunnies.length; i++) {
    if (bunnies[i].isHappy) happy++;
  }
  return happy;
}

const happyCount = countHappyBunnies(bunnyGroup);
console.log(
  happyCount >= bunnyGroup.length / 2
    ? "Most bunnies are happy"
    : "Most bunnies are not happy"
);

// BT5
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let y = 0;
while (y < 5) {
  console.log(y);
  y++;
}
