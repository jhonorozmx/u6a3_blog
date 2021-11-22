import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPostsLoading,
  selectPostsError,
  selectPostById,
} from "../features/posts/postsSelector";
import { getPostById } from "../features/posts/postsThunk";
//import { checkOrder } from "../features/posts/postsSlice";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Post from "../components/Post";

const PostView = () => {
  // Routing
  const navigate = useNavigate();
  const { postId } = useParams();

  // Redux State
  const dispatch = useDispatch();
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const { hasError, errorMessage } = error;
  const post = useSelector(selectPostById);

  useEffect(() => {
    dispatch(getPostById(+postId));
  }, [dispatch, postId, post]);

  return loading ? (
    <LoadingBox />
  ) : hasError ? (
    <MessageBox message={errorMessage} />
  ) : (
    <div className="mid-row">
      <Post postData={post} />
      <button
        className="nav-btn"
        onClick={() => {
          navigate("/posts");
        }}
      >
        Go back to posts
      </button>
    </div>
  );
};

export default PostView;
