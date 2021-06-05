import { Component, useState } from 'react'
import { View, Video } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './moviedetail.less'
import store from '../../store'
import { decodeJuJi } from '../../tools'

const Moviedetail = ()=>{

  const { detail } = store.useContainer();
  const [playUrl ,setPlayUrl] = useState('');
  console.log(detail);

  const playSources = decodeJuJi(detail.vod_play_url);

  console.log(playSources);
  return (
    <View className='moviedetail'>
      {detail.vod_name}
      <Video
          id='video'
          src={playUrl}
          poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime='0'
          controls={true}
          autoplay={false}
          loop={false}
          showCastingButton
          muted={false}
        />
      {playSources.map((playSource)=>{
        return (
          <View>
            {playSource.map((item)=>{
              return <AtButton onClick={()=>{
                setPlayUrl(item.link)
              }}>{item.text}</AtButton>
            }
              
            )}


            </View>
        )
      })}
    </View>
  );
};



export default Moviedetail;