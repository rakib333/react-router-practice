// import React from 'react';

import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>This is post details for id : {details.id}</h3>
            <p>{details.body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;