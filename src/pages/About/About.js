import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ListGroup } from "react-bootstrap";

const weare = [
  {
    title: "Our history",
    desc: "Real innovations and a positive customer experience are the heart of successful communication.",
    list1: "Activate listening",
    list2: "Brilliant minds",
    list3: "Better. Best. Wow!",
    list4: "Branding it better!",
  },
  {
    title: "Our Mission",
    desc: "Real innovations and a positive customer experience are the heart of successful communication.",
    list1: "Creating. Results.",
    list2: "Expect more",
    list3: "Good thinking",
    list4: "In real we trust",
  },
  {
    title: "Who we are",
    desc: "Real innovations and a positive customer experience are the heart of successful communication.",
    list1: "Stay real. Always.",
    list2: "We have you covered",
    list3: "We turn heads",
    list4: "Your brand, promoted",
  },
];

const AboutPage = ({ title, desc, list1, list2, list3, list4 }) => {
  return (
    <div className="col-lg-4 col-md-5 col-sm-6">
      <div className="about-text">
        <h1 style={{ fontSize: "36px", color: "rgb(157, 58, 58)" }}>{title}</h1>
        <p>{desc}</p>
        <ListGroup
          style={{
            border: "none",
            textAlign: "left",
          }}>
          <ListGroup.Item
            style={{
              border: "none",
              paddingLeft: "0",
              marginTop: "15px",
            }}>
            {" "}
            <i className="far fa-check-circle"></i>&nbsp;{list1}
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              border: "none",
              paddingLeft: "0",
              marginTop: "15px",
            }}>
            {" "}
            <i className="far fa-check-circle"></i>&nbsp;{list2}
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              border: "none",
              paddingLeft: "0",
              marginTop: "15px",
            }}>
            {" "}
            <i className="far fa-check-circle"></i>&nbsp;{list3}
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              border: "none",
              paddingLeft: "0",
              marginTop: "15px",
            }}>
            {" "}
            <i className="far fa-check-circle"></i>
            &nbsp;{list4}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <section id="header1" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg d-flex align-items-center">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name">AppGambit</strong> is
                    everything you are looking for in this tech world
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="py-5 ">
          <div className="row">
            {weare.map((data, i) => (
              <AboutPage key={i} {...data} />
            ))}
          </div>
        </div>
      </div>
      <section
        id="header2"
        className="d-flex align-items-center relative "
        data-aos="fade-right">
        <div className="container-fluid d-flex align-items-center">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="d-flex justify-content-center flex-column">
                  <h1>From idea to execution</h1>
                  <h2>
                    We provide all-around services to help you convert your idea
                    into a successful product. Our business strategy is quite
                    simple, whether you are boostraping or already a successful
                    business.
                  </h2>
                  <div className="mt-3 button">
                    <a
                      href="mailto:vivekrekhadia007@gmail.com"
                      className="btn-get-started">
                      Get in touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
