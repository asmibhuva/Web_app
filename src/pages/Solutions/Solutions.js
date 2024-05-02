import React from "react";
import { Card } from "react-bootstrap";
import "./Solutions.css";
import rotator from "../../images/rotator.png";
import untitled from "../../images/Untitled.mp4";

const solut = [
  {
    class1: "fas fa-lock",
    title: "Code security",
    text: " Some quick example text to build on the card title and mak up the bulk of the cards content Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  },
  {
    class1: "fas fa-users-cog",
    title: "Team management",
    text: " Some quick example text to build on the card title and mak up the bulk of the cards content Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  },
  {
    class1: "fas fa-universal-access",
    title: "Access controlled",
    text: " Some quick example text to build on the card title and mak up the bulk of the cards content Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  },
];

const Card2 = ({ class1, title, text }) => {
  return (
    <Card className="container-1" style={{ width: "18rem", margin: "30px" }}>
      <Card.Body>
        <p className="d-flex justify-content-center align-items-center">
          <i
            className={class1}
            style={{
              fontSize: "65px",

              marginBottom: "25px",
            }}></i>
        </p>
        <Card.Title style={{ textAlign: "center", fontSize: "26px" }}>
          {title}
        </Card.Title>

        <Card.Text style={{ textAlign: "center", fontSize: "16px" }}>
          {text}
        </Card.Text>
        <Card.Link
          href="#"
          className="d-flex justify-content-center align-item-center"
          style={{ textDecoration: "none", color: "red" }}>
          View details
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
const Solutions = () => {
  return (
    <>
      <video
        className="video-bg"
        loop
        autoPlay
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translateY(-50%,-50%)",
          zIndex: "-1",
        }}>
        <source src={untitled} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          background: "rgb(255,255,255)",
          background:
            "linear-gradient(0deg, rgba(255,255,255,1) 23%, rgba(0,0,0,1) 100%);",
        }}>
        <section
          id="topper"
          className="d-flex align-items-center "
          style={{
            background:
              "linear-gradient(0deg, rgba(255,255,255,1) 23%, rgba(0,0,0,1) 100%);",
          }}>
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                    <h2 style={{ color: "rgb(157,58,58)", fontWeight: "700" }}>
                      <img src={rotator}></img>Our Solutions
                    </h2>
                    <h1 style={{ color: "black" }}>
                      We Different From Others Should Choose Us
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="blog-area pb-5">
            <div className="container">
              <div className="row d-flex justify-content-center mx-auto">
                {solut.map((data, i) => (
                  <Card2 key={i} {...data} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Solutions;
