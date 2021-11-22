import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postsThunk";
import { selectIsAuthenticated } from "../features/authentication/authSelectors";

const PostCard = ({ postData }) => {
  const { id, title, body } = postData;
  const navigate = useNavigate();

  //Redux
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);

  const readHandler = () => {
    navigate(`/posts/${id}`);
  };

  const deleteHandler = () => {
    dispatch(deletePost(id));
  };

  return (
    <div key={id} className={`card`}>
      <div className={`card-content`}>
        <p>{title}</p>
        <p>{`${body.slice(0, 60)}...`}</p>
        <button className="card-btn" onClick={readHandler}>
          Read
        </button>
        {isAuth && (
          <button className="card-btn" onClick={deleteHandler}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

PostCard.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default PostCard;
