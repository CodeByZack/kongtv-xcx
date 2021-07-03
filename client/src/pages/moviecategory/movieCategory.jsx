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
import OptionChoose, { typeArr } from "../../components/optionchoose";

const MovieCategory = (props) => {
  const { visible } = props;

  const { category } = store.useContainer();

  const { isFetching, list, setFilterOption, filterOption, getData, type, setType } = category;
  const { jumpUtil } = store.useContainer();

  const handleClick = (d) => {
    jumpUtil.jumpToDetail(d);
  };
  useReachBottom(() => {
    // if (!visible) return;
    getData();
    console.log(visible);
    console.log("onReachBottom");
    console.log(type);
  });

  const handleTypeClick = (v)=>{
    console.log(v);
    setType(v);
  };

  return (
    <View className="movie-category">
      <OptionChoose nowChoose={type} optionArr={typeArr} onClick={handleTypeClick}/>
      <MovieGrid movies={list} handleClick={handleClick} />
      {isFetching && <AtLoadMore status="loading" />}
    </View>
  );
};

export default MovieCategory;
