function Queue() {
    this.dataStore = [];
    this.enqueue = function (element) {
        this.dataStore.push(element);
    };

    this.dequeue = function () {
        return this.dataStore.shift();
    };

    this.front = function () {
        return this.dataStore[0];
    };

    this.back = function () {
        return this.dataStore[this.dataStore.length - 1];
    };

    this.size = function () {
        return this.dataStore.length;
    }

    this.empty = function () {
        return (this.size() == 0);
    }  
}

var q = new Queue();
q.enqueue("M");
q.enqueue("C");
q.enqueue("J");
console.log(q.size());
console.log(q.empty());
console.log(q.dequeue());
console.log(q.size());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.size());
console.log(q.empty());

