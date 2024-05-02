import React, { useEffect } from "react";
import AWS1 from "../../images/AWS1.png";
import AWS2 from "../../images/AWS2.png";
import AWS3 from "../../images/AWS3.png";
import AWS4 from "../../images/AWS4.png";
import AWS5 from "../../images/AWS5.png";
import AWS6 from "../../images/AWS6.png";
import AWS7 from "../../images/AWS7.png";
import AWS8 from "../../images/AWS8.png";
import AWS9 from "../../images/AWS9.png";
import AWS10 from "../../images/AWS10.png";
import AWS11 from "../../images/AWS11.png";
import docker from "../../images/docker.png";
import GC from "../../images/GC.png";
import GC1 from "../../images/GC1.png";
import GC2 from "../../images/GC2.png";
import Kubernetes from "../../images/Kubernetes.png";
import "./Certificae.css";
import Aos from "aos";
import "aos/dist/aos.css";

const obj = [
  {
    src: AWS1,
  },
  {
    src: AWS2,
  },
  {
    src: AWS3,
  },
  {
    src: AWS4,
  },
  {
    src: AWS5,
  },
  {
    src: AWS6,
  },
  {
    src: AWS7,
  },
  // {
  //   src: AWS8,
  // },
  // {
  //   src: AWS9,
  // },
  // {
  //   src: AWS10,
  // },
  // {
  //   src: AWS11,
  // },
  {
    src: docker,
  },
  {
    src: GC,
  },
  {
    src: GC1,
  },
  {
    src: GC2,
  },
  {
    src: Kubernetes,
  },
];

const Certificate = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  console.log(obj.map((i) => i.src));
  return (
    <div className="conall">
      <div className="pages" style={{ marginTop: "20px" }}>
        <span style={{ color: "black", fontWeight: "bold" }}>
          Our <span style={{ color: "#9d3838" }}>Team</span>
        </span>
        <h2>Our team is certified with multiple certifications.</h2>
      </div>
      {/* <hr></hr> */}
      <div className="mx-auto mt-5 mb-3 wrapper" data-aos="fade-up">
        {obj?.map((data, i) => (
          <div style={{ height: "140px", objectFit: "contain" }}>
            <img
              key={i}
              class="img-fluid contact-image"
              alt="Responsive"
              src={data.src}
              class="rounded"
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
              }}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
