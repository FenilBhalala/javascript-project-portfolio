// 1. for Loop

for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// 2. while Loop
console.log("\n");

let i = 1;
while (i <= 5) {
  console.log("Number: " + i);
  i++;
}

// 3. do...while Loop
console.log("\n");

i = 1;
do {
  console.log("Value: " + i);
  i++;
} while (i <= 3);

// 4. for...of Loop (for arrays/iterables)
console.log("\n");

let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
for (const key in fruits) {
    console.log(key);
}

// 5. for...in Loop (for objects)
console.log("\n");

let student = { name: "Aria", age: 18, grade: "A" };
for (let key in student) {
  console.log(key + ": " + student[key]);
}

// 6. break & continue
// break → stops the loop completely.
// continue → skips the current loop iteration.
console.log("\n");

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop at 5
  console.log(i);
}
