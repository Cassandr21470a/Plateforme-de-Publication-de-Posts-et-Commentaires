import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const addPost = createAsyncThunk("posts/addPost", async (post) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
});
// Thunk pour récupérer les posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
});

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default postsSlice.reducer;
