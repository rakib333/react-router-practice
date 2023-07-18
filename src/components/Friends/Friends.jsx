// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import './Friends.css'

const Friends = () => {
    const users = useLoaderData();
    return (
        <div className="friends">
            {
                users.map(user => <Friend
                    key={user.id}
                    friend={user}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;