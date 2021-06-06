import { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { AtLoadMore } from "taro-ui";
import { useQuery } from "../../hook";
import Api from "../../http";
import { MovieGrid } from "../../components/movieItem";
import "./movieCategory.less";

import store from "../../store";

const MovieCategory = (props) => {
  const { type = "dsj" } = props;

  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const { setDetail } = store.useContainer();

  const params = getCurrentInstance().router.params;
  console.log(params);

  const {
    list: data,
    query,
    loading,
  } = useQuery(Api.getCategory, {
    initParam: {
      type,
      page,
    },
  });

  const loadMore = () => {
    console.log(page);
    query({ type, page: page + 1 });
    setPage(page + 1);
  };

  useEffect(() => {
    console.log(data);
    if (data?.length > 0) {
      setList([...list, ...data]);
    }
  }, [data]);

  console.log(page);
  const handleClick = (d) => {
    console.log(d);
    setDetail(d);
    Taro.navigateTo({
      url: "moviedetail",
    });
  };

  return (
    <View className="movie-category">
      <MovieGrid movies={list} handleClick={handleClick} />
      <AtLoadMore onClick={loadMore} status={loading ? "loading" : "more"} />
    </View>
  );
};

export default MovieCategory;
