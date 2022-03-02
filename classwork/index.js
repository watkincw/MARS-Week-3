// Scoped demonstration
// let a = 5, b = 10;

// if (a > b) {
//     let c = 50; // Scope of c is only within if block
// } else {
//     let c = 100;
// }

// console.log(c);


// // Declaration
// // let
// let user = 'John';
// console.log(user);
// user = 'Mike';

// console.log(user);

// // var
// var user = 'John';
// var user = 'Mike';

// console.log(user);


// // Convention
// let userProfile; // camelCase


// // const
// const COLOR = 'red';

// console.log(COLOR);


// console.log('Test'/0); // NaN


// Nested Expression
// let a = 10, b = 20;

// console.log(`Sum of a and b is: ${ a + b }`); // Expression(inside '{}') is always followed by $


// let age = "Test";

// console.log(typeof(age));


// '==' vs. '==='
// console.log(5 == '5'); // true - 5(number) loosely equals 5(string)
// console.log(5 === '5'); // false - strict equal(===) forces typeof to match as well as the data itself


// // Increment
// let a = 10;
// console.log(a);
// console.log(++a); // a++ (increments pre-display)
// console.log(a++); // a++ (increments post-display)
// a++;
// console.log(a);


// !!! LOOPS !!!

// let age = 20;

// if (age > 18 && age > 59) {
//     console.log('Eligible to vote and pension');
// } else if (age < 60) {
//     console.log("Won't get a pension now");
// } else if (age === 18) {
//     console.log('You turned 18');
// } else {
//     console.log('Not Eligible to vite');
// };

// switch(age) {
//     case 18:
//         console.log('You turned 18');
//         break;
//     case 19:
//         console.log('Eligible to vote');
//         break;
//     default:
//         console.log('No match');
// };

// While Loop 1. Initialization, 2. Condition

// let count = 0;

// while (count < 5) {
//     ++count;
//     console.log(count);
// };


// String manipulation - targeting partial strings(substrings)
let str = 'Hi how are you?';

str[0] = 'h';

console.log(str[0]);

console.log(str.substring(3,10));

console.log(str.substr(3,10)); // 'substr' - depricated