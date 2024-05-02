import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Navbar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick((prev) => !prev);
  const Close = () => setClick(false);
  const history = useHistory();

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={Close} />
      <nav className="navbar fixed-top" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-logo">
            <img
              onClick={() => {
                history.push("/");
              }}
              src={logo}
              alt="logo"
            />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="main-nav-active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="main-nav-active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/service"
                activeClassName="main-nav-active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                Services
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/testimonial"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                Testimonial
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/Blog"
                activeClassName="main-nav-active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="main-nav-active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
