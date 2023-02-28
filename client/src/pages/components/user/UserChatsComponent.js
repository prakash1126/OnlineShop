import React from "react";
import '../../../chat.css'

const UserChatsComponent = () => {
  return (
    <>
      <input type="checkbox"  id="check"/>
       <label className="chat-btn" htmlFor="check">
          <i className="bi bi-chat-dots comments"></i>
          <i className="bi bi-x-circle close"></i>
        </label>
    </>
  );
};

export default UserChatsComponent;
