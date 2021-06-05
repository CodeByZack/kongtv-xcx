// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const { default: axios } = require('axios')
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})


const transmitApi = async (url,params)=>{
  const a =  await axios.get(url,{ params });
  return a;
 };
 
/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
// ...
exports.main = async (event, context) => {

  console.log(event.url);
  const res = await axios.get(event.url);
  console.log(res.data);

  return {
    data : res.data
  }
}
