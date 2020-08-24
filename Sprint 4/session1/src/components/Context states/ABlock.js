import React, { Component } from 'react';
import BBlock from './BBlock';

class ABlock extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BBlock />
        );
    }
}

export default ABlock;