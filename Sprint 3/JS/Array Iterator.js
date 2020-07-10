// //foreach - applies on every function
// function square(num) { 
//     console.log(num, num * num); 
// } 
// var nums = [1,2,3,4,5,6,7,8,9,10]; 
// nums.forEach(square); 



// //every() - returns trueif the function can return true for every element in the array.
// function isEven(num) { /*from   ww  w .j  ava  2s .  c om*/
//     return num % 2 == 0; 
// } 
// var nums = [2,4,6,8,10]; 
// var even = nums.every(isEven); 
// if (even) { 
//     console.log("all numbers are even"); 
// } else { 
//     console.log("not all numbers are even"); 
// } 



// //returns true if at least one of the elements meets the criterion of the Boolean function.
// function isEven(num) { // ww  w . ja v  a2  s  . c  o m
//     return num % 2 == 0; 
// } 
// var nums = [1,2,3,4,5,6,7,8,9,10]; 
// var someEven = nums.some(isEven); 
// if (someEven) { 
//     console.log("some numbers are even"); 
// } 
// else { 
//     console.log("no numbers are even"); 
// } 
// nums = [1,3,5,7,9]; 
// someEven = nums.some(isEven); 
// if (someEven) { 
//     console.log("some numbers are even"); 
// } 
// else { 
//     console.log("no numbers are even"); 
// } 



// //The reduce() function applies a function to an accumulator and the successive elements of an 
// //array until the end of the array is reached. The reduce() method returns a single value.
// function add(runningTotal, currentValue) { 
//     return runningTotal + currentValue; 
// } 
// var nums = [1,2,3,4,5,6,7,8,9,10]; 
// var sum = nums.reduce(add); 
// console.log(sum);

// function max(temp, currentValue) { 
//     if(temp>currentValue){
//         return temp;
//     }
//     else{
//         return currentValue;
//     }
// } 
// var nums = [1,2,3,4,5,6,17,8,9,10]; 
// var m = nums.reduce(max); 
// console.log(m);



// //reduceRight
// function concat(accumulatedString, item) { 
//     return accumulatedString + item; 
// } 
// var words = ["the ", "quick ","brown ", "fox "]; 
// var sentence = words.reduceRight(concat); 
// console.log(sentence);


// //map
// function curve(grade) { 
//     return grade += 5; 
// } 
// var grades = [77, 65, 81, 92, 83]; 
// var newgrades = grades.map(curve); 
// console.log(newgrades);

// //using foreach function
// function curve(grade) { 
//     console.log(grade += 5); 
// } 
// var grades = [77, 65, 81, 92, 83]; 
// var newgrades = grades.forEach(curve); 
// //console.log(newgrades);



//filter
function isEven(num) { /*from  w  w  w .j  av a2  s  .c om*/
    return num % 2 == 0; 
} 
function isOdd(num) { 
    return num % 2 != 0; 
} 
var nums = []; 
for (var i = 0; i < 20; ++i) { 
    nums[i] = i+1; 
} 
var evens = nums.filter(isEven); 
console.log("Even numbers: "); 
console.log(evens); 
var odds = nums.filter(isOdd); 
console.log("Odd numbers: "); 
console.log(odds); 