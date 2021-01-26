import React from "react";
import "./Message.css";

function Message({ message, user, timestamp, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt={user} />
      <div className="message__info">
        <h4>{user}</h4>
        <p>{message} timestamp</p>
      </div>
    </div>
  );
}

export default Message;
