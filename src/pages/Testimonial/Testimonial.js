// export default Testimonial;
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonial.css";
import T1 from "../../images/t1.jpg";
import T2 from "../../images/t1.jpg";
import T3 from "../../images/t1.jpg";
import rotator from "../../images/rotator.png";

const object = [
  {
    img: T1,
    name: "Tony Stark",
    post: "Developer & CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ",
  },
  {
    img: T2,
    name: "Sonia Keystone",
    post: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ",
  },
  {
    img: T3,
    name: "Theo Sorel",
    post: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis .",
  },
];

const Testimonial = () => {
  return (
    <>
      <section id="topper" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                  <h2 style={{ color: "rgb(157, 58, 58)" }}>
                    <img src={rotator}></img>Our Testimonial
                  </h2>
                  <h1>Some of our Testimonials</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-5">
        {/* //     <span style={{ color: "black", fontWeight: "bold", textAlign: "center", fontStyle: "calc(1.5rem + 2vw)" }}>Testi<span style={{ color: "#9d3838" }}>monial</span></span> */}
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={4000}>
          {object.map((item, index) => (
            <div
              key={index}
              className="p-3 text-white"
              style={{ background: "rgb(254,244,234)" }}>
              <img src={item.img} />
              <div className="myCarousel">
                <h3>{item.name}</h3>
                <h4>{item.post}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
};
export default Testimonial;
