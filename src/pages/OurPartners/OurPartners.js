import React, { useEffect } from "react";
import Lumigo from "../../images/Lumigo.png"
import AWSPN from "../../images/AWS-PN.png"
import Aos from "aos"
import rotator from "../../images/rotator.png";
const OurPartners = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
        });
    }, []);
    return (
        <section className="py-3 py-lg-5" style={{ backgroundColor: "wheat" }}>
            {/* <h6 className="display-4 text-center text-uppercase font-weight-bold aos-init aos-animate" style={{ opacity: "0.1" }} data-aos="fade-up" data-aos-delay="300">partners</h6> */}
            <h4 className="h1 text-center font-weight-bold mt-n5 mb-5"> <img src={rotator} />Our Tech <span style={{ color: "#9d3838" }}>Partners</span></h4>
            <div>
                <h6 className="pr-5 pl-5 text-center " style={{ fontWeight: "Bold" }}>We are a partner and a collaborator- not a vendor.</h6>
                <h6 className="pr-5 pl-5 text-center " style={{ fontWeight: "Bold" }}>We know how to strike a balance between business needs, teams, and partners, and we understand the transparency it requires.</h6>
            </div>
            <div className="py-3 py-lg-5" data-aos="fade-up">
                <div className="container">
                    <div className="pb-5">
                        <div className="text-center">
                            <img src={AWSPN} className="img-fluid" style={{ height: "50px" }} />
                        </div>
                    </div>
                    <div>
                        <div className="text-center">
                            <img src={Lumigo} className="img-fluid" style={{ height: "50px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};
export default OurPartners;