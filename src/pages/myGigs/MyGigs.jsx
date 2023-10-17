import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="containter">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
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
              <img src="/img/delete.png" className="delete" alt="" />
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
              <img src="/img/delete.png" className="delete" alt="" />
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
              <img src="/img/delete.png" className="delete" alt="" />
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
              <img src="/img/delete.png" className="delete" alt="" />
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
              <img src="/img/delete.png" className="delete" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
