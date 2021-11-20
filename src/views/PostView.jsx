import React from "react";
import Axios from "axios";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Post from "../components/Post";

const PostView = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { postId } = useParams();
  const location = useLocation();
  const from = location.state?.from || "/posts";

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!isMounted) return null;
        setPost(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();

    return () => (isMounted = false);
  }, [postId]);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox message="error" />
  ) : (
    <div className="mid-row">
      <Post postData={post} />
      <button
        className="nav-btn"
        onClick={() => {
          navigate(from);
        }}
      >
        Go back to posts
      </button>
    </div>
  );
};

export default PostView;
