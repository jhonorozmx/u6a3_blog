import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthError,
  selectAuthLoading,
} from "../features/authentication/authSelectors";
import { createPost } from "../features/posts/postsThunk";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

const CreatePost = () => {
  // Inner State
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Routing
  const navigate = useNavigate();

  // Redux State
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const loading = useSelector(selectAuthLoading);
  const { hasError, errorMessage } = error;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body }))
      .unwrap()
      .then(() => {
        navigate("/posts", { replace: true });
      })
      .catch(() => {
        return;
      });
  };

  return (
    <div className="mid-row">
      {loading && <LoadingBox />}
      {hasError && <MessageBox message={errorMessage} />}
      <form onSubmit={submitHandler}>
        <h1>Create a new post</h1>
        <div>
          <label htmlFor="title">Title</label> <br />
          <input
            type="text"
            id="title"
            placeholder={`e.g. How to use Redux `}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="body">Body</label> <br />
          <textarea
            name="body"
            id="body"
            cols="20"
            rows="5"
            minLength="10"
            maxLength="280"
            placeholder={`e.g. First, you need to create a store... `}
            wrap="soft"
            required
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button type="submit" className="submit-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
