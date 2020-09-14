import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { count, incrementCount } = this.props;
        return (
            <button onClick={incrementCount}>
                {this.props.name} clicked {count} times
            </button>
        );
    }
}

export default withCounter(ClickCounter, 5);