import React from "react";
import { Card } from "react-bootstrap";
import rotator from "../../images/rotator.png";
import p1 from "../../images/process-1.png";
import p2 from "../../images/process-2.png";
import p3 from "../../images/process-3.png";
import p4 from "../../images/process-4.png";
import BG from "../../images/bg-img.jpg"

const solut = [
  {
    class: p1,
    title: "Discovery",
    text: " Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    class: p2,
    title: "Planning",
    text: " Some quick example text to build on the card title and mak up the bulk of the cards content Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  },
  {
    class: p3,
    title: "Practice",
    text: " Some quick example text to build on the card title and mak up the bulk of the cards content Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  },
  {
    class: p4,
    title: "Delivery",
    text: " Some quick example text to build on the card title and mak up the bulk of the cards content Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  },
];
const Work = () => {

  return (
    <div className="aov" style={{ backgroundImage: `url(${BG})`, marginTop: "10px" }}>
      <section id="topper" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                  <h2 style={{ color: "rgb(157, 58, 58)" }}>
                    <img src={rotator} /><span style={{ fontWeight: "bold" }}>Our work</span>
                  </h2>
                  <h1>Our working process</h1>
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
              {solut.map((data) => (
                <Card
                  className="container-1"
                  style={{ width: "18rem", margin: "20px 10px" }}>
                  <Card.Body>
                    <p className="d-flex justify-content-center align-items-center">
                      <img src={data.class}></img>
                    </p>
                    <Card.Title style={{ textAlign: "center" }}>
                      {data.title}
                    </Card.Title>

                    <Card.Text style={{ textAlign: "center" }}>
                      {data.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
