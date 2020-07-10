
// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30        // by key "age" store value 30
//   };
// console.log(user.name);
// console.log(user.age);
// user.isAdmin = true;
// console.log(user.isAdmin);
// delete user.age;
// console.log(user.age);


// const user = {
//     name: "John",
//     //"likes birds": true, 
//   };
//   user.name = "Pete"; // (*)
//   console.log(user.name); // Pete
//   user.age=6;
//   console.log(user.age);
// //   user."likes birds" = false; //error
// //   user.likes birds = false; //error
//   user["likes birds"] = false;
//   console.log(user["likes birds"]);



// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   console.log( user[key] );
//   console.log( user.key ) // undefined-- dot notation does not work



// //using reserved words for object is fine
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
//   console.log( obj.for + obj.let + obj.return );



// //key as string is allowed
// let obj = {
//     0: "test" // same as "0": "test"
//   };
//   // both alerts access the same property (the number 0 is converted to string "0")
//   console.log( obj["0"] ); // test
//   console.log( obj[0] ); // test (same property)



// //in operator
// let user = { name: "John", age: 30 };
// console.log( "age" in user ); // true, user.age exists
// console.log( "blabla" in user ); // false, user.blabla doesn't exist



// //for in loop
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     console.log( key,":",user[key] );
//   }

//   let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
  
//   for (let code in codes) {
//     console.log(code);  // 1, 41, 44, 49  - The phone codes go in the ascending sorted order, 
//                         //because they are integers. So we see 1, 41, 44, 49.
//   }

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes) {
    console.log( +code ); // 49, 41, 44, 1 - So, to fix the issue with the phone codes, 
                    //we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.
  }