import React from 'react';

const ClickComp = () => {
    return (
        <h2>Button Clicked</h2>
    );
}

export default ClickComp;


// function diamondCoals(diamond, coals) {

//     // Write your code inside the function from here

//     let counts = 0;
//     let coalsx = coals.split('');
//     let diamondx = diamond.split('');

//     for (let i = 0; i < coalsx.length; i++) {
//         for (let j = 0; j < diamondx.length; j++) {
//             counts = coalsx[i] === diamondx[j] ? counts += 1 : counts;
//         }
//     }
//     return counts;
// }

// console.log(diamondCoals('abc', 'AaBbCc'));