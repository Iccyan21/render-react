import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    title: string;
    photo: string;
    video: string;
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get('https://django-5mwz.onrender.com/post/')
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>投稿</h1>
            {posts.map((post, index) => (
                
                <div key={index}>
                    <h2>{post.title}</h2>
                    <img src={post.photo} alt={post.title} style={{ maxWidth: '300px' }} />
                    <video controls style={{ maxWidth: '300px' }}>
                        <source src={post.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    );
};

export default Posts;
