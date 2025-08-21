// import
import { useEffect, useState } from "react";
import { Loading } from "../index";
import { servicesvalidation } from "../../validations/servicesvalidation";
import { getservice } from "../../services/services-server";
// react router
import { Link, useParams } from "react-router-dom";
// context
import { useContext } from "react";
import { Servicescontext } from "../../contexts/servicescontext";
// formik
import { Form, Formik, Field, ErrorMessage } from "formik";
// set jsx

const EditServices = ({ submiteditservice, setloading }) => {
  // state
  const [service, setservice] = useState({});
  const { loading } = useContext(Servicescontext);
  const { serviceId } = useParams();
  useEffect(() => {
    const getviewcontact = async () => {
      try {
        setloading(true);
        const { data: getviewdata } = await getservice(serviceId);
        setservice(getviewdata);
        setloading(false)
      } catch (err) {
        console.log(err.message);
        setloading(false);
      }
    };
    getviewcontact();
  }, []);
  return loading ? (
    <div className="loader-up">
      <Loading />
    </div>
  ) : (
    <div className="up-navbar">
      <div className="addservices-title">
        <h2>ویرایش خدمت</h2>
        <div className="services-title-bar mt-3 w-75 mx-auto"></div>
      </div>
      <div className="d-flex my-4 add-service-box mx-auto shadow-lg">
        <img
          src={require("../../assets/image/people-working-their-office.jpg")}
          alt="add-service-image"
          className="edit-service-img d-none d-md-flex"
        />
        <div className="edit-service px-3 py-4 d-flex flex-column justify-content-center">
          <Formik
            initialValues={service}
            validationSchema={servicesvalidation}
            onSubmit={(values) => {
              submiteditservice(serviceId, values);
            }}
          >
            <Form>
              <div className="text-end my-2">
                <div className="d-flex mb-1">
                  <p className="my-0 px-1">لینک سایت</p>
                  <ErrorMessage
                    name="sitelink"
                    render={(ser) => (
                      <p className="mx-2 my-0 text-danger">{ser}</p>
                    )}
                  />
                </div>
                <Field
                  type="text"
                  placeholder="لینک سایت ..."
                  className="form-control addservices-input"
                  name="sitelink"
                />
              </div>
              <div className="text-end my-2">
                <div className="d-flex mb-1">
                  <p className="my-0 px-1">عنوان خدمت</p>
                  <ErrorMessage
                    name="servicename"
                    render={(ser) => (
                      <p className="mx-2 input-error my-0">{ser}</p>
                    )}
                  />
                </div>
                <Field
                  type="text"
                  placeholder="عنوان خدمت ..."
                  className="form-control addservices-input"
                  name="servicename"
                />
              </div>
              <div className="text-end my-2">
                <div className="d-flex mb-1">
                  <p className="my-0 px-1">کد خدمت</p>
                  <ErrorMessage
                    name="servicecode"
                    render={(ser) => (
                      <p className="mx-2 input-error my-0">{ser}</p>
                    )}
                  />
                </div>
                <Field
                  type="number"
                  placeholder="کد خدمت ..."
                  className="form-control addservices-input"
                  name="servicecode"
                />
              </div>
              <div className="text-end my-2">
                <div className="d-flex mb-1">
                  <p className="my-0 px-1">کارمزد خدمت</p>
                  <ErrorMessage
                    name="wage"
                    render={(ser) => (
                      <p className="mx-2 input-error my-0">{ser}</p>
                    )}
                  />
                </div>
                <Field
                  type="number"
                  placeholder="کارمزد خدمت ( تومان ) ..."
                  className="form-control addservices-input"
                  name="wage"
                />
              </div>
              <div className="text-end my-2">
                <div className="d-flex mb-1">
                  <p className="my-0 px-1">هزینه اضافی خدمت</p>
                  <ErrorMessage
                    name="additional_charge"
                    render={(ser) => (
                      <p className="mx-2 input-error my-0">{ser}</p>
                    )}
                  />
                </div>
                <Field
                  type="number"
                  placeholder="هرینه اضافی خدمت ( تومان ) ..."
                  className="form-control addservices-input"
                  name="additional_charge"
                />
              </div>
              <div className="text-end my-2">
                <div className="d-flex mb-1">
                  <p className="my-0 px-1">توضیحات خدمت</p>
                  <ErrorMessage
                    name="discription"
                    render={(ser) => (
                      <p className="mx-2 input-error my-0">{ser}</p>
                    )}
                  />
                </div>
                <Field
                  placeholder="توضیحات خدمت ..."
                  className="form-control addservices-input addservices-discription"
                  name="discription"
                  as="textarea"
                ></Field>
              </div>
              <div className="addservices-buttons mt-3">
                <button type="submit" className="confirmbutton mx-2 btn button">
                  تایید
                </button>
                <Link
                  to={"/services"}
                  type="button"
                  className="cancelbutton mx-2 btn button "
                >
                  انصراف
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default EditServices;
