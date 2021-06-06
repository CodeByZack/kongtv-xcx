import axios from "axios";

axios.defaults.baseURL = "https://api.fengxiaoci.cn/movie";
axios.defaults.timeout = 20000;

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // console.log(response);
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getIndex = () => {
  return axios.get("/index", {
    params: {
      router: "index",
    },
  });
};

export const getCategory = (type, options = {}, page, pagesize = 9) => {
  return axios.get(`/${type}`, {
    params: {
      page,
      pagesize,
      ...options,
    },
  });
};

export const searchMovie = (searchText) => {
  return axios.get("/search", {
    params: {
      router: "search",
      word: searchText,
      pagesize: 100,
    },
  });
};
