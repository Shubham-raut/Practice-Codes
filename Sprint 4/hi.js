var lengthOfLastWord = (nums) => {
    let x = false;
    nums.forEach((n, i) => { nums.includes(n, i + 1) && (x = true) });
    return (x);
};

console.log(lengthOfLastWord([1, 2, 3]));