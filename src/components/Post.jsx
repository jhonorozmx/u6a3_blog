import React from "react";
import PropTypes from "prop-types";

const Post = ({ postData }) => {
  const { title, body } = postData;
  return (
    <div className="card big">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default Post;
