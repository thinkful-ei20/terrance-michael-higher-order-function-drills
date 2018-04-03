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
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];



//  // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
// 	const newArray = [];

// 	for (let item of arr) {
// 		if (fn(item) === true) {
// 			newArray.push(item);
// 		}
// 	}

// 	return newArray;
// }

// const filteredNames = filter(myNames, function(name) {
// 	// This is a "predicate function" - it's a function that only returns a boolean
// 	return name[0] === 'R';
// });

// console.log(filteredNames);

const hazardWarningCreator = function(typeOfWarning) {
	let warningCounter = 0;

	return function func(location) {
		warningCounter++;
		console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
	}

}

const rocksWarning = hazardWarningCreator('Rocks on the road');
const windWarning = hazardWarningCreator('High winds on the road');
const rainWarning = hazardWarningCreator('Exessive rain on the road');

rocksWarning('Main St and Pacific Ave');
windWarning('Main St and Pacific Ave');
rainWarning('Main St and Pacific Ave');