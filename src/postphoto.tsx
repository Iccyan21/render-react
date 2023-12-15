import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Post {
    title: string;
    photo: string;
    movies: { title: string; video: string; }[];
}

const PostDetailComponent = () => {
    const [post, setPost] = useState<Post | null>(null);
    const { title } = useParams<{ title: string }>();

    useEffect(() => {
        axios.get(`https://django-5mwz.onrender.com/post/post-photo/${title}/`)
            .then(response => {
                setPost(response.data);
                console.log(response.data);
            })
            .catch(error => console.error('Error:', error));
    }, [title]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <img src={`https://django-5mwz.onrender.com${post.photo}`} alt={post.title} style={{ maxWidth: '300px' }} />
            {post.movies.map((movie, index) => (
                <div key={index}>
                    <h3>{movie.title}</h3>
                    <video controls style={{ maxWidth: '300px' }}>
                        <source src={`https://django-5mwz.onrender.com${movie.video}`} type="video/mp4" />
                    </video>
                </div>
            ))}
        </div>
    );
};

export default PostDetailComponent;
