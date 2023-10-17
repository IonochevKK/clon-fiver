import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel";
const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs"> FIVERR > GRAPHICS & DESIGN > </span>
          <h1>I will create ai generated art you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_1280.jpg"
              alt=""
            />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScrooll={1} className="slider">
            <img
              src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png"
              alt=""
            />
            <img
              src="https://cdn.pixabay.com/photo/2023/08/08/15/37/landscape-8177622_1280.jpg"
              alt=""
            />
            <img
              src="https://cdn.pixabay.com/photo/2023/06/28/10/00/ai-generated-8093991_640.jpg"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            numquam, minus impedit maiores repellat voluptates nobis dolor
            nostrum? Eius atque nam nihil impedit architecto placeat optio quis
            illo repudiandae ipsa? Aperiam vitae temporibus nostrum id est
            eveniet facere, iste et ratione non! Enim ipsum iste, autem est
            consequatur et mollitia?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae ea quos dolore amet expedita nobis,
            eligendi accusantium culpa necessitatibus itaque voluptates!
            Corrupti, perspiciatis. Eaque atque vitae laudantium modi
            voluptatibus repellendus similique alias deleniti dolorem fugiat
            mollitia expedita, est facilis consequuntur.
          </p>
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_1280.jpg"
                alt=""
              />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                  <button>Contact Me</button>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <div className="title">From</div>
                  <div className="desc">USA</div>
                </div>
                <div className="item">
                  <div className="title">Member since</div>
                  <div className="desc">Aug 2022</div>
                </div>
                <div className="item">
                  <div className="title">Avg. responce time </div>
                  <div className="desc">4 hours</div>
                </div>
                <div className="item">
                  <div className="title">Last delivery</div>
                  <div className="desc">1 day</div>
                </div>
                <div className="item">
                  <div className="title">Languages</div>
                  <div className="desc">English</div>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                consequatur aspernatur ipsum, nobis iste suscipit sed, similique
                voluptates ullam nostrum est mollitia aperiam dicta asperiores
                repudiandae doloribus? Repellat, exercitationem nulla.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_1280.jpg"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://media.istockphoto.com/id/499545150/es/foto/bandera-de-los-estados-unidos-de-am%C3%A9rica.webp?s=1024x1024&w=is&k=20&c=h2mc7cqrHja71U0r5QZACpKhRQd9NXrEZjhsVkk2AKg="
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                consequatur aspernatur ipsum, nobis iste suscipit sed, similique
                voluptates ullam nostrum est mollitia aperiam dicta asperiores
                repudiandae doloribus? Repellat, exercitationem nulla.
              </p>
              <div className="helpful">
                <span>Helpful</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_1280.jpg"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://media.istockphoto.com/id/499545150/es/foto/bandera-de-los-estados-unidos-de-am%C3%A9rica.webp?s=1024x1024&w=is&k=20&c=h2mc7cqrHja71U0r5QZACpKhRQd9NXrEZjhsVkk2AKg="
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                consequatur aspernatur ipsum, nobis iste suscipit sed, similique
                voluptates ullam nostrum est mollitia aperiam dicta asperiores
                repudiandae doloribus? Repellat, exercitationem nulla.
              </p>
              <div className="helpful">
                <span>Helpful</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_1280.jpg"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://media.istockphoto.com/id/499545150/es/foto/bandera-de-los-estados-unidos-de-am%C3%A9rica.webp?s=1024x1024&w=is&k=20&c=h2mc7cqrHja71U0r5QZACpKhRQd9NXrEZjhsVkk2AKg="
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                consequatur aspernatur ipsum, nobis iste suscipit sed, similique
                voluptates ullam nostrum est mollitia aperiam dicta asperiores
                repudiandae doloribus? Repellat, exercitationem nulla.
              </p>
              <div className="helpful">
                <span>Helpful</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated imgae based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Promt Writting</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Promt Writting</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Promt Writting</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Promt Writting</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
