import { useState } from 'react';
import Taro from '@tarojs/taro';
import { AtSearchBar, AtActivityIndicator } from 'taro-ui';
import { View } from '@tarojs/components';
import Api from '../../http';
import { useQuery } from '../../hook';
import { MovieGrid } from '../../components/movieItem';
import store from '../../store';
import './movieSearch.less';

const MovieSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const { list, query, loading } = useQuery(Api.searchMovie, {
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
    <View className="moviesearch">
      <AtSearchBar
        value={searchValue}
        onChange={setSearchValue}
        onActionClick={handleSearch}
        onConfirm={handleSearch}
        showActionButton
      />

      {loading ? (
        <AtActivityIndicator size={50} mode="center" />
      ) : (
        <MovieGrid movies={list} handleClick={handleClick} />
      )}
    </View>
  );
};

export default MovieSearch;
