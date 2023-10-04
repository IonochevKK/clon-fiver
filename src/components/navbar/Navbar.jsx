import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setopen] = useState(false);

  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUIser = {
    id: 1,
    username: "Ionochev Kostya",
    isSeller: true,
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar "}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUIser?.isSeller && <span>Become a Seller</span>}
          {!currentUIser && <button>Join</button>}
          {currentUIser && (
            <div className="user" onClick={() => setopen(!open)}>
              <img
                src="https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_1280.jpg"
                alt=""
              />
              <span>{currentUIser?.username}</span>
              {open && (
                <div className="options">
                  {currentUIser?.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add new Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Message
                  </Link>
                  <Link to="/" className="link">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Writting & Translation
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
