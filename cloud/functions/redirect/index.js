const { default: axios } = require('axios')
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})


exports.main = async (event, context) => {

  const { url, params } = event;

  const res = await axios.get(url, { params });

  return {
    data: res.data
  }
}
