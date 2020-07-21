
// //Shallo copy - copping referance
// var nums = []; 
// for (var i = 0; i < 10; ++i) { 
//     nums[i] = i+1; 
// } 
// var samenums = nums; 
// nums[0] = 400; 
// console.log(samenums[0]); 

// //deep copy - copping each value seprately
// function copy(arr1, arr2) { 
//     for (var i = 0; i < arr1.length; ++i) { 
//         arr2[i] = arr1[i]; 
//     } 
// } 

// var nums = []; 
// for (var i = 0; i < 100; ++i) { 
//    nums[i] = i+1; 
// } 

// var samenums = []; 
// copy(nums, samenums); 
// nums[0] = 400; 
// console.log(samenums[0]); 



// //indexOf
// var names = ["A", "C", "R", "D", "J"]; 
// var name = "A"; 
// var position = names.indexOf(name); 

// if (position >= 0) { 
//     console.log("Found " + name + " at position " + position); 
// } 
// else { 
//     console.log(name + " not found in array."); 
// } 


// //last index of
// var names = ["CSS", "Mike", "HTML", "SQL", "CSS", "Mike", "Java"]; 
// var name = "Mike"; 

// var firstPos = names.indexOf(name); 
// console.log("First found " + name + " at position " + firstPos); 

// var lastPos = names.lastIndexOf(name); 
// console.log("Last found " + name + " at position " + lastPos); 

// //join() and toString() convert array to String.
var names = ["CSS", "Mike", "HTML", "SQL", "CSS", "Mike", "Java"]; 

var namestr = names.join(); 
console.log(namestr); 
var namestr = names.join('...'); 
console.log(namestr); 

// namestr = names.toString(); 
// console.log(namestr);


// //concatination
// var firstArray = ["A", "Z", "T", "D", "J"]; 
// var secondArray = ["CSS", "C", "B"]; 
// var thirdArray = [];  
// thirdArray = firstArray.concat(secondArray); 
// console.log(thirdArray); 
// console.log(firstArray); 
// console.log(secondArray); 


//splice - it breaks array
// var thirdArray = ["M","C","T","A","D","E","J"]; 
// var secondArray = thirdArray.splice(3,3); 
// var firstArray = thirdArray; 
// console.log(secondArray); 
// console.log(firstArray); 