/*触发mutations改变状态的对象*/
import {
  reqHeadMenus,
  reqImgsList,
  reqColumnImgs,
  reqAdBrands,
  reqTypesName,
  reqTypesList,
  reqClassBrands,
  reqAllBrands,
} from '../api'

import {
  RECEIVE_HEADMENUS,
  RECEVIE_IMGSLIST,
  RECEVIE_COLUMNIMGS,
  RECEVIE_ADBRANDS,
  RECEVIE_TYPESNAME,
  RECEVIE_TYPESLIST,
  RECEVIE_CLASSBRANDS,
  RECEVIE_ALLBRANDS,
} from './mutation-types'
/*
使用async 和 await 的作用
1，使用同步编码的方式实现异步的效果
2，包装promise,简化编码
用法：
1，加await：在返回promise对象的函数调用的左边
2，加async：在await所在的函数定义的左边
*/

export default {
  // 头部导航菜单数据
  async getHeadMenus({commit},callback){
    const result = await reqHeadMenus()
    if(result.code===0){
      const headMenus = result.data
      commit(RECEIVE_HEADMENUS,{headMenus})
      callback && callback()
    }
  },
  // 轮播图片+静态轮播
  async getImgsList({commit},callback){
    const result = await reqImgsList()
    if(result.code===0){
      const imgsList = result.data
      commit(RECEVIE_IMGSLIST,{imgsList})
      callback && callback()
    }
  },

  async getColumnImgs({commit},callback){
    const result = await reqColumnImgs()
    if(result.code===0){
      const columnImgs = result.data
      commit(RECEVIE_COLUMNIMGS,{columnImgs})
      callback && callback()
    }
  },

  async getAdBrands({commit},callback){
    const result = await reqAdBrands()
    if(result.code===0){
      const adBrands = result.data
      commit(RECEVIE_ADBRANDS,{adBrands})
      callback && callback()
    }
  },

  async getTypesName({commit},callback){
    const result = await reqTypesName()
    if(result.code===0){
      commit(RECEVIE_TYPESNAME,{typesName: result.data})
      callback && callback()
    }
  },
  async getTypesList({commit},callback){
    const result = await reqTypesList()
    if(result.code===0){
      commit(RECEVIE_TYPESLIST,{typesList: result.data})
      callback && callback()
    }
  },

  async getClassBrands({commit},callback){
    const result = await reqClassBrands()
    if(result.code===0){
      commit(RECEVIE_CLASSBRANDS,{classBrands: result.data})
      callback && callback()
    }
  },

  async getAllBrands({commit},callback){
    const result = await reqAllBrands()
    if(result.code===0){
      commit(RECEVIE_ALLBRANDS,{allBrands: result.data})
      callback && callback()
    }
  },
}
