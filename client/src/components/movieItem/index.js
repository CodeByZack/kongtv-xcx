import { View, Image, Video } from '@tarojs/components'
import store from '../../store';
import './index.less';



const MovieItem = (props)=>{
  console.log(props);
  const { vod_pic, vod_name, onClick = noop } = props;



  return (
    <View onClick={onClick} className='movie-item-container'>
      <View className='img-container'>
        <Image mode='scaleToFill' className='cover' src={vod_pic}/>
      </View>
      <View className='movie-item-title'>{vod_name}</View>
    </View>
  )
};

export default MovieItem;