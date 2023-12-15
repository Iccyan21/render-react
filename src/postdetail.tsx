import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Post {
    title: string;
    photo: string;
    video: string;
}



const PostDetail = () => {
    const [post, setPost] = useState<Post | null>(null); // 型をPostまたはnullに設定
    const { title } = useParams<{ title: string }>(); // URLからtitleパラメータを取得

    useEffect(() => {
        axios.get(`https://fuck-render-django.onrender.com/post/${title}/`)
            .then(response => {
                setPost(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [title]); // titleが変わるたびにリクエストを実行

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <img src={`https://fuck-render-django.onrender.com${post.photo}`} alt={post.title} style={{ maxWidth: '300px' }} />
            <video controls style={{ maxWidth: '300px' }}>
                <source src={`https://fuck-render-django.onrender.com${post.video}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default PostDetail;
