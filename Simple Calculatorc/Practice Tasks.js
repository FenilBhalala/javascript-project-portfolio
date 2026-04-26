// 1. Declare let x = 10; let y = 5; → print sum, difference, product, division, remainder.
console.log("\nQ.1");
let x=10,y=5;
console.log("Sum :- " + (x+y));
console.log("Difference :- " + (x-y));
console.log("Product :- " + (x*y));
console.log("Division :- " + (x/y));
console.log("Remainder :- " + (x%y));


// 2. Calculate 2 ** 3 (power).
console.log("\nQ.2");
console.log(2**3);

// 3. Create a variable age = 20 → check if age ≥ 18.
console.log("\nQ.3");
let age = 20;
console.log(age>=18);
console.log((age>=18)?"Adult":"Minor");

// 4. Write let isStudent = true → check isStudent && age > 18.
console.log("\nQ.4");
let isStudent = true;
console.log(isStudent && age>18);

// 5. Use || → console.log(age < 18 || isStudent)
console.log("\nQ.5");
console.log(age < 18 || isStudent);

// 6. Try assignment: x += 5; x -= 2; → log results.
console.log("\nQ.6");
console.log("OG X :- " + x);
x+=5;
console.log("X after (x+=5):- " + x);
x-=2;
console.log("X after (x-=2):- " + x);

// 7. Check difference between == and ===
console.log("\nQ.7");
console.log("when Useing '==' :- " + (5=="5"));
console.log("when Useing '===' :- " + (5==="5"));


// 8. Test NOT operator: console.log(!true, !false);
console.log("\nQ.8");
console.log(!true, !false);

// 9. Make a variable marks = 85 → print "Pass" if ≥ 40 else "Fail" (with if).
console.log("\nQ.9");
let mark = 85;
if (mark>=40) {
    console.log("Pass");
}
else{
    console.log("Fail");
}

// 10. Write let result = (age > 18) ? "Adult" : "Minor"; console.log(result);
console.log("\nQ.10");
let result = (age>18)?"Adult":"Minor";
console.log(result);
