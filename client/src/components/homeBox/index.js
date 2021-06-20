import "taro-ui/dist/style/components/flex.scss";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtNavBar } from "taro-ui";
import MovieItem from "../movieItem";
import store from "../../store";
import "./index.less";

const HomeBox = (props) => {
  const { title, data } = props;

  const { jumpUtil } = store.useContainer();

  const handleClick = (d) => {
    jumpUtil.jumpToDetail(d);
  };

  const jumpCategory = (t) => {
    Taro.navigateTo({
      url: `pages/moviecategory/moviecategory?type=${t}`,
    });
  };

  return (
    <View className="home-box-container">
      <View onClick={() => jumpCategory(title)}>
        <AtNavBar
          onClickLeftIcon={() => jumpCategory(title)}
          leftText={title}
          leftIconType="video"
          rightFirstIconType="chevron-right"
        />
      </View>
      <View className="at-row at-row--wrap">
        {(data || []).map((d) => {
          return (
            <View className="at-col at-col-4">
              <MovieItem onClick={() => handleClick(d)} {...d} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default HomeBox;
