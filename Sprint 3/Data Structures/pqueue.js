// function PriorityQueue() {
//     this.dataStore = [];
//     this.enqueue = function (element) {
//         if(this.empty()){
//             this.dataStore.push(element);
//         }
//         else{
//             let added=false;
//             for(let i in this.dataStore){
//                 if(element[1]<this.dataStore[i][1]){
//                     this.dataStore.splice(i,0,element);
//                     added=true;
//                     break;
//                 }
//             }
//             if(!added){
//                 this.dataStore.push(element);
//             }
//         }
//     };

//     this.dequeue = function () {
//         return this.dataStore.shift();
//     };

//     this.front = function () {
//         return this.dataStore[0];
//     };

//     this.back = function () {
//         return this.dataStore[this.dataStore.length - 1];
//     };

//     this.show=function(){
//         return this.dataStore;
//     }

//     this.size = function () {
//         return this.dataStore.length;
//     }

//     this.empty = function () {
//         return (this.size() == 0);
//     }  

// }

// var pq = new PriorityQueue();
// pq.enqueue(["M",2]);
// pq.enqueue(["C",3]);
// pq.enqueue(["J",1]);
// pq.enqueue(["P",2]);
// console.log(pq.show());
// console.log(pq.size());
// console.log(pq.empty());
// console.log(pq.dequeue());
// console.log(pq.size());
// console.log(pq.dequeue());
// console.log(pq.show());
// console.log(pq.dequeue());
// console.log(pq.size());
// console.log(pq.empty());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.size());

var a = [];
a.unshift(1);
console.log(a);
a.unshift(22);
console.log(a);
a.shift();
console.log(a);
a.unshift(3, [4, 5]);
console.log(a);
a.shift();
console.log(a);
a.shift();
console.log(a);