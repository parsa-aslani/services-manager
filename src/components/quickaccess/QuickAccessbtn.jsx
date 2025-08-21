// import
import { useRef } from "react";
// react router
import { Link } from "react-router-dom";
// context
import { useContext } from "react";
import { Servicescontext } from "../../contexts/servicescontext";
const QuickAccessbtn = ({ accessitem }) => {
  const { deletequickalert } = useContext(Servicescontext);
  const deleteref = useRef(null);
  return (
    <>
      <div className=" mx-1 position-relative">
        <div
          className="access-icon"
          onClick={() => {
            deletequickalert(accessitem.id, accessitem.quickaccessname);
          }}
        >
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
        <Link
          to={`/services/${accessitem.accessid}`}
          className="navbar-bar-item py-2 btn button position-relative"
          ref={deleteref}
        >
          <p className="my-auto">{accessitem.quickaccessname}</p>
        </Link>
      </div>
    </>
  );
};
export default QuickAccessbtn;
