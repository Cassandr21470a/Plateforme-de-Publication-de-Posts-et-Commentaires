import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slices/postsSlice";

const useFetchPosts = () => {
    const dispatch = useDispatch();
    const { posts, status } = useSelector((state) => state.posts);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

    return { posts, status };
};

export default useFetchPosts;