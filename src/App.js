import React, { useEffect } from "react";
import "./index.css";
// import BackToTop from "react-back-to-top-button";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Testimonial from "./pages/Testimonial/Testimonial";
import Navbar from "./Components/Navbar/Navbar";
import Certificate from "./pages/Certificate/Certificate";
import Footer from "./Components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  // const location = useLocation();

  useEffect(() => {
    document.title = `Appgambit`;
  }, []);
  console.log(Route.path);
  return (
    <>
      <div>
        <Router>
          <ScrollToTop />
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/service" exact>
                <Services />
              </Route>
              {/* <Route path="/testimonial" exact>
                <Testimonial />
              </Route> */}
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="/Blog" exact>
                <Blog />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </Router>
      </div>

      <Footer />
      {/* <BackToTop
        style={{
          fontSize: "25px",
          borderRadius: "25%",
          border: "1px solid",
          color: "white",
          backgroundColor: "rgb(157, 58, 58)",
        }}
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint">
        <i className="fas fa-arrow-up" style={{ padding: "7px 8px" }}></i>
      </BackToTop> */}
    </>
  );
};

export default App;
