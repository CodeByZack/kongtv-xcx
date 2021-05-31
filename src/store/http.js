import Taro from '@tarojs/taro';

const baseURL = 'https://api.fengxiaoci.cn/movie';

export const getIndex = async ()=>{
    const params = {
        url : `${baseURL}/index`,
    };
    const res = await Taro.request(params)
    if(res.statusCode !== 200){
        console.log('出错了！');
    }else{
        return res.data;
    }
};
