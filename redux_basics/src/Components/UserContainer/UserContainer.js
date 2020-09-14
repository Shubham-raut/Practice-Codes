import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../Redux';

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        userData.loading ?
            (<h3>Loading Text</h3>) :
            userData.error ?
                (<h3>{userData.error}</h3>) :
                (
                    <div>
                        <h2>User List</h2>
                        {
                            userData &&
                            userData.users &&
                            userData.users.map(user => <p key={user.id}>{user.name}</p>)
                        }
                    </div>
                )

    );
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);