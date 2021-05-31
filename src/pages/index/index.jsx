import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import Taro from '@tarojs/taro';

import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './index.less';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <AtButton type="primary">I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton
          onClick={() => {
            console.log('页面跳');
            Taro.navigateTo({ url: '/pages/video/video' });
          }}
          type="primary"
          circle={true}
        >
          支持
        </AtButton>
        <Text>共建？</Text>
        <AtButton type="secondary" circle={true}>
          来
        </AtButton>
      </View>
    );
  }
}