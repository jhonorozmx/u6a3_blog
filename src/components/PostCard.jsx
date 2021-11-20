import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const PostCard = ({ postData }) => {
  const { id, title, body } = postData;
  const [params] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();
  const page = params.toString();
  const previousPath = `${location.pathname}?${page}`;

  return (
    <div key={id} className={`card`}>
      <div className={`card-content`}>
        <p>{title}</p>
        <p>{`${body.slice(0, 60)}...`}</p>
        <button
          className="card-btn"
          onClick={() =>
            navigate(`/posts/${id}`, {
              state: {
                from: `${previousPath}`,
              },
            })
          }
        >
          Read
        </button>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default PostCard;
