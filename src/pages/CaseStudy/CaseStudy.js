import { data } from "jquery";
import React from "react";
import case1 from "../../images/case1.jpg";
import case2 from "../../images/case2.jpg";
import case3 from "../../images/case3.jpg";
import case4 from "../../images/case4.jpg";
import case5 from "../../images/case5.jpg";
import case6 from "../../images/case6.jpg";
import "./CaseStudy.css";

const cases = [
  {
    img: case1,
    name: "Movie Recommendation",
    text: "System project",
  },
  {
    img: case2,
    name: "Customer segmentation",
    text: "Machine learning",
  },
  {
    img: case3,
    name: "data analytics",
    text: "Web project",
  },
  {
    img: case4,
    name: "detection project",
    text: "programming",
  },
  {
    img: case5,
    name: "Movie Recommendation",
    text: "System project",
  },
  {
    img: case6,
    name: "Benefits Research",
    text: "Science Projects",
  },
];
const CaseStudies = ({ img, name, text }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-4 p-4">
      <div className="card ">
        <img src={img} alt="cardImage"></img>
        <div className="cardInfo">
          <p className="info">{name}</p>
        </div>
        <div>
          <p
            style={{
              color: "orange",
              fontSize: "15px",
              textAlign: "center",
            }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
const CaseStudy = () => {
  return (
    <section id="platforms" style={{ marginTop: "0px", padding: "10px" }}>
      <div className="container-fluid">
        <div className="row g-4">
          <h1 style={{}}>Case studies.</h1>
          <h2>Check Some Of Our Recent Work</h2>
          {cases.map((data, i) => (
            <CaseStudies key={i} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
