import React from "react";
import "../../../chat.css";

const UserChatsComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-dots comments"></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded circle"></span>
        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Chat</h6>
        </div>
        <div className="chat-form">
          <div className="cht-msg">
            {Array.from({ length: 10 }).map((item, id) => {
              return (
                <div>
                  <p>
                    <b>I write:</b>Hello admin
                  </p>
                  <p className=" bg-primary p-3 ms-4 text-light rounded-pill">
                    <b>Admin write:</b>Hello there{" "}
                  </p>
                </div>
              );
            })}
          </div>
          <textarea
            id="client-chat-Msg"
            className="form-control"
            placeholder="your-text is here"
          ></textarea>
          <button className="btn btn-success btn-block">Submit</button>
        </div>
      </div>
    </>
  );
};

export default UserChatsComponent;
