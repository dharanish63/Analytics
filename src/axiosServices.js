import interceptor from "./interceptor";

export const axiosGet = (url) => {
  return interceptor.get(`${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const axiosPost = (url, data) => {
  return interceptor.post(`${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const axiosDelete = (url) => {
  return interceptor.delete(`${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const axiosPut = (url, data) => {
  return interceptor.put(`${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const axiosForm = (url, data) => {
  return interceptor.post(`${url}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
