// import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({ friend }) => {
    return (
        <div className="friend">
            <h2>Name: {friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p><Link to={`/friend/${friend.id}`}>Show details</Link></p>
        </div>
    );
};

export default Friend;