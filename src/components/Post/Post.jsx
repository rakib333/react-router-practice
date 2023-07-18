// import React from 'react';
import './POst.css'
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${post.id}`)
    }
    return (
        <div className="post">
            <h2>{post.id}</h2>
            <p>{post.title}</p>
            <Link to={`/post/${post.id}`}>Show details</Link>
            <button onClick={handleNavigate}>Show post details</button>
        </div>
    );
};

export default Post;