function Set() {
   this.dataStore = [];
   this.add = function (element) {
      if (this.dataStore.indexOf(element) < 0) {
         this.dataStore.push(element);
         return true;
      }
      else {
         return false;
      }
   }

   this.remove = function (element) {
      let pos = this.dataStore.indexOf(element);
      if (pos > -1) {
         this.dataStore.splice(pos, 1);
         return true;
      }
      else {
         return false;
      }
   }

   this.contains = function (element) {
      if (this.dataStore.indexOf(element) > -1) {
         return true;
      }
      else {
         return false;
      }
   }

   this.show = this.values = function () {
      return this.dataStore;
   }

   this.size = function () {
      return this.dataStore.length;
   }

   this.union = function (otherSet) {
      var unionSet = new Set();
      var firstSet = this.values();
      var secondSet = otherSet.values();
      firstSet.forEach(element => {
         unionSet.add(element);
      });
      secondSet.forEach(element => {
         unionSet.add(element);
      });
      return unionSet.dataStore;
   }

   this.intersect = function (otherSet) {
      var interSet = new Set();
      var firstSet = this.values();
      firstSet.forEach(element => {
         if (otherSet.contains(element)) {
            interSet.add(element);
         }
      });
      return interSet.dataStore;
   }

   this.difference = function (otherSet) {
      var diffSet = new Set();
      var firstSet = this.values();
      firstSet.forEach(element => {
         if (!otherSet.contains(element)) {
            diffSet.add(element);
         }
      });
      return diffSet.dataStore;
   }

   this.subset = function (otherSet) {
      var firstSet = this.values();
      return firstSet.every(element => {
         return otherSet.contains(element);
      });
   }
}

var names = new Set();
console.log('operations for set names');
console.log(names.add("D"));
console.log(names.add("J"));
console.log(names.add("C"));
console.log(names.add("R"));
console.log(names.add("D"));
console.log(names.remove("J"));
console.log(names.contains("D"));
console.log(names.contains("A"));
console.log(names.show());
console.log(names.size());

var two = new Set();
console.log('operations for set two');
console.log(two.add("D"));
console.log(two.add("J"));
console.log(two.add("P"));
console.log(two.add("R"));
console.log(two.show());
console.log(two.size());

console.log(two.union(names));
console.log(two.intersect(names));
console.log(two.difference(names));
console.log(two.subset(names));