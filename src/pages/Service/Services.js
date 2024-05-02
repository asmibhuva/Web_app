import React from "react";
import { NavLink } from "react-router-dom";
import services from "../../images/services.png";
import "./Services.css";
import ecom from "../../images/ecom.jpg";
import web from "../../images/web.png";
import mobile from "../../images/mobile.jpg";
import cloud from "../../images/cloud.jpg";

import sback from "../../images/serback.jpg";

const serviceObj = [
  {
    name: "E-commerce",
    img: ecom,
  },
  {
    name: "Web development",
    img: web,
  },
  {
    name: "Mobile applications",
    img: mobile,
  },
  {
    name: "Cloud Services",
    img: cloud,
  },
];

const Service = ({ name, img }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card ">
        <img src={img} alt="cardImage"></img>
        <div className="cardInfo">
          <p className="info">{name}</p>
        </div>
      </div>
    </div>
  );
};
const Services = () => {
  return (
    <>
      <section
        id="headers"
        className="d-flex align-items-center back"
        style={{ backgroundImage: `url(${sback})`, backgroundSize: "cover" }}>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>What we can do for you?</h1>
                  <h2 className="my-3">
                    We believe technology is just a carrier to help build a
                    solution, there is no one right way if the execution is done
                    properly. These are some of the current technologies we use
                    to build solutions.
                  </h2>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={services}
                    className="img-fluid animated"
                    alt="back"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="platform">
        <div className="container-fluid">
          <div className="row g-4">
            <h1>Here are some of solutions suiting your business needs.</h1>
            <h2>
              Choose your coach training based on the program offerings, your
              instinct, We are different from a traditional IT staffing agency
            </h2>
            {serviceObj.map((data, i) => (
              <Service key={i} {...data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
