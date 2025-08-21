// context
import { useContext } from "react";
import { Servicescontext } from "../../contexts/servicescontext";
const HeaderSearch = () => {
  const { setsearchvalue } = useContext(Servicescontext);
  return (
    <div>
      <input
        type="text"
        className="form-control mx-auto header-searchbar"
        placeholder="نام سرویس مورد نظر ..."
        onChange={setsearchvalue}
      />
    </div>
  );
};
export default HeaderSearch;
