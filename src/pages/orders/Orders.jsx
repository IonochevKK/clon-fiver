import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";
const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Ionochev Kostya",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="containter">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>11</td>
            <td>88</td>
            <td>11</td>
            <td>123</td>{" "}
            <td>
              <img src="/img/message.png" className="delete" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>11</td>
            <td>88</td>
            <td>11</td>
            <td>123</td>{" "}
            <td>
              <img src="/img/message.png" className="delete" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>11</td>
            <td>88</td>
            <td>11</td>
            <td>123</td>{" "}
            <td>
              <img src="/img/message.png" className="delete" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>11</td>
            <td>88</td>
            <td>11</td>
            <td>123</td>{" "}
            <td>
              <img src="/img/message.png" className="delete" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>11</td>
            <td>88</td>
            <td>11</td>
            <td>123</td>
            <td>
              <img src="/img/message.png" className="delete" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
