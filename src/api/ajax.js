import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise

    if(type === 'GET'){
      // 准备url query 参数
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach( key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' +dataStr
      }
      // 发送get 请求
      promise = axios.get(url)
    }else{
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
