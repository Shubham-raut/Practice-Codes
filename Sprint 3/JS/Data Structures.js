// //Queue
// rajatQueue = () => {
//     const queue = []
//     return {
//         add(x) {
//             queue.unshift(x)
//         },
//         remove() {
//             return queue.pop()
//         },
//         next() {
//             return queue[queue.length - 1]
//         },
//         length() {
//             return queue.length
//         },
//         empty() {
//             return queue.length === 0
//         },
//         // atIndex(i){
//         //     return queue[i]
//         // },
//         // queue(){
//         //     return queue
//         // }
//     }
// }

// const marvelMovies = rajatQueue()
// marvelMovies.add('Iron Man')
// marvelMovies.add('Captain America')
// // console.log(marvelMovies.next())
// // console.log(marvelMovies.queue())



// // Priority Queues
// Queue = () => {
//     const queue = []
//     return {
//         add(x) {
//             queue.unshift(x)
//         },
//         remove() {
//             return queue.pop()
//         },
//         next() {
//             return queue[queue.length - 1]
//         },
//         length() {
//             return queue.length
//         },
//         empty() {
//             return queue.length === 0
//         },
//         queue() {
//             return queue
//         }
//     }
// }


// priorityQueue = () => {
//     //const queue = []
//     const highPriority = Queue()
//     const lowPriority = Queue()
//     return {

//         add(x, high = false) {
//             high ? highPriority.add(x) : lowPriority.add(x)
//         },

//         remove() {
//             if (!highPriority.empty()) {
//                 return highPriority.remove()
//             }
//             return lowPriority.dequeue()
//         },

//         next() {
//             if (!highPriority.empty()) {
//                 return highPriority.next()
//             }
//             return lowPriority.next()
//         },

//         length() {
//             return (
//                 highPriority.length + lowPriority.length
//             )
//         },

//         empty() {
//             return (
//                 highPriority.empty() && lowPriority.empty()
//             )
//         },
//         queue(high = false) {
//             if (high) {
//                 return highPriority.queue()
//             }
//             else {
//                 return lowPriority.queue()
//             }
//         }
//     }
// }

// const tasks = priorityQueue()
// tasks.add('Learn React', false)
// tasks.add('Learn Vue', false)
// tasks.add('Learn JavaScript', true)
// tasks.add('Learn cpp', false)
// console.log(tasks.queue())
// console.log(tasks.queue(true))
// console.log(tasks.next())



//stacks
stackCreator = () => {
    const stack = []
    return {
        push(x) {
            stack.push(x)
        },
        pop() {
            return stack.pop()
        },
        next() {
            return stack[stack.length - 1]
        },
        get length() {
            return stack.length
        },
        empty() {
            return stack.length == 0
        }
    }
}


const marvelMovies = stackCreator()
marvelMovies.push('Iron Man')
marvelMovies.push('Captain America')
console.log(marvelMovies.length) // 2
marvelMovies.pop()
console.log(marvelMovies.next()) // Iron Man