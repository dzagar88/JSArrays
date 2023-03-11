let myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

let sum = 0;
for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}
let average = sum / myArray.length;
console.log(average);