import axios from "axios";
const site_url = "https://service-manage.onrender.com";
// route http://localhost:9000/services
export const getallservices = () => {
  const url = `${site_url}/services`;
  return axios.get(url);
};
// route http://localhost:9000/services/serviceId
export const getservice = (serviceId) => {
  const url = `${site_url}/services/${serviceId}`;
  return axios.get(url);
};
// route http://localhost:9000/services
export const addservice = (service) => {
  const url = `${site_url}/services`;
  return axios.post(url, service);
};
// route http://localhost:9000/services/serviceId
export const editservice = (serviceId, service) => {
  const url = `${site_url}/services/${serviceId}`;
  return axios.put(url, service);
};
// route http://localhost:9000/services/serviceId
export const deleteservice = (serviceId) => {
  const url = `${site_url}/services/${serviceId}`;
  return axios.delete(url);
};

// quickaccess
// route http://localhost:9000/quickaccess
export const allquickaccess = () => {
  const url = `${site_url}/quickaccess`;
  return axios.get(url);
};
// route http://localhost:9000/quickaccess
export const addquickaccess = (quickaccess) => {
  const url = `${site_url}/quickaccess`;
  return axios.post(url, quickaccess);
};
// route http://localhost:9000/quickaccess/:quickaccessId
export const deletequickaccess = (quickaccessId) => {
  const url = `${site_url}/quickaccess/${quickaccessId}`;
  return axios.delete(url);
};
