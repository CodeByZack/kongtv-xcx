import { createContainer } from './unstate-next';
import { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';

const useStore = ()=>{

  const [detail,setDetail] = useState(null);

  useEffect(()=>{
    if(detail){

    }
  },[detail]);

  return {detail,setDetail};
};

const store = createContainer(useStore);

export default store;
