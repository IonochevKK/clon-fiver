import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link>MESSAGE</Link> > JOHN DOE
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://cdn.pixabay.com/photo/2023/08/29/19/42/goose-8222013_1280.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              aut vel cumque quidem vitae a corrupti dolorum. Nulla, ipsum
              voluptate. Cum ex suscipit, eveniet adipisci voluptatum nisi vitae
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://cdn.pixabay.com/photo/2023/08/29/19/42/goose-8222013_1280.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              aut vel cumque quidem vitae a corrupti dolorum. Nulla, ipsum
              voluptate. Cum ex suscipit, eveniet adipisci voluptatum nisi vitae
              delectus aperiam minus maxime culpa pariatur dignissimos
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://cdn.pixabay.com/photo/2023/08/29/19/42/goose-8222013_1280.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              aut vel cumque quidem vitae a corrupti dolorum. Nulla, ipsum
              voluptate. Cum ex suscipit, eveniet adipisci voluptatum nisi vitae
            </p>
          </div>
          <div className="item">
            <img
              src="https://cdn.pixabay.com/photo/2023/08/29/19/42/goose-8222013_1280.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              aut vel cumque quidem vitae a corrupti dolorum. Nulla, ipsum
              voluptate. Cum ex suscipit, eveniet adipisci voluptatum nisi vitae
              delectus aperiam minus maxime culpa pariatur dignissimos
              doloremque doloribus optio dolorum cumque neque libero architecto
              aut officia assumenda eaque. Natus, ex non!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a mesage"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
