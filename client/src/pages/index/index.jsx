import { Component } from "react";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <AtButton
          onClick={() => {
            console.log("页面跳");
            Taro.navigateTo({ url: "/pages/video/video" });
          }}
          type="primary"
          circle
        >
          打开视频应用
        </AtButton>
      </View>
    );
  }
}
