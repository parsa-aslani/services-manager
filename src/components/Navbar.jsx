// import
import { DARKWHITE, GRAY, MAINBLUE } from "../helpers/color";
import "../site-style.css";
import NavbarSearch from "./servicesearch/NavbarSearch";
import { QuickAccessbtn, QuickAccessAlert } from "./index";
import { useRef } from "react";
// context
import { useContext } from "react";
import { Servicescontext } from "../contexts/servicescontext";
// react router
import { Link } from "react-router-dom";
// set jsx
const Navbar = () => {
  const { quickaccesses, handleShow } = useContext(Servicescontext);
  const sliderref = useRef(null);
  return (
    <nav className="navbar site-navbar shadow py-0 fixed-top">
      <div className="d-flex w-100 align-items-center justify-content-center px-4 py-3 ">
        <div className="d-flex align-items-center w-100 justify-content-center">
          <Link
            to={"/services/add"}
            style={{ backgroundColor: MAINBLUE, color: DARKWHITE }}
            className="btn px-3 py-2 button navbar-newservice-button d-none d-md-block"
          >
            افزودن خدمت <i class="fa fa-user-plus" aria-hidden="true"></i>
          </Link>
          <Link
            to={"/services/Calculator"}
            style={{ backgroundColor: GRAY, color: DARKWHITE }}
            className="btn px-3 py-2 mx-4 button navbar-calculator-button d-none d-md-block"
          >
            ماشین حساب <i class="fa fa-calculator" aria-hidden="true"></i>
          </Link>
          <NavbarSearch />
        </div>
        <div className="navbar-brand">
          <img
            src={require("../assets/image/domingo-1755600103247.png")}
            alt=""
            className="navbar-site-icon"
          />
        </div>
      </div>
      <div className="navbar-footer-bar w-100 shadow-sm d-flex shadow-sm px-1 py-1 justify-content-start">
        <QuickAccessAlert />
        <div className="d-flex justify-content-between mx-auto quick-slider-box">
          <div
            className="px-2 my-auto"
            onClick={() => {
              sliderref.current.scrollLeft += 350;
              sliderref.current.style.scrollBehavior += "smooth";
            }}
          >
            <i
              class="fa fa-angle-right quick-slider-button"
              aria-hidden="true"
            ></i>
          </div>
          <div
            className="d-flex w-100 align-items-center overflow-hidden"
            ref={sliderref}
          >
            <button
              className="add-bar-item btn button py-2 mx-1"
              variant="primary"
              onClick={handleShow}
            >
              افزودن دسترسی سریع{" "}
              <i class="fa fa-search-plus" aria-hidden="true"></i>
            </button>
            {quickaccesses.length !== 0 ? (
              quickaccesses.map((accessitem) => (
                <QuickAccessbtn accessitem={accessitem} key={accessitem.id} />
              ))
            ) : (
              <div className=" d-flex align-items-center justify-content-center not-quickaccess-box mx-auto">
                <h5 style={{ color: DARKWHITE }} className="my-auto fw-bold">
                  دسترسی سریعی وجود نداره{" "}
                  <img
                    src={require("../assets/image/sad.gif")}
                    alt="not-found-404"
                    className="not-found-quickaccess my-auto"
                  />
                </h5>
              </div>
            )}
          </div>
          <div
            className="button px-2 my-auto"
            onClick={() => {
              sliderref.current.scrollLeft -= 350;
              sliderref.current.style.scrollBehavior += "smooth";
            }}
          >
            <i
              class="fa fa-angle-left quick-slider-button"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
