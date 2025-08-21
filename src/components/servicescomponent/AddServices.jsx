// import
import { useRef, useEffect } from "react";
import { Loading } from "../index";
import { servicesvalidation } from "../../validations/servicesvalidation";
// react router
import { Link } from "react-router-dom";
// context
import { useContext } from "react";
import { Servicescontext } from "../../contexts/servicescontext";
// formik
import { useFormik } from "formik";
// react toastify
import { toast } from "react-toastify";
// set jsx
const AddServices = ({ submitaddservice }) => {
  const { sitelink, setsitelink, loading, services } =
    useContext(Servicescontext);
  const checkdisabled = useRef(null);
  useEffect(() => {
    if (sitelink) {
      checkdisabled.current.disabled = false;
    } else {
      checkdisabled.current.disabled = true;
      formik.setFieldValue("sitelink", "");
    }
  }, [sitelink]);
  const formik = useFormik({
    initialValues: {
      sitelink: "",
      servicename: "",
      servicecode: "",
      wage: "",
      additional_charge: "",
      discription: "",
    },
    validationSchema: servicesvalidation,
    onSubmit: (values) => {
      let servicenamecheck = true;
      services.map((ser) => {
        if (ser.servicename === values.servicename) {
          servicenamecheck = false;
          toast.error("این خدمت وجود دارد (عنوان خدمت)");
        }
      });
      if (servicenamecheck) {
        submitaddservice(values);
      }
    },
  });
  return loading ? (
    <div className="loader-up">
      <Loading />
    </div>
  ) : (
    <div className="up-navbar">
      <div className="addservices-title">
        <h2>افزودن خدمت</h2>
        <div className="services-title-bar mt-3 w-75 mx-auto"></div>
      </div>
      <div className="d-flex my-4 add-service-box mx-auto shadow-lg">
        <div className="add-service px-3 py-4 d-flex flex-column justify-content-center">
          <form onSubmit={formik.handleSubmit}>
            <div className="text-end my-2">
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  id="site-link-checkbox"
                  className="mx-2 bg-info"
                  onChange={(e) => {
                    setsitelink(e.target.checked);
                  }}
                />
                <label htmlFor="site-link-checkbox" className="site-link-label">
                  لینک سایت خدمت
                </label>
              </div>
              <div className="d-flex mb-1">
                <p className="my-0 px-1">لینک سایت</p>
                {formik.touched.sitelink && formik.errors.sitelink ? (
                  <p className="mx-2 my-0 text-danger">
                    {formik.errors.sitelink}
                  </p>
                ) : null}
              </div>
              <input
                type="text"
                placeholder="لینک سایت ..."
                className="form-control addservices-input"
                id="sitelink"
                {...formik.getFieldProps("sitelink")}
                ref={checkdisabled}
                disabled
              />
            </div>
            <div className="text-end my-2">
              <div className="d-flex mb-1">
                <p className="my-0 px-1">عنوان خدمت</p>
                {formik.touched.servicename && formik.errors.servicename ? (
                  <p className="mx-2 my-0 text-danger">
                    {formik.errors.servicename}
                  </p>
                ) : null}
              </div>
              <input
                type="text"
                placeholder="عنوان خدمت ..."
                className="form-control addservices-input"
                id="servicename"
                {...formik.getFieldProps("servicename")}
              />
            </div>
            <div className="text-end my-2">
              <div className="d-flex mb-1">
                <p className="my-0 px-1">کد خدمت</p>
                {formik.touched.servicecode && formik.errors.servicecode ? (
                  <p className="mx-2 my-0 text-danger">
                    {formik.errors.servicecode}
                  </p>
                ) : null}
              </div>
              <input
                type="number"
                placeholder="کد خدمت ..."
                className="form-control addservices-input"
                id="servicecode"
                {...formik.getFieldProps("servicecode")}
              />
            </div>
            <div className="text-end my-2">
              <div className="d-flex mb-1">
                <p className="my-0 px-1">کارمزد خدمت</p>
                {formik.touched.wage && formik.errors.wage ? (
                  <p className="mx-2 my-0 text-danger">{formik.errors.wage}</p>
                ) : null}
              </div>
              <input
                type="number"
                placeholder="کارمزد خدمت ( تومان ) ..."
                className="form-control addservices-input"
                name="wage"
                {...formik.getFieldProps("wage")}
              />
            </div>
            <div className="text-end my-2">
              <div className="d-flex mb-1">
                <p className="my-0 px-1">هزینه اضافی خدمت</p>
                {formik.touched.additional_charge &&
                formik.errors.additional_charge ? (
                  <p className="mx-2 my-0 text-danger">
                    {formik.errors.additional_charge}
                  </p>
                ) : null}
              </div>
              <input
                type="number"
                placeholder="هرینه اضافی خدمت ( تومان ) ..."
                className="form-control addservices-input"
                id="additional_charge"
                {...formik.getFieldProps("additional_charge")}
              />
            </div>
            <div className="text-end my-2">
              <div className="d-flex mb-1">
                <p className="my-0 px-1">توضیحات خدمت</p>
                {formik.touched.discription && formik.errors.discription ? (
                  <p className="mx-2 my-0 text-danger">
                    {formik.errors.discription}
                  </p>
                ) : null}
              </div>
              <textarea
                placeholder="توضیحات خدمت ..."
                className="form-control addservices-input addservices-discription"
                id="discription"
                {...formik.getFieldProps("discription")}
              ></textarea>
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
          </form>
        </div>
        <img
          src={require("../../assets/image/crop-colleagues-using-laptop-table.jpg")}
          alt="add-service-image"
          className="add-service-img d-none d-md-flex"
        />
      </div>
    </div>
  );
};
export default AddServices;
