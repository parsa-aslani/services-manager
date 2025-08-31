// import
import { Loading, Service } from "../index";
// context
import { useContext } from "react";
import { Servicescontext } from "../../contexts/servicescontext";
// jsx
const Services = () => {
  const { loading, filterservice } = useContext(Servicescontext);
  return loading ? (
    <Loading />
  ) : (
    <section className="mt-4">
      <div className="services-title mb-4">
        <h1>لیست خدمات</h1>
        <div className="services-title-bar mt-3 w-75 mx-auto"></div>
      </div>
      <div className="services-body row w-100 mx-auto">
        {filterservice.length > 0 ? (
          filterservice.map((service) => (
            <Service key={service.id} service={service} />
          ))
        ) : (
          <div className="my-4 servise-not-found mt-3 p-2 d-flex flex-column justify-content-end align-items-center mx-auto">
            <h3 className="servise-not-found-header">خدمتی پیدا نشد !</h3>
            <img
              src={`${process.env.PUBLIC_URL}/image/groundhog-day.gif`}
              alt="service-not-found"
              className="servise-not-found-icon"
            />
          </div>
        )}
      </div>
    </section>
  );
};
export default Services;
