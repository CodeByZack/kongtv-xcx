import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { AtSearchBar, AtToast } from "taro-ui";
import Taro from "@tarojs/taro";
import HomeBox from "../../components/homeBox";
import { useQuery } from "../../hook";
import Api from "../../http";
import "./video.less";

const formatResult = (res) => {
  const dy = res.filter((movie) => movie.type_id_1 === 1);
  const dsj = res.filter((movie) => movie.type_id_1 === 2);
  const zy = res.filter((movie) => movie.type_id === 3);
  const dm = res.filter((movie) => movie.type_id === 4);

  return {
    dy,
    dsj,
    zy,
    dm,
    advice: [dy[0], dsj[0], dm[0], zy[0]],
  };
};

const VideoPage = () => {
  const { list, loading } = useQuery(Api.getIndex, {
    formatResult,
    initSearch: true,
  });

  console.log(list);

  const handleSearch = () => {
    Taro.navigateTo({
      url: "moviesearch",
    });
  };

  if (loading) {
    return <AtToast hasMask duration={0} isOpened={loading} status="loading" />;
  }

  return (
    <View className="video">
      <AtSearchBar value="" onActionClick={handleSearch} />
      <Swiper
        className="test-h"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        vertical={false}
        circular
        indicatorDots
        autoplay
      >
        {(list?.advice || []).map((item) => {
          return (
            <SwiperItem>
              <Image mode="scaleToFill" src={item.vod_pic} />
            </SwiperItem>
          );
        })}
      </Swiper>
      <HomeBox title="影视" data={list.dsj} />
      <HomeBox title="电影" data={list.dy} />
      <HomeBox title="动漫" data={list.dm} />
      <HomeBox title="综艺" data={list.zy} />
    </View>
  );
};

export default VideoPage;
