// import React from 'react';
import './friendDetails.css'
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        <div className="friendDetails">
            <h2>This is friend details</h2>
            <div className='info'>
                <h4>{user.name}</h4>
                <h3>{user.email}</h3>
                <h3>{user.phone}</h3>
            </div>
        </div>
    );
};

export default FriendDetails;