import { ScrollView, View, Text } from '@tarojs/components';
import React from 'react';
import store from '../../store';
import MovieItem from '../movieItem';
import './index.less';

const HomeItem = (props) => {
  const { data } = props;
  const { jumpUtil } = store.useContainer();

  const handleClick = (d) => {
    jumpUtil.jumpToDetail(d);
  };

  return (
    <View className="home-item">
      <View className="home-title-wrapper">
        <Text className="title">热门电影</Text>
        <Text className="more">查看更多 &gt;</Text>
      </View>
      <ScrollView
        scrollX
        enable-flex
        show-scrollbar={false}
        className="home-scroll"
      >
        {(data || []).map((d) => {
          return <MovieItem onClick={() => handleClick(d)} {...d} />;
        })}
      </ScrollView>
    </View>
  );
};
export default HomeItem;
