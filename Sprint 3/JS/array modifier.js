// //add value at the end
// var nums = [1,2,3,4,5]; 
// console.log(nums);
// nums.push(6); 
// console.log(nums);

// //using length property
// var nums = [1,2,3,4,5]; 
// console.log(nums);
// nums[nums.length] = 6; 
// console.log(nums);


// // unshift - adding elements beginning
// var nums = [2,3,4,5]; 
// console.log(nums); 
// nums.unshift(1); 
// console.log(nums); 

// nums = [3,4,5]; 
// nums.unshift(1,2); 
// console.log(nums); 

// //Removing Elements from an Array
// // deleting element from end
// var nums = [1,2,3,4,5,9]; 
// nums.pop(); 
// console.log(nums);


// //deleting element of start
// var nums = [9,1,2,3,4,5]; 
// nums.shift(); 
// console.log(nums);
// // Both pop() and shift() return the values they remove


// //adding and removing elements from mid
// //adding
// var nums = [1,2,3,7,8,9]; 
// nums.splice(3,0,4,5,6); 
// console.log(nums); 

// //removal
var nums = [1,2,3,100,200,300,400,4,5]; 
nums.splice(3,4); 
console.log(nums);


// // Putting Array Elements in Order
// //reverse every element
// var nums = [1,2,3,4,5]; 
// nums.reverse(); 
// console.log(nums);

//sort
// var names = ["D","M","C","C","B","R","a","d","b"]; 
// names.sort();   //compares ascii values for string
// console.log(names);

// var nums = [3,1,2,100,4,200]; 
// nums.sort();    //it consider every value as string
// console.log(nums);


// function compare(num1, num2) { 
//     return num1 -num2; 
// } 

// var nums = [3,1,2,100,4,200]; 
// nums.sort(compare); // The sort() function uses the compare() function to 
//                     // sort the array elements numerically rather than lexicographically.
// console.log(nums);