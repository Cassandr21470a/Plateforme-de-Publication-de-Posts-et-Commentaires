import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../slices/postsSlice";
import { useNavigate } from "react-router-dom";

const AddPostPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ title, body }));
        navigate("/");
    };

    return (
        <div>
            <h1>Ajouter un Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Contenu" value={body} onChange={(e) => setBody(e.target.value)} required />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddPostPage;
