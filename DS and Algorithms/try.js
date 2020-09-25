const strMAtch = (a, b) => {
    let l1 = a.length;
    let l2 = b.length;
    let count = 0, i, j;

    if (l1 > l2) {
        return -1
    }
    for (i = 0; i < l2 - l1; i++) {
        for (j = 0; j < l1; j++) {
            if (a[j] != b[i]) {
                break;
            }
        }
        if (j == l1 - 1) {
            return i
        }
    }
    return -1;
}

// console.log(strMAtch('ab', 'tanbbdahabrhw'));

const power = (i, n) => {
    if (n == 0) {
        return 1;
    }
    let pow = power(i, n / 2);
    if (n % 2 != 0) {
        return i * pow * pow;
    }
    return pow * pow;
}

//factorial recurssion
const factorial = (n) => {
    let fact;
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

//tower of hanoi
const tower = (n, a, b, c) => {

    if (n == 1) {
        console.log("Move disc 1 from " + a + " to " + c);
        return;
    }
    else {
        tower(n - 1, a, c, b);
        console.log("Move disc " + n + " from " + a + " to " + c);
        tower(n - 1, b, a, c);
    }
}

console.log(tower(4, "A", "B", "C"));