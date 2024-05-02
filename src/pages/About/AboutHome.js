import React from "react";
import "./AboutHome.css";
import { Card, Button } from "react-bootstrap";
import abback from "../../images/abback3.jpg";
import { NavLink } from "react-router-dom";
import rotator from "../../images/rotator.png";

const abobj = [
  {
    header: "Cloud",
    title: "Cloud solutions  & management",
  },
  {
    header: "Product",
    title: "Product lifecycle & services",
  },
  {
    header: "Software",
    title: "Software solutions & services",
  },
];

const AboutUs = ({ header, title }) => {
  return (
    <Card className="card-style">
      <Card.Header
        style={{
          fontWeight: "700",
          color: "rgb(157, 58, 58)",
          border: "none",
          background: "none",
        }}>
        {header}
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
const AboutHome = () => {
  return (
    <div>
      <section id="cover" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row py-5">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  {abobj.map((data, i) => (
                    <AboutUs key={i} {...data} />
                  ))}
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <h3 style={{ textAlign: "left" }}>About us</h3>
                  <h1>
                    <strong className="brand-name">
                      4+ Years in Business...
                    </strong>{" "}
                    About Appgambit
                  </h1>
                  <h2 className="my-3">
                    A nationwide IT Solution Provider delivering end-to-end
                    services that include hardware and software procurement, IT
                    consulting and managed IT services.
                  </h2>
                  <h2>
                    Our dedication to client experience can help you minimize
                    costs, reduce downtime, and maximize business productivity.
                  </h2>
                  <div className="mt-3 text-start">
                    <NavLink to="about" className="btn-get-started">
                      View more
                    </NavLink>
                  </div>
                  {/* <div className="mt-3">
                    <NavLink to="service" className="btn-get-started">
                      Get started
                    </NavLink>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHome;
