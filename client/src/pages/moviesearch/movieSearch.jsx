import { useState } from 'react';
import Taro from '@tarojs/taro';
import { AtSearchBar, AtActivityIndicator, AtIcon } from 'taro-ui';
import { Input, View } from '@tarojs/components';
import Api from '../../http';
import { useQuery } from '../../hook';
import { MovieGrid } from '../../components/movieItem';
import store from '../../store';
import './movieSearch.less';
import { withNavBar } from '../../components/navbar';

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
      <View className="search">
        <Input
          value={searchValue}
          onInput={(e) => setSearchValue(e.detail.value)}
          onConfirm={handleSearch}
          placeholder="搜索"
        />
        <AtIcon value='search' size={18} className='search-icon'/>
      </View>

      {loading ? (
        <AtActivityIndicator size={50} mode="center" />
      ) : (
        <MovieGrid movies={list} handleClick={handleClick} />
      )}
    </View>
  );
};

export default withNavBar(MovieSearch, { title: '搜索', showBack: true });
