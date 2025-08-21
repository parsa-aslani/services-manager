// import
import { quickvalidation } from "../../validations/quickaccessvalidation";
// react bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// context
import { useContext } from "react";
import { Servicescontext } from "../../contexts/servicescontext";
// formik
import { Form, Formik, Field, ErrorMessage } from "formik";
// react toastify
import { toast } from "react-toastify";
const QuickaccessAlert = () => {
  const { show, handleClose, submitaddquickaccess, services, quickaccesses } =
    useContext(Servicescontext);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="w-100">افزودن دسترسی سریع</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            accessid: "",
            quickaccessname: "",
          }}
          validationSchema={quickvalidation}
          onSubmit={(values) => {
            let accessidcheck = true;
            quickaccesses.map((quick) => {
              if (quick.accessid === values.accessid) {
                accessidcheck = false;
                toast.error("این دسترسی سریع وجود دارد");
              }
            });
            if (accessidcheck) {
              submitaddquickaccess(values);
            }
          }}
        >
          <Form>
            <div className="my-2">
              <div className="d-flex mx-1 mb-1">
                <p className="my-0">نام دسترسی سریع</p>
                <ErrorMessage
                  name="quickaccessname"
                  render={(quick) => (
                    <p className="input-error my-0 mx-2">{quick}</p>
                  )}
                />
              </div>
              <Field
                name="quickaccessname"
                type="text"
                className="form-control addservices-input"
                placeholder="نام دسترسی سریع ..."
              />
            </div>
            <div className="my-2">
              <div className="d-flex mx-1 mb-1">
                <p className="my-0">نام خدمت</p>
                <ErrorMessage
                  name="accessid"
                  render={(quick) => (
                    <p className="input-error my-0 mx-2">{quick}</p>
                  )}
                />
              </div>
              <Field
                name="accessid"
                className="form-control addservices-input"
                as="select"
              >
                <option value="0">نام خدمت</option>
                {services.map((ser) => (
                  <option value={ser.id}>{ser.servicename}</option>
                ))}
              </Field>
            </div>
            <div className="d-flex">
              <Button type="submit" variant="primary" className="px-4 mx-1">
                تایید
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="px-4 mx-1"
                onClick={handleClose}
              >
                انصراف
              </Button>
            </div>
          </Form>
        </Formik>
      </Modal.Body>
    </Modal>
  );
};
export default QuickaccessAlert;
