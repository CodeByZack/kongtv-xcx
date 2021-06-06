import { View } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";
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
  };
};

const VideoPage = () => {
  const { list } = useQuery(Api.getIndex, {
    formatResult,
    initSearch: true,
  });

  console.log(list);

  const handleSearch = () => {
    Taro.navigateTo({
      url: "moviesearch",
    });
  };

  return (
    <View className="video">
      <AtSearchBar value="" onActionClick={handleSearch} />
      <HomeBox title="影视" data={list.dsj} />
      <HomeBox title="电影" data={list.dy} />
      <HomeBox title="动漫" data={list.dm} />
      <HomeBox title="综艺" data={list.zy} />
      {/* <Video
          id='video'
          src='https://vod3.buycar5.cn/20210411/scFsjz8s/index.m3u8'
          poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime='0'
          controls={true}
          autoplay={false}
          loop={false}
          showCastingButton
          muted={false}
        /> */}
    </View>
  );
};

export default VideoPage;
