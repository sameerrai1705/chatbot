import React from "react";
import { Person, ChatDots } from "react-bootstrap-icons";

const ChatMessage = (props) => {
  return (
    <div className={`d-flex ${props.user && "justify-content-end"}`}>
      {props.user ? (
        <span className="message-right">
          <span className="message-text">{props.message}</span>
          <Person className="message-icon"></Person>
        </span>
      ) : (
        <span className="message-left">
          <ChatDots className="message-icon"></ChatDots>
          <span className="message-text"> {props.message} </span>
        </span>
      )}
    </div>
  );
};

export default ChatMessage;
