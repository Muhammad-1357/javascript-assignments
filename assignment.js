// =============================
// JavaScript Assignments
// =============================

// Q1
var bunny = "Lucy";
let dog = "Tom";
const cat = "Molly";
console.log(bunny, dog, cat);

// Q2
console.log("Valid: _bunny, $bunny, bunnyName");
console.log("Invalid: 1bunny -> bunny1");
console.log("Invalid: -bunny -> bunny");
console.log("Invalid: @bunny -> bunny");

// Q3
console.log(pet); // undefined
var pet = "Lucy";

let animal = "Tom";
console.log(animal);

// Q4
let zoo = "Happy Zoo";

function animalName() {
  let localBunny = "Lucy";
  console.log(localBunny);
  console.log(zoo);
}
animalName();

// =============================
// Data Types
// =============================

// Q5
let bunnyInfo = {
  name: "Lucy",
  age: 3,
  isHappy: true
};

console.log(bunnyInfo.name);
console.log(bunnyInfo.age);
console.log(bunnyInfo.isHappy);

// Q6
console.log(3.14, typeof 3.14);
console.log("Lucy", typeof "Lucy");
console.log(true, typeof true);
console.log(null, typeof null);
console.log(undefined, typeof undefined);
console.log(Symbol("Lucy"), typeof Symbol("Lucy"));
console.log({ name: "Lucy" }, typeof { name: "Lucy" });
console.log(["Lucy", "Tom"], typeof ["Lucy", "Tom"]);

// Q7
const mixedDataTypes = [
  true,
  10,
  "Lucy",
  null,
  undefined,
  { name: "Tom" }
];

console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

// =============================
// Functions
// =============================

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

// =============================
// Arrays
// =============================

// Q12
let bunnies = [
  "Lucy",
  "Tom",
  "Molly",
  "Bella",
  "Jack",
  "Snow"
];

bunnies.push("Mario");
bunnies.unshift("Luigi");
bunnies = bunnies.filter(name => name !== "Lucy");

console.log(bunnies);

// Q13
const bunnyList = ["Lucy", "Tom", "Molly", "Bella"];

console.log(bunnyList[0]);
console.log(bunnyList[bunnyList.length - 1]);
console.log(bunnyList.indexOf("Tom"));

const copy = [...bunnyList];
console.log(copy);

// Q14
for (let i = 0; i < bunnyList.length; i++) {
  console.log(`Bunny ${bunnyList[i]} is scheduled for a checkup today.`);
}

// Q15
const nestedArrays = [
  ["Lucy", "Tom"],
  ["Molly", "Bella"]
];

console.log(nestedArrays[0][0]);
console.log(nestedArrays[1][1]);

for (let i = 0; i < nestedArrays.length; i++) {
  for (let j = 0; j < nestedArrays[i].length; j++) {
    console.log(nestedArrays[i][j]);
  }
}

// =============================
// JSON
// =============================

// Q16
const bunnyObject = {
  name: "Lucy",
  age: 3,
  isHappy: true
};

const bunnyJSON = JSON.stringify(bunnyObject);
console.log(bunnyJSON);

// Q17
let bunnyJSONString =
  '{"name":"Lucy","age":3,"isHappy":true}';

let parsed = JSON.parse(bunnyJSONString);

console.log(parsed.name);
console.log(parsed.age);

// =============================
// Comparison Operators
// =============================

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

// =============================
// Conditional Statements
// =============================

// Q20
let health = "healthy";

if (health === "healthy") {
  console.log("Healthy");
} else if (health === "sick") {
  console.log("Sick");
} else {
  console.log("Unknown");
}

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

console.log(
  health === "healthy" ? "Healthy" : "Not Healthy"
);

// Q21
function evenOdd(number) {
  return number % 2 === 0 ? "even" : "odd";
}

console.log(evenOdd(4));
console.log(evenOdd(7));
console.log(evenOdd(0));

// =============================
// Loops
// =============================

// Q22
for (let i = 0; i < 10; i++) {
  console.log(`Number ${i}`);
}

let num = 0;

while (num < 10) {
  console.log(`Number ${num}`);
  num++;
}

// Q23
let count = 9;

while (count >= 1) {
  console.log(count);
  count--;
}

for (let i = 9; i >= 1; i--) {
  console.log(i);
}

// =============================
// Exception Handling
// =============================

// Q24
function safeSum(a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number"
  ) {
    throw new Error(
      "Both arguments must be numbers"
    );
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

// =============================
// Brain Teasers
// =============================

// BT1
let carrots = 3;

while (carrots) {
  console.log("munch");
  carrots--;
}

// BT2
const bunnyNames = [
  "Lucy",
  "Tom",
  "Molly",
  "Bella",
  "Mario",
  "Luigi"
];

for (let i = 0; i < bunnyNames.length; i++) {
  if (bunnyNames[i].length > 4) {
    console.log(bunnyNames[i]);
  }
}

let x = 0;

while (x < bunnyNames.length) {
  if (bunnyNames[x].length > 4) {
    console.log(bunnyNames[x]);
  }
  x++;
}

// BT3
const groups = [
  ["Lucy", "Tom"],
  ["Molly", "Bella"],
  ["Mario", "Luigi"]
];

let number = 1;

for (let i = 0; i < groups.length; i++) {
  for (let j = 0; j < groups[i].length; j++) {
    console.log(`${number}. ${groups[i][j]}`);
    number++;
  }
}

// BT4
const bunnyGroup = [
  { name: "Lucy", isHappy: true },
  { name: "Tom", isHappy: false },
  { name: "Molly", isHappy: true }
];

function countHappyBunnies(arr) {
  let happy = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isHappy) {
      happy++;
    }
  }

  return happy;
}

const happyCount =
  countHappyBunnies(bunnyGroup);

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
