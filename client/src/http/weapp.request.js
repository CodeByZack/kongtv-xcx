import Taro from "@tarojs/taro";

const baseURL = "https://api.fengxiaoci.cn/movie";

const redirect = async (url, params) => {
  const res = await Taro.cloud.callFunction({
    name: "redirect",
    data: { url, params },
  });
  console.log(res);
  return res.result;
};

export const getIndex = async () => {
  const url = `${baseURL}/index`;
  const res = await redirect(url);
  return res.data;
};

export const getCategory = async ({
  type,
  options = {},
  page,
  pagesize = 9,
}) => {
  const url = `${baseURL}/${type}`;
  const params = {
    page,
    pagesize,
    ...options,
  };
  const res = await redirect(url, params);
  return res.data;
};

export const searchMovie = async (searchText) => {
  const url = `${baseURL}/search`;
  const params = {
    router: "search",
    word: searchText,
    pagesize: 100,
  };
  const res = await redirect(url, params);
  return res.data;
};
