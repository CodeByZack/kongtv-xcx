import { useState } from "react";
import Taro from "@tarojs/taro";
import { AtSearchBar } from "taro-ui";
import { View } from "@tarojs/components";
import Api from "../../http";
import { useQuery } from "../../hook";
import { MovieGrid } from "../../components/movieItem";
import store from "../../store";

const MovieSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { list, query } = useQuery(Api.searchMovie, {
    initParam: searchValue,
  });
  const { jumpUtil } = store.useContainer();

  const handleSearch = () => {
    query(searchValue);
  };
  const handleClick = (d) => {
    jumpUtil.jumpToDetail(d);
  };

  return (
    <View>
      <AtSearchBar
        value={searchValue}
        onChange={setSearchValue}
        onActionClick={handleSearch}
        onConfirm={handleSearch}
        showActionButton
      />
      <MovieGrid movies={list} handleClick={handleClick} />
    </View>
  );
};

export default MovieSearch;
