import React, { Component, createContext } from 'react';
import ABlock from './ABlock';

const FirstName = createContext();
const LastName = createContext();

class Outer extends Component {
    render() {
        return (
            <FirstName.Provider value={"shubham"}>
                <LastName.Provider value={'Raut'}>
                    <ABlock />
                </LastName.Provider>
            </FirstName.Provider>
        )
    }
}

export default Outer;
export { FirstName, LastName };