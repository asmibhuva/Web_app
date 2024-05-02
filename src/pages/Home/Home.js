import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import back1 from "../../images/back1.svg";
import home from "../../images/122.gif";
import About from "../About/About";
import "aos/dist/aos.css";
import Testimonial from "../Testimonial/Testimonial";
import Certificate from "../Certificate/Certificate";
import Solutions from "../Solutions/Solutions";
import homeback from "../../images/Homeback.png";
import Work from "../Work/Work";
import AboutHome from "../About/AboutHome";
import Technology from "../Technology/Technology";
import Sblog from "../Blog/Sblog";
import CaseStudy from "../CaseStudy/CaseStudy";
import Cover from "./Cover";
import ContactHome from "../Contact/ContactHome";
import circle from "../../images/dots-circle.png";
import square from "../../images/dots-square.png";
import OurPartners from "../OurPartners/OurPartners";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row py-5">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Serving technology better at{" "}
                    <strong className="brand-name">Appgambit</strong>
                  </h1>
                  <h2 className="my-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h2>
                  <div className="mt-3">
                    <NavLink to="service" className="btn-get-started">
                      Get started
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={back1} className="img-fluid animated" alt="back" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Solutions />
      {/* <About /> */}
      <AboutHome />
      <Technology />
      <Work />
      {/* <section id="head" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column  header-img"
                  data-aos="zoom-out">
                  <img src={home} className="img-fluid" alt="back" />
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center flex-column"
                  data-aos="zoom-in">
                  <h1>Confused which technology to choose?</h1>
                  <h2>
                    We deliver your business solutions using high-end knowledge
                    engineering processes
                  </h2>
                  <h1>
                    <i
                      class="devicon-android-plain "
                      style={{ fontSize: "48px" }}></i>
                    &nbsp;&nbsp;
                    <i
                      class="devicon-react-original "
                      style={{ fontSize: "48px" }}></i>
                    &nbsp;&nbsp;
                    <i
                      class="devicon-nodejs-plain "
                      style={{ fontSize: "48px" }}></i>
                    &nbsp;&nbsp;
                    <i
                      class="devicon-amazonwebservices-original "
                      style={{ fontSize: "48px" }}></i>
                  </h1>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Certificate />
      <Cover />
      <CaseStudy />
      <OurPartners />
      <ContactHome />
    </>
  );
};
export default Home;
