import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class Try extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        console.log('Final data is: ', data);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    normalAlert = () => {
        alert("this is normal alert");
    }
    sweetAlert = () => {
        // swal("", "Something went", "info");

        swal({
            // title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
        });
    }


    componentDidMount = () => {
        // firebase.auth().onAuthStateChanged(function (user) {
        //     if (user) {
        //         console.log("user is present");
        //     }
        //     else {
        //         console.log('User is absent');
        //     }
        // });

        // axios.get('https://basic-authentication-97c05.firebaseio.com/users/' + user.uid + '.json?auth=lVFjuLiWhnFSDQMUo0MOGeXAUyb4dCPDYU342Vd9')
        //     .then((response) => {
        //         console.log('handle success');
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .then(() => {
        //         console.log('tried axios')
        //     })


        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log('handle success');
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                console.log('tried axios')
            })
    }

    // https://jsonplaceholder.typicode.com/posts
    // lVFjuLiWhnFSDQMUo0MOGeXAUyb4dCPDYU342Vd9
    // https://basic-authentication-97c05.firebaseio.com/


    render() {
        // const { fullname } = this.state;
        return (
            <div>
                <h1>Forms and Input</h1>
                <h3>full name is: {this.state.fullname}</h3>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder='your name' onChange={this.handleChange} name='fullname' /> </p>
                    <p><button>Send data</button></p>
                    <button onClick={this.normalAlert}>Alert</button>
                    <button onClick={this.sweetAlert}>SweetAlert</button>

                </form>
            </div >
        );
    }
}

export default Try;