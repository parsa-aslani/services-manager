// import;
// react router
import { Link, useParams } from "react-router-dom";
import { DARKGRAY } from "../../helpers/color";
import { useEffect } from "react";
// set jsx
const ViewServices = ({ viewservices, getviewcontact }) => {
  const { serviceId } = useParams();
  // get view service
  useEffect(() => {
    getviewcontact(serviceId);
  }, [window.location.href]);
  return (
    Object.keys(viewservices).length > 0 && (
      <div className="up-navbar">
        <div className="viewservices-title">
          <h2>مشاهده خدمت</h2>
          <div className="services-title-bar mt-3 w-75 mx-auto"></div>
        </div>
        <div className="viewservice-body my-5 py-2 px-2 mx-auto shadow-lg">
          <h3 className="viewservice-body-header pb-3">
            {viewservices.servicename}
          </h3>
          <div className="d-flex flex-column flex-md-row justify-content-around pt-2">
            <div className="text-end viewservice-item-box mx-auto">
              <p className="viewservice-item py-1 px-2 rounded">
                عنوان خدمت : <span>{viewservices.servicename}</span>
              </p>
              <p className="viewservice-item py-1 px-2 rounded">
                کد خدمت : <span>{viewservices.servicecode}</span>
              </p>
              <p className="viewservice-item py-1 px-2 rounded">
                لینک خدمت :{" "}
                {viewservices.sitelink ? (
                  <Link to={viewservices.sitelink} style={{ color: DARKGRAY }}>
                    {viewservices.sitelink}
                  </Link>
                ) : (
                  <span>لینکی وجود ندارد</span>
                )}
              </p>
            </div>
            <div className="text-end viewservice-item-box mx-auto">
              <p className="viewservice-item py-1 px-2 rounded">
                کارمزد : <span>{`${viewservices.wage} تومان`}</span>
              </p>
              <p className="viewservice-item py-1 px-2 rounded">
                هزینه اضافی :{" "}
                <span>{`${viewservices.additional_charge} تومان`}</span>
              </p>
              <p className="viewservice-item py-1 px-2 rounded">
                هرینه کلی :{" "}
                <span>
                  {`${
                    parseInt(viewservices.wage) +
                    parseInt(viewservices.additional_charge)
                  } تومان`}
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="viewservice-discription py-2 px-2 rounded shadow mx-auto mt-2 rounded">
              توضیحات خدمت :{" "}
              <span>
                {viewservices.discription
                  ? viewservices.discription
                  : "توضیحی وجود ندارد"}
              </span>
            </p>
          </div>
          <Link to={"/services"} className="btn btton py-2 my-2 go-home-btn">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    )
  );
};
export default ViewServices;
