import { Component, useEffect } from 'react'
import { View, Text, Video } from '@tarojs/components'

import './video.less'
import { getIndex } from '../../store/http';


const VideoPage = ()=>{
  
  useEffect(()=>{
    getIndex().then(console.log);

  },[]);

  return (
    <View className='video'>
      <Text>准备在这显示video</Text>
      <Video
          id='video'
          src='https://vod3.buycar5.cn/20210411/scFsjz8s/index.m3u8'
          poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime='0'
          controls={true}
          autoplay={false}
          loop={false}
          showCastingButton
          muted={false}
        />
    </View>
  );
};

export default VideoPage;