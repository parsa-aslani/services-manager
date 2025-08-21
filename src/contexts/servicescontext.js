import { createContext } from "react";
export const Servicescontext = createContext({
  quickaccesses: [],
  loading: false,
  services: [],
  sitelink: false,
  show: false,
  filterservice: [],
  setsitelink: () => {},
  handleClose: () => {},
  handleShow: () => {},
  submitaddquickaccess: () => {},
  deleteservicealert: () => {},
  deletequickalert: () => {},
  setsearchvalue: () => {},
});
