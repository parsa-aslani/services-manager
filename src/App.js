// import
import { useState, useEffect } from "react";
import "./App.css";
import "./site-style.css";
import {
  Header,
  Navbar,
  Services,
  Calculator,
  Editservices,
  AddServices,
  ViewServices,
} from "./components/index";
import {
  getallservices,
  allquickaccess,
  addservice,
  addquickaccess,
  getservice,
  editservice,
  deleteservice,
  deletequickaccess,
} from "./services/services-server";
import Swal from "sweetalert2";
// context
import { Servicescontext } from "./contexts/servicescontext";
// react router
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
// react toastify
import { toast, Bounce, ToastContainer } from "react-toastify";
// set jsx
function App() {
  const navigate = useNavigate();
  // state
  const [quickaccesses, setquickaccesses] = useState([]);
  const [services, setservices] = useState([]);
  const [loading, setloading] = useState(false);
  const [sitelink, setsitelink] = useState(false);
  const [show, setShow] = useState(false);
  const [viewservices, setviewservices] = useState({});
  const [filterservice, setfilterservice] = useState([]);

  // show services
  useEffect(() => {
    const getdata = async () => {
      try {
        setloading(true);
        const { data: servicesdata } = await getallservices();
        const { data: quickaccessdata } = await allquickaccess();
        setservices(servicesdata);
        setfilterservice(servicesdata);
        setquickaccesses(quickaccessdata);
        setloading(false);
      } catch (err) {
        console.log(err.massage);
        setloading(false);
      }
    };
    getdata();
  }, []);
  // submit add service
  const submitaddservice = async (values) => {
    try {
      setloading(true);
      const { status, data } = await addservice(values);
      if (status === 201) {
        const allservices = [...services, data];
        setservices(allservices);
        setfilterservice(allservices);
        setloading(false);
        setsitelink(false);
        navigate("/services");
        toast.success("خدمت با موفقیت اضافه شد");
      }
    } catch (err) {
      console.log(err.massage);
      setloading(false);
    }
  };
  // react bootstarp modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // submit add quickaccess
  const submitaddquickaccess = async (values) => {
    try {
      setloading(true);
      const { status, data } = await addquickaccess(values);
      if (status === 201) {
        const allquickaccess = [...quickaccesses, data];
        setquickaccesses(allquickaccess);
        setloading(false);
        handleClose();
        toast.success("دسترسی سریع با موفقیت اضافه شد");
      }
    } catch (err) {
      console.log(err.massage);
      setloading(false);
    }
  };
  // get view contact
  const getviewcontact = async (serviceId) => {
    try {
      const { data: getviewdata } = await getservice(serviceId);
      setviewservices(getviewdata);
    } catch (err) {
      console.log(err.message);
    }
  };
  // put edit data
  const submiteditservice = async (serviceId, values) => {
    try {
      setloading(true);
      const { status, data } = await editservice(serviceId, values);
      if (status === 200) {
        const allservice = [...services];
        const serviceindex = allservice.findIndex((ser) => ser.id == serviceId);
        allservice[serviceindex] = { ...data };
        setservices(allservice);
        setfilterservice(allservice);
        navigate("/Services");
        toast.success("مخاطب با موفقیت ویرایش شد");
      }
      setloading(false);
    } catch (err) {
      console.log(err.message);
      setloading(false);
    }
  };
  // delete service alert
  const deleteservicealert = (serviceId, name) => {
    Swal.fire({
      icon: "question",
      title: `ایا از حذف ${name} مطمئن هستید؟`,
      text: "در صورت حذف خدمت دسترسی سریع این خدمت هم حذف میشود",
      showCancelButton: true,
      confirmButtonText: "حدف خدمت",
      cancelButtonText: "انصراف",
      showCloseButton: true,
      customClass: {
        cancelButton: "btn btn-outline-secondary mx-2 py-2 px-5",
        confirmButton: "btn btn-primary mx-2 py-2 px-5",
      },
      background: "#edf0f3ff",
      backdrop: "rgba(10, 17, 22, 0.63)",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteservices(serviceId);
      }
    });
  };
  // delete service
  const deleteservices = async (serviceId) => {
    try {
      setloading(true);
      const { status } = await deleteservice(serviceId);
      if (status === 200) {
        const notdeleteservice = services.filter((ser) => ser.id != serviceId);
        setservices(notdeleteservice);
        setfilterservice(notdeleteservice);
        quickaccesses.map(async (quicke) => {
          if (quicke.accessid == serviceId) {
            const { status } = await deletequickaccess(serviceId);
            if (status === 200) {
              const notdeletequick = quickaccesses.filter(
                (quick) => quick.id != quicke.accessid
              );
              setquickaccesses(notdeletequick);
            }
          }
        });
        toast.success("مخاطب با موفقیت حذف شد");
      }
      setloading(false);
    } catch (err) {
      console.log(err.message);
      setloading(false);
    }
  };
  // delete quickaccess alert
  const deletequickalert = (quickaccessId, name) => {
    Swal.fire({
      icon: "question",
      title: `ایا از حذف ${name} مطمئن هستید؟`,
      showCancelButton: true,
      confirmButtonText: "حدف دسترسی سریع",
      cancelButtonText: "انصراف",
      showCloseButton: true,
      customClass: {
        cancelButton: "btn btn-outline-secondary mx-2 py-2 px-5",
        confirmButton: "btn btn-primary mx-2 py-2 px-2",
      },
      background: "#edf0f3ff",
      backdrop: "rgba(10, 17, 22, 0.63)",
    }).then((result) => {
      if (result.isConfirmed) {
        deletequick(quickaccessId);
      }
    });
  };
  // delete quickaccess
  const deletequick = async (quickaccessId) => {
    try {
      setloading(true);
      const { status } = await deletequickaccess(quickaccessId);
      if (status === 200) {
        const notdeletequick = quickaccesses.filter(
          (quick) => quick.id != quickaccessId
        );
        setquickaccesses(notdeletequick);
        toast.success("دسترسی سریع با موفقیت حذف شد");
      }
      setloading(false);
    } catch (err) {
      console.log(err.message);
      setloading(false);
    }
  };
  // live search
  let searchtime;
  const setsearchvalue = (event) => {
    clearTimeout(searchtime);
    searchtime = setTimeout(() => {
      setfilterservice(
        services.filter((service) => {
          return service.servicename
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        })
      );
    }, 500);
  };
  return (
    <Servicescontext.Provider
      value={{
        quickaccesses,
        loading,
        services,
        sitelink,
        setsitelink,
        show,
        handleClose,
        handleShow,
        submitaddquickaccess,
        deleteservicealert,
        deletequickalert,
        setsearchvalue,
        filterservice,
      }}
    >
      <div className="App">
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={"/services"} />} />
          <Route
            path="/services"
            element={
              <>
                <Header />
                <Services />
              </>
            }
          />
          <Route
            path="/services/add"
            element={<AddServices submitaddservice={submitaddservice} />}
          />
          <Route
            path="/services/:serviceId"
            element={
              <ViewServices
                viewservices={viewservices}
                getviewcontact={getviewcontact}
              />
            }
          />
          <Route
            path="/services/edit/:serviceId"
            element={
              <Editservices
                submiteditservice={submiteditservice}
                setloading={setloading}
              />
            }
          />
          <Route path="/services/Calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Servicescontext.Provider>
  );
}

export default App;
