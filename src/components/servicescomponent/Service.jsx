import { Link } from "react-router-dom";
// context
import { useContext } from "react";
import { Servicescontext } from "../../contexts/servicescontext";
const Service = ({ service }) => {
  const { deleteservicealert} = useContext(Servicescontext);
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="service-card shadow py-2 d-flex flex-column align-items-center mx-auto my-3">
        <div className="services-web d-flex py-2 w-100 justify-content-center mx-auto ">
          {service.sitelink ? (
            <>
              <h6 className="my-auto">لینک سایت :</h6>
              <Link
                to={service.sitelink}
                className="mx-1 my-auto services-web-link px-2 py-2"
              >
                {service.sitelink}
              </Link>
            </>
          ) : (
            <p className="my-1 px-4 py-2 rounded url-not-found">
              لینکی وجود ندارد <i class="fa fa-ban" aria-hidden="true"></i>
            </p>
          )}
        </div>
        <div className="d-flex justify-content-between pt-2">
          <div className="service-card-list text-end my-auto px-3 py-1 shadow-sm mx-2">
            <p className="card-list-item my-1">
              عنوان خدمت : <span>{service.servicename}</span>
            </p>
            <p className="card-list-item my-2">
              کد خدمت: <span>{service.servicecode}</span>
            </p>
            <p className="card-list-item my-2">
              کارمزد خدمت: <span>{`${service.wage} تومان`}</span>
            </p>
            <p className="card-list-item my-2">
              هزینه اضافی: <span>{`${service.additional_charge} تومان`}</span>
            </p>
          </div>
          <div className="service-card-buttons d-flex flex-column justify-content-center mx-2">
            <button
              className="service-card-button my-1 button btn delete-card"
              onClick={() => {
                deleteservicealert(service.id, service.servicename);
              }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
            <Link
              to={`/services/${service.id}`}
              className="service-card-button my-1 button btn viwe-card"
            >
              <i class="fa fa-eye" aria-hidden="true"></i>
            </Link>
            <Link
              to={`/services/edit/${service.id}`}
              className="service-card-button my-1 button btn edit-card"
            >
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
