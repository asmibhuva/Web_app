import React from "react";
import Sblog from "../Blog/Sblog";
import Testimonial from "../Testimonial/Testimonial";
import cback from "../../images/cback1.png";

const Cover = () => {
  return (
    <div style={{ backgroundImage: `url(${cback})`, backgroundSize: "cover" }}>
      <Sblog />
      <Testimonial />
    </div>
  );
};

export default Cover;
