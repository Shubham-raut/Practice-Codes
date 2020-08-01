// //1 - Simple
// Stack = () => {
//     const data = [];
//     return {
//         push(x) {
//             data.push(x)
//         },
//         pop() {
//             return data.pop()
//         },
//         peek() {
//             return data[data.length - 1]
//         },
//         get length() {
//             return data.length
//         },
//         empty() {
//             return data.length == 0
//         }
//     }
// }



function Stack() { 
    this.dataStore = []; 
    this.top = 0; 
    this.push = function(element) { 
        this.dataStore[this.top++] = element; 
    }; 
    this.pop = function(){ 
        return this.dataStore[--this.top]; 
    }; 
    this.peek = function() { 
        return this.dataStore[this.top-1]; 
    } ; 
    this.length = function(){ 
        return this.top; 
    }; 
    this.clear = function() { 
        this.top = 0; 
    } ;
} 


var marvelMovies = new Stack();
marvelMovies.push('Iron Man');
marvelMovies.push('Captain America');
console.log(marvelMovies.length()) // 2
console.log(marvelMovies.pop());
console.log(marvelMovies.peek()) // Iron Man
marvelMovies.clear();
console.log(marvelMovies.length()) // 2


