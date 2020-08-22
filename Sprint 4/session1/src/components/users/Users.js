import React, { Component } from 'react';
import User from '../user/User';

class Users extends Component {

    constructor(props) {
        super(props);
        // this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User >John</User>
                <User age='30'></User>
                <User age='40'>Peater</User>
            </div>
        )
    }
}

export default Users;
