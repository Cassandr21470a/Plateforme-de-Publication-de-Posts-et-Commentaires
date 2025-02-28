import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [id]);

    if (!post) return <p>Chargement...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Commentaires</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostDetailPage;
