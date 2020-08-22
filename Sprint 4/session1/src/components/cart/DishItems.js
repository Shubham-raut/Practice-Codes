import React, { Component } from 'react';

class DishItems extends Component {
    render() {
        return (
            <div className='dishCard'>
                <div>{this.props.name}</div>
                <div>{this.props.price}</div>
                <button onClick={() => this.props.addToCartHandlorX(this.props.id)}>Add to Card</button>
            </div>
        )
    }
}

export default DishItems;



