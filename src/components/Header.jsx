/* eslint-disable default-case */
// import
import { useEffect, useState } from "react";
import "../site-style.css";
import HeaderSearch from "./servicesearch/HeaderSearch";
import { Link } from "react-router-dom";
// context
import { useContext } from "react";
import { Servicescontext } from "../contexts/servicescontext";
// react router
const Header = () => {
  const [headerimage, setheaderimage] = useState(null);
  const { handleShow } = useContext(Servicescontext);
  useEffect(() => {
    let headerimageurl = null;
    const randomnumber = Math.floor(Math.random() * 4);
    switch (randomnumber) {
      case 0: {
        headerimageurl = require("../assets/image/crop-colleagues-using-laptop-table.jpg");
        break;
      }
      case 1: {
        headerimageurl = require("../assets/image/people-working-their-office.jpg");
        break;
      }
      case 2: {
        headerimageurl = require("../assets/image/workers-long-wooden-table.jpg");
        break;
      }
      case 3: {
        headerimageurl = require("../assets/image/young-employees-sitting-office-table-using-laptop-team-work-brainstorming-meeting-concept.jpg");
        break;
      }
    }
    setheaderimage(headerimageurl);
  }, []);
  return (
    <section className="header-box shadow mx-auto">
      <img
        src={headerimage}
        alt=""
        className="header-background-img shadow-lg"
      />
      <div className="site-header d-flex flex-column justify-content-center">
        <img
          src={require("../assets/image/domingo-1755600546395.png")}
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
