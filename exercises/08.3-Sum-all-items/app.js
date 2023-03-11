function sumTheElements(sumArray){
	
	let total = 0;
	
	// loop through the array and add up all the elements
	for (let i = 0; i < sumArray.length; i++) {
		total += sumArray[i];
	}

	return total;
}

// call the function with the given array
console.log(sumTheElements([2, 13, 34, 5])); // expected output: 54