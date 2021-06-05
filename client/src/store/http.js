import Taro from '@tarojs/taro';

const baseURL = 'https://zackapi.deep-os.com/movie';
const baseURL2 = 'https://api.fengxiaoci.cn/movie';

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

export const callIndex = async ()=>{
    const url = `${baseURL2}/index`;

    const res = await Taro.cloud.callFunction({
        name : 'login',
        data : { url }
    });

    console.log(res);
    return res.result.data;
};
