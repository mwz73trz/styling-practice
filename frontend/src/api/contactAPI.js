import axios from "axios";
import apiHelpers from "./apiHelpers";

const BASE_URL = "http://localhost:8000/api/";

const contactAPI = {};

contactAPI.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

contactAPI.logout = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}logout/`, apiHelpers.getCsrfConfig())
  );
};

contactAPI.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}users/`, signupData, apiHelpers.getCsrfConfig())
  );
};

contactAPI.getContacts = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}contacts/`, apiHelpers.getCsrfConfig())
  );
};

export default contactAPI;
