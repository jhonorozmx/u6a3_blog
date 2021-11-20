import React from "react";
import PropTypes from "prop-types";

function MessageBox({ message, close }) {
  return (
    <div className="alert">
      <p>{message}</p>
      <button className="card-btn" onClick={close}>
        Close
      </button>
    </div>
  );
}

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
  close: PropTypes.func,
};

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageBox;
