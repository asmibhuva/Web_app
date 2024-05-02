import React from "react";
import tback from "../../images/tback.jpg";

const obj = [
  {
    src: "devicon-android-plain",
    name: "Android",
  },
  {
    src: "devicon-angularjs-plain",
    name: "AngularJs",
  },
  {
    src: "devicon-nodejs-plain",
    name: "NodeJs",
  },
  {
    src: "devicon-react-original",
    name: "ReactJs",
  },
  {
    src: "devicon-react-original",
    name: "React  Native",
  },
  {
    src: "fas fa-quidditch",
    name: "UI/UX",
  },
  {
    src: "fab fa-aws",
    name: "AWS",
  },
  {
    src: "devicon-flutter-plain",
    name: "Flutter",
  },
  {
    src: "fa-thin fa-server",
    name: "Serverless",
  },
  {
    src: "fas fa-infinity",
    name: "DevOps",
  },
  {
    src: "devicon-kubernetes-plain",
    name: "Kubernetes",
  },
];
const Technology = () => {

  return (
    <>
      <div
        className="conall"
        style={{ backgroundColor: "wheat" }}>
        {/* style={{ backgroundImage: `url(${tback})`, backgroundSize: "cover" }} */}
        <div className="pages" style={{ marginTop: "0px" }}>
          <span style={{ color: "black", fontWeight: "bold" }}>
            Confused which{" "}
            <span style={{ color: "rgb(157, 58, 58)" }}>technology</span> to
            choose?
          </span>
          <h2 className="mt-5" style={{ color: "black" }}>
            We deliver your business solutions using high-end knowledge
            engineering processes
          </h2>
        </div>
        {/* <hr></hr> */}
        <div className="mx-6 mt-5 mb-3 wrapper" data-aos="fade-up">
          {obj?.map((data, i) => (
            <div
              key={i}
              className="text-center"
              style={{ height: "140px", objectFit: "contain" }}>
              <i
                className={data.src}
                style={{ fontSize: "90px", justifyContent: "center" }}></i>
              <h2 className="pt-3 text-center">{data.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Technology;
