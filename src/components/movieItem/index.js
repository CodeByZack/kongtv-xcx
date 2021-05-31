import { View, Image, Video } from '@tarojs/components'


const MovieItem = (props)=>{
  console.log(props);
  const { vod_pic, vod_name } = props;

  return (
    <View className='movie-item-container'>
      <Image src={vod_pic}/>
      <View className='movie-item-title'>{vod_name}</View>
    </View>
  )
};

export default MovieItem;