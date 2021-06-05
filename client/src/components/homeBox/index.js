import "taro-ui/dist/style/components/flex.scss";
import { View, Text, Video } from '@tarojs/components';
import Taro from '@tarojs/taro';
import MovieItem from "../movieItem";
import store from "../../store";

const HomeBox = (props)=>{

  const { title, data } = props;

  
  const { setDetail } = store.useContainer();

  const handleClick = (d)=>{
    console.log(d);
    setDetail(d);
    Taro.navigateTo({ 
      url : 'moviedetail'
     })
  };

  return (
    <View className='home-box-container'>
      <View className='home-box-header'>
        热播{title}
      </View>
      <View className='at-row at-row--wrap'>
        {(data||[]).map(d=>{
          console.log(d);
          return <View className='at-col at-col-4'><MovieItem onClick={()=>handleClick(d)} {...d}/></View>
        })}
      </View>
    </View>
  )
};

export default HomeBox;