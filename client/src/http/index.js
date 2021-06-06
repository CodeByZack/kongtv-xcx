import {
  getCategory as getCategoryh5,
  getIndex as getIndexh5,
  searchMovie as searchMovieh5,
} from "./h5.request";
import {
  getCategory as getCategoryweapp,
  getIndex as getIndexweapp,
  searchMovie as searchMovieweapp,
} from "./weapp.request";
import { noop } from "../tools";

const env = "weapp";

let getIndexTmp, getCategoryTmp, searchMovieTmp;

if (env === "h5") {
  getIndexTmp = getIndexh5;
  getCategoryTmp = getCategoryh5;
  searchMovieTmp = searchMovieh5;
} else if (env === "weapp") {
  getIndexTmp = getIndexweapp;
  getCategoryTmp = getCategoryweapp;
  searchMovieTmp = searchMovieweapp;
} else {
  getIndexTmp = noop;
  getCategoryTmp = noop;
  searchMovieTmp = noop;
}

const Api = {
  getIndex: getIndexTmp,
  getCategory: getCategoryTmp,
  searchMovie: searchMovieTmp,
};

export default Api;
