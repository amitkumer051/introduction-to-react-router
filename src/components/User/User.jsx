/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({user}) => {
    console.log(user);
    const {id,name,email,phone}= user;

    const userStyle={
        border:'2px solid green',
        padding: '5px',
        borderRadius:'20px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;