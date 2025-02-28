import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import AddPostPage from "./pages/AddPostPage";
import NavBar from "./components/Navbar";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post/:id" element={<PostDetailPage />} />
                <Route path="/add-post" element={<AddPostPage />} />
            </Routes>
        </>
    );
}

export default App;
