import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slices/postsSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (status === "loading") return <p>Chargement...</p>;
    if (status === "failed") return <p>Erreur : {error}</p>;

    return (
        <div>
            <h1>Liste des Posts</h1>
            {posts.length === 0 ? (
                <p>Aucun post disponible.</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomePage;
