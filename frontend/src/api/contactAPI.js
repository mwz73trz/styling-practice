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

contactAPI.getContactById = async (contactId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}contacts/${contactId}/`, apiHelpers.getCsrfConfig())
  );
};

contactAPI.createContact = async (contactData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}contacts/`, contactData, apiHelpers.getCsrfConfig())
  );
};

contactAPI.updateContact = async (contactId, contactData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.put(
      `${BASE_URL}contacts/${contactId}/`,
      contactData,
      apiHelpers.getCsrfConfig()
    )
  );
};

contactAPI.deleteContact = async (contactId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(
      `${BASE_URL}contacts/${contactId}/`,
      apiHelpers.getCsrfConfig()
    )
  );
};

export default contactAPI;
