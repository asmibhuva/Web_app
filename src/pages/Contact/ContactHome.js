import React from "react";
import { NavLink } from "react-router-dom";
import chback from "../../images/chback.png";

const ContactHome = () => {
  return (
    <>
      <section id="shower" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row py-5">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    We Like to Start Your
                    <strong className="brand-name"> Project</strong> With Us
                  </h1>
                  <h2 className="my-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </h2>
                  <div className="mt-3">
                    <NavLink to="contact" className="btn-get-started">
                      Contact Us
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={chback} className="img-fluid animated" alt="back" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHome;
