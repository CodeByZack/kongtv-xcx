import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import HomeBox from "../../components/homeBox";
import store from "../../store";

const MovieHome = () => {
  const { home, jumpUtil } = store.useContainer();
  const { jumpToDetail } = jumpUtil;
  const { adviceMovieList: data } = home;

  const dy = data.filter((movie) => movie.type_id_1 === 1);
  const dsj = data.filter((movie) => movie.type_id_1 === 2);
  const zy = data.filter((movie) => movie.type_id === 3);
  const dm = data.filter((movie) => movie.type_id === 4);

  const swipers = [dy[0], dsj[0], zy[0], dm[0], dy[1]].filter((i) => i);

  return (
    <View>
      <Swiper
        style={{ width: "100%" }}
        indicatorColor="#999"
        indicatorActiveColor="#333"
        vertical={false}
        circular
        indicatorDots
        autoplay
      >
        {(swipers || []).map((item) => {
          return (
            <SwiperItem onClick={() => jumpToDetail(item)}>
              <Image mode="scaleToFill" src={item.vod_pic} />
            </SwiperItem>
          );
        })}
      </Swiper>
      <HomeBox title="影视" data={dsj} />
      <HomeBox title="电影" data={dy} />
      <HomeBox title="动漫" data={dm} />
      <HomeBox title="综艺" data={zy} />
    </View>
  );
};

export default MovieHome;