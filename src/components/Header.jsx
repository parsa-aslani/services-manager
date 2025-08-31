/* eslint-disable default-case */
// import
import { useState } from "react";
import "../site-style.css";
import HeaderSearch from "./servicesearch/HeaderSearch";
import { Link } from "react-router-dom";
// context
import { useContext } from "react";
import { Servicescontext } from "../contexts/servicescontext";
// react router
const Header = () => {
  const { handleShow } = useContext(Servicescontext);
  return (
    <section className="header-box shadow mx-auto">
      <img
        src={`${process.env.PUBLIC_URL}/image/workers-long-wooden-table.jpg`} 
        alt=""
        className="header-background-img shadow-lg"
      />
      <div className="site-header d-flex flex-column justify-content-center">
        <img
          src={`${process.env.PUBLIC_URL}/image/domingo-1755600546395.png`} 
          alt="karban-logo"
          className="header-site-logo mx-auto mb-3"
        />
        <HeaderSearch />
        <div className="header-options d-flex justify-content-around mx-auto mt-4">
          <Link
            to={"/services/add"}
            className="header-option button btn shadow header-add-service d-flex align-items-center justify-content-center"
          >
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </Link>
          <Link
            to={"/services/calculator"}
            className="header-option button btn shadow header-calculator d-flex align-items-center justify-content-center"
          >
            <i class="fa fa-calculator" aria-hidden="true"></i>
          </Link>
          <button
            className="header-option button btn shadow header-quickaccess"
            onClick={handleShow}
          >
            <i class="fa fa-search-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Header;
