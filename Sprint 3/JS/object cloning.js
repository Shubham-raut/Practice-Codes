// // object is coppied by reference
// let user = { name: 'John' };
// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference
// console.log(user.name); // 'Pete', changes are seen from the "user" reference

// // Comparison by reference
// let a = {};
// let b = a; // copy the reference
// console.log( a == b ); // true, both variables reference the same object
// console.log( a === b ); // true

// let a = {};
// let b = {}; // two independent objects
// console.log( a == b ); // false




// //1 - coping every value using for loop
// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//     clone[key] = user[key];
// }

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it
// console.log(user.name); // still John in the original object
// console.log(clone.name);



//2 - coping calues using object.assign function
// Object.assign(dest, [src1, src2, src3...])

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);
// // now user = { name: "John", canView: true, canEdit: true }



// let user = {
//     name: "John",
//     age: 30
// };
// //It copies all properties of user into the empty object and returns it.
// let clone = Object.assign({}, user);




//nested cloning
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
console.log(user.sizes.height); // 182
  //Now it’s not enough to copy clone.sizes = user.sizes, because the user.sizes is an object,
  //it will be copied by reference. So clone and user will share the same sizes:

  //To fix that, we should use the cloning loop that examines each value of user[key] and, if it’s an object, 
  //then replicate its structure as well. That is called a “deep cloning”.