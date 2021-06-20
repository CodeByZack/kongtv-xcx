import { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import Taro, {
  getCurrentInstance,
  useReachBottom,
  useDidShow,
  useDidHide,
} from "@tarojs/taro";
import { AtLoadMore } from "taro-ui";
import { useQuery } from "../../hook";
import Api from "../../http";
import { MovieGrid } from "../../components/movieItem";
import "./movieCategory.less";

import store from "../../store";

const MovieCategory = (props) => {
  const { type = "dsj", visible } = props;

  const { isFetching, list, setFilterOption, filterOption, getData } =
    store.useContainer()[type];
  const { jumpUtil } = store.useContainer();

  const handleClick = (d) => {
    jumpUtil.jumpToDetail(d);
  };
  useReachBottom(() => {
    if (!visible) return;
    getData();
    console.log(visible);
    console.log("onReachBottom");
    console.log(type);
  });

  return (
    <View className="movie-category">
      <MovieGrid movies={list} handleClick={handleClick} />
      {isFetching && <AtLoadMore status="loading" />}
    </View>
  );
};

export default MovieCategory;
