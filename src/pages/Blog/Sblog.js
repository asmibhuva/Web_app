import React from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import b1 from "../../../src/images/b1.jpg";
import b2 from "../../../src/images/b2.jpg";
import b3 from "../../../src/images/b3.jpg";
import rotator from "../../images/rotator.png";
const obj1 = [
  {
    title: "Blog 1",
    img: b1,
    text: "The Data Surrounding Higher Education",
  },
  {
    title: "Blog 2",
    img: b2,
    text: "Conversion Rate the Sales Funnel Optimization",
  },
  {
    title: "Blog 3",
    img: b3,
    text: "Business Data is changing the world’s Energy",
  },
];

const Sblog = () => {
  const gotoBlogs = () => {
    return <NavLink to="blog"></NavLink>;
  };

  return (
    <div className="aov">
      <section id="topper" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                  <h2 style={{ color: "rgb(157, 58, 58)" }}>
                    <img src={rotator}></img>Our Blogs
                  </h2>
                  <h1>Latest from our blogs</h1>
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
              {obj1.map((data) => (
                <Card
                  style={{
                    width: "18rem",
                    margin: "30px",
                    padding: "0",
                    //   hover: backgroundColor: "red",
                  }}>
                  <Card.Img variant="top" src={data.img} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.text}</Card.Text>
                    <Button variant="outline-danger">Read full</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <div className="mt-3">
                <NavLink to="blog" className="btn-get-started">
                  View more
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sblog;
