import { View, Swiper, SwiperItem, Image, Input } from '@tarojs/components';
import { AtIcon, AtSearchBar } from 'taro-ui';
import HomeBox from '../../components/homeBox';
import HomeItem from '../../components/homeItem';
import NavBar, { withNavBar } from '../../components/navbar';
import store from '../../store';
import './style.less';

const MovieHome = () => {
  const { home, jumpUtil } = store.useContainer();
  const { jumpToDetail, jumpToSearch } = jumpUtil;
  const { adviceMovieList: data } = home;

  const dy = data.filter((movie) => movie.type_id_1 === 1);
  const dsj = data.filter((movie) => movie.type_id_1 === 2);
  const zy = data.filter((movie) => movie.type_id === 3);
  const dm = data.filter((movie) => movie.type_id === 4);

  const swipers = [dy[0], dsj[0], zy[0], dm[0], dy[1]].filter((i) => i);

  return (
    <View className="movie-home">
      <View className="search">
        <View className="input" onClick={jumpToSearch}>
          <AtIcon value="search" size="16" customStyle={{ marginRight : 8 }}/>
          搜索
        </View>
      </View>
      <HomeItem title="影视" data={dsj} />
      <HomeItem title="电影" data={dy} />
      <HomeItem title="动漫" data={dm} />
      <HomeItem title="综艺" data={zy} />
    </View>
  );
};

export default withNavBar(MovieHome, { title: '风影院', showBack: false });
