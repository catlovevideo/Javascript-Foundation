/* JavaScript Strings */

/*
var name = "Jim";
console.log(name);

var name2 = 'Jim';
console.log(name2);

var statement = "This is Jim's string";
console.log(statement);

var statement2 = 'He said "This is awesome"';
console.log(statement2);

var statement3 = 'He said "This is Jim\'s string"';
console.log(statement3);

var path = "C:\\folder\\myfile.txt";
console.log(path);

var multiline = "This is line 1\n"+
"This is line 2\n"+
"This is line 3";
console.log(multiline);

var part1 = "Hello ";
var part2 = "World!";
var whole = part1 + part2;
console.log(whole + "!!!!!");

var length = whole.length;
console.log(whole, length);

var index = whole.indexOf("World");
console.log(index);

var index2 = whole.indexOf("world");
console.log(index2);

if (whole.indexOf("W") !== -1) {
  console.log("W exists in string");
} else {
  console.log("W does not exist");
}

console.log(whole.charAt(1));

"Hello World!"
var world = whole.substr(6,5);
console.log(world);

console.log(whole.toLowerCase());
console.log(whole.toUpperCase());
console.log(whole);

var first = "Hello";
var second = "hello";

if (first.toLowerCase() === second.toLowerCase()) {
  console.log("The strings are equal");
} else {
  console.log("The strings are different");
}

function compare (a, b) {
  console.log(a + " < " + b , a < b);
}

compare('a', 'b');
compare('a', 'A');
compare('apples', 'oranges');
compare('apples', 'applications');
compare('app', 'apples');
compare('hello', 'hello');

// Three equal sign means a strict equal to, ex: 9 === '9' is false,
//												 undefined === null is false,
//												 9 === 9 is true,
// 												 undefined === undefined is true and so on..
//
// Two equal sign means an equal to and futhermore javascript can change the variable data type
// to match the condition between two variable/value, ex : 9 == '9' is true,
//														   undefined == null is true,
// 														   9 == 9 is also true and so on..
//
*/
// var my_array = [2, 3, 4];
// my_array.push(5); 
// console.log(my_array.toString()); 

// var pop = my_array.pop();
// console.log(my_array.toString());
// console.log(pop);

// my_array.unshift(1);
// console.log(my_array.toString());

// var shift = my_array.shift();
// console.log(my_array.toString());
// console.log(shift);
// we used a toString function to print the different value even after 
// the push/pop statement executed. Otherwise the result would be the same like the last one.
