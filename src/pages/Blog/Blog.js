import React from "react";
import "./Card.css";
// import Card from "./Card";
import b1 from "../../../src/images/b1.jpg";
import b2 from "../../../src/images/b2.jpg";
import b3 from "../../../src/images/b3.jpg";
import b4 from "../../../src/images/b4.jpg";
import { Button, Card } from "react-bootstrap";

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
  {
    title: "Blog 4",
    img: b4,
    text: "The data-driven approach to understanding",
  },
];

const Card1 = ({ img, title, text }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "30px",
        padding: "0",
        //   hover: backgroundColor: "red",
      }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="outline-danger">Read full</Button>
      </Card.Body>
    </Card>
  );
};
const Blog = () => {
  return (
    <>
      <section id="top" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg d-flex align-items-center justify-content-center">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="d-flex justify-content-center flex-column">
                  <h1>Blog</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row p-1 d-flex justify-content-center mx-auto">
            {obj1?.map((data, i) => (
              <Card1 key={i} {...data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
