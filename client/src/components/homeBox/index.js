import "taro-ui/dist/style/components/flex.scss";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtNavBar } from "taro-ui";
import MovieItem from "../movieItem";
import store from "../../store";
import "./index.less";

const HomeBox = (props) => {
  const { title, data } = props;

  const { setDetail } = store.useContainer();

  const handleClick = (d) => {
    setDetail(d);
    Taro.navigateTo({
      url: "moviedetail",
    });
  };

  const jumpCategory = (t) => {
    Taro.navigateTo({
      url: `moviecategory?type=${t}`,
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
          console.log(d);
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
