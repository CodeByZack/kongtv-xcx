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
  const { setDetail } = store.useContainer();

  const handleSearch = () => {
    query(searchValue);
  };
  const handleClick = (d) => {
    console.log(d);
    setDetail(d);
    Taro.navigateTo({
      url: "moviedetail",
    });
  };

  return (
    <View>
      <AtSearchBar
        value={searchValue}
        onChange={setSearchValue}
        onActionClick={handleSearch}
      />
      <MovieGrid movies={list} handleClick={handleClick} />
    </View>
  );
};

export default MovieSearch;
