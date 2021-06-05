import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './moviedetail.less'
import store from '../../store'

const Moviedetail = ()=>{

  const { detail } = store.useContainer();

  console.log(detail);

  return (
    <View className='moviedetail'>
      movie detail
    </View>
  );
};



export default Moviedetail;