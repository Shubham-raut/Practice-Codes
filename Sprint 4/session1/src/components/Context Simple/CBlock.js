import React, { Component, useContext } from 'react';
import { FirstName, LastName } from './Outer';

// class CBlock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     return (
//       <div>
//         <FirstName.Consumer>
//           {(fname) => {
//             return (
//               <LastName.Consumer>
//                 {(lname) => {
//                   return (
//                     <h1>
//                       My name is {fname} {lname}
//                     </h1>
//                   )
//                 }}
//               </LastName.Consumer>
//             )
//           }}
//         </FirstName.Consumer>
//       </div>
//     );
//   }
// }


const CBlock = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <h1>
      My Name is: {fname} {lname}
    </h1>
  )
}

export default CBlock;