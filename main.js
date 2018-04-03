'use strict';


// function repeat(fn, n){
// 	for (let i = 1; i <= n; i++) {
// 		fn();
// 	}
// }

// function hello(){
//   console.log('Hello world');
// }

// function goodbye(){
//  console.log('Goodbye world');
// }

// repeat(hello, 5);
// repeat(goodbye, 5);

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];



 // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
	const newArray = [];

	for (let item of arr) {
		if (fn(item) === true) {
			newArray.push(item);
		}
	}

	return newArray;
}

const filteredNames = filter(myNames, function(name) {
	// This is a "predicate function" - it's a function that only returns a boolean
	return name[0] === 'R';
});

console.log(filteredNames);