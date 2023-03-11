let arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.

// function getRandomInt() {
// 	let randomNumber = Math.floor(Math.random() * 10 ) + 1;
// 	return randomNumber;
// }

arr.push(Math.floor(Math.random() * 100));
arr.push(Math.floor(Math.random() * 100));

// arr.push(getRandomInt);
// arr.push(getRandomInt);

console.log(arr);