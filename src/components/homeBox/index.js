import "taro-ui/dist/style/components/flex.scss";
import { View, Text, Video } from '@tarojs/components'
import MovieItem from "../movieItem";

const HomeBox = (props)=>{

  const { title, data } = props;

  return (
    <View className='home-box-container'>
      <View className='home-box-header'>
        热播{title}
      </View>
      <View className='at-row at-row--wrap'>
        {(data||[]).map(d=>{
          console.log(d);
          return <View className='at-col at-col-4'><MovieItem {...d}/></View>
        })}
      </View>
    </View>
  )
};

export default HomeBox;