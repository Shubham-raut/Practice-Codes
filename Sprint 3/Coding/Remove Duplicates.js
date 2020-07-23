let sortArray = (array) => {
    array.sort((a, b) => a - b);
    let unique = [];
    let unique2 = [];
    array.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    len = unique.length;

    if (len != 1) {
        unique2 = unique.splice(len / 2, len / 2);
        return [unique, unique2];
    }
    else
        return unique;
}
arr = [1, 9, 2, 3, 3, 3, 3, 3, 4, 4, 5, 6, 7, 8, 5, 6, 6, 9, 10, 10];
// arr=[3,3]
console.log(sortArray(arr));