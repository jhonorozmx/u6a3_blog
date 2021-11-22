import { useSelector } from "react-redux";
import {
  selectPosts,
  selectPostsLoading,
  selectPostsError,
} from "../features/posts/postsSelector";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import PostCard from "../components/PostCard";

const DashBoard = () => {
  // Redux State
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const { hasError, errorMessage } = error;
  const posts = useSelector(selectPosts);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : hasError ? (
        <MessageBox message={errorMessage} />
      ) : (
        <>
          {
            <div className="mid-row">
              {posts.length === 0 && (
                <div className="empty-board">
                  <h1>There are no posts</h1>
                </div>
              )}
              <div className="card-container">
                {posts.map((post) => (
                  <PostCard key={post.id} postData={post} />
                ))}
              </div>
            </div>
          }
        </>
      )}
    </div>
  );
};

export default DashBoard;
