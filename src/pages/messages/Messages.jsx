import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";
const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Ionochev Kostya",
    isSeller: true,
  };
  const message =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem aut vitae qui neque atque autem nulla quibusdam minus illum quo.";
  return (
    <div className="messages">
      <div className="containter">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Ionochev Koctya</td>
            <Link to="/message/123" className="link">
              <td>{message.substring(0, 100)}...</td>
            </Link>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read </button>
            </td>
          </tr>
          <tr className="active">
            <td>Ionochev Koctya</td>
            <Link to="/message/123" className="link">
              <td>{message.substring(0, 100)}...</td>
            </Link>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read </button>
            </td>
          </tr>
          <tr>
            <td>Ionochev Koctya</td>
            <Link to="/message/123" className="link">
              <td>{message.substring(0, 100)}...</td>
            </Link>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Ionochev Koctya</td>
            <Link to="/message/123" className="link">
              <td>{message.substring(0, 100)}...</td>
            </Link>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Ionochev Koctya</td>
            <Link to="/message/123" className="link">
              <td>{message.substring(0, 100)}...</td>
            </Link>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
