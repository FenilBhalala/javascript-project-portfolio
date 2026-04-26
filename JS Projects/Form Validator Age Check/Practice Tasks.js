// 1. Check types with typeof for: number, string, boolean, undefined, null, object, array.
// n-number n-null s-string s-symbol b-boolen b-bigint u-undefied
console.log("\nQ.1");
let temp;
temp = 15
console.log(typeof temp );
temp = "Fenil";
console.log(typeof temp );
temp = true
console.log(typeof temp );
temp = undefined
console.log(typeof temp );
temp = null
console.log(typeof temp );
temp = {
    name: "fenil",
    rollno : 52
}
console.log(typeof temp );
temp = [10,15,20,15];
console.log(typeof temp );

// 2. Convert "25" into a number and add 5.
console.log("\nQ.2");
let numstr = "25"
console.log("Var type before The Convert :- " , typeof numstr);
numstr = Number(numstr);
console.log("Var type After The Convert :- " , typeof numstr);

// 3. Convert true into a number.
console.log("\nQ.3");
let TAF = true;
console.log("Var type before The Convert :- " , typeof TAF);
TAF = Number(TAF);
console.log("Var type After The Convert :- " , typeof TAF);

// 4. Convert 0 into a boolean.
console.log("\nQ.4");
let num = 0;
console.log("Var type before The Convert :- " , typeof num);
num = Boolean(num);
console.log("Var type After The Convert :- " , typeof num);

// 5. Check result of: "10" + 5, "10" - 5, true + "JS".
console.log("\nQ.5");
console.log("10" + 5);
console.log("10" - 5);
console.log(true + "JS");

// 6. Use Boolean() to check if values are truthy/falsy: 0, "0", "", " ", null, undefined.
console.log("\nQ.6");
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean(undefined));

// 7. Compare: console.log(null == undefined); vs console.log(null === undefined);.
console.log("\nQ.7");
console.log(null == undefined);
console.log(null === undefined);

// 8. Try NaN examples: 0/0, parseInt("hello").
console.log("\nQ.8");
;
// 0 / 0
// Math.sqrt(-1)
// Infinity / Infinity
// parseInt("hello")
// Number("abc")
// "foo" * 4
// undefined * 2
console.log(isNaN(0/0));

// 9. Practice isNaN() function.
console.log("\nQ.9");
console.log("0/0 :- ", isNaN(0/0));
console.log("5 :- ", isNaN(5));

// 10. Use BigInt to store a number larger than 9007199254740991.
console.log("\nQ.10");
let bignumber = BigInt(900719925474099185);
console.log(bignumber);
