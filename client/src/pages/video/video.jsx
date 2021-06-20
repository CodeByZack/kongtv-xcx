import { View, Swiper, SwiperItem, Image, Text } from "@tarojs/components";
import { AtNavBar, AtTabsPane, AtTabs, AtToast, AtFab } from "taro-ui";
import HomeBox from "../../components/homeBox";
import { useQuery } from "../../hook";
import Api from "../../http";
import "./video.less";
import store from "../../store";
import MovieHome from "../moviehome";
import MovieCategory from "../moviecategory/moviecategory";

const tabs = [
  { title: "首页", index: 0, category: "home", compoent: MovieHome },
  { title: "电影", index: 1, category: "dy", compoent: MovieCategory },
  { title: "电视剧", index: 2, category: "dsj", compoent: MovieCategory },
  { title: "动漫", index: 3, category: "dm", compoent: MovieCategory },
  { title: "综艺", index: 4, category: "zy", compoent: MovieCategory },
  // { title: "伦理", index : 5 , category='ll' },
];

const VideoPage = () => {
  const { home, jumpUtil } = store.useContainer();
  const { loading, tabIndex, setTabIndex } = home;

  const handleSearch = () => {
    jumpUtil.jumpToSearch();
  };

  if (loading) {
    return <AtToast hasMask duration={0} isOpened={loading} status="loading" />;
  }

  return (
    <View className="video">
      {/* <AtNavBar
        rightFirstIconType="search"
        color="#000"
        title="风影院"
        leftIconType="bullet-list"
        onClickRgIconSt={handleSearch}
      /> */}
      <AtTabs current={tabIndex} tabList={tabs} onClick={setTabIndex}>
        {tabs.map((t) => {
          return (
            <AtTabsPane current={tabIndex} index={t.index}>
              <t.compoent type={t.category} visible={t.index === tabIndex} />
            </AtTabsPane>
          );
        })}
      </AtTabs>
      <View className="fab">
        <AtFab>
          <Text onClick={handleSearch}>搜搜</Text>
        </AtFab>
      </View>
    </View>
  );
};

export default VideoPage;
