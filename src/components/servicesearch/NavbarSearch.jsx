// context
import { useContext } from "react";
import { Servicescontext } from "../../contexts/servicescontext";
const NavbarSearch = () => {
  const { setsearchvalue } = useContext(Servicescontext);
  return (
    <>
      <input
        className="form-control navbarsearch shadow"
        type="text"
        placeholder="نام سرویس مورد نظر ..."
        onChange={setsearchvalue}
      />
    </>
  );
};

export default NavbarSearch;
