import React from "react";
import "./Message.css";
function Message(props) {
  const { content } = props;
  return <div className="message">{content}</div>;
}

export default Message;
