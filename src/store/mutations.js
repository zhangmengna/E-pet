/*直接操作state的对象*/
import Vue from 'vue'
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

export default {
  [RECEIVE_HEADMENUS](state,{headMenus}){
    state.headMenus = headMenus
  },
  [RECEVIE_IMGSLIST](state,{imgsList}){
    state.imgsList = imgsList
  },
  [RECEVIE_COLUMNIMGS](state,{columnImgs}){
    state.columnImgs = columnImgs
  },
  [RECEVIE_ADBRANDS](state,{adBrands}){
    state.adBrands = adBrands
  },
  [RECEVIE_TYPESNAME](state,{typesName}){
    state.typesName = typesName
  },
  [RECEVIE_TYPESLIST](state,{typesList}){
    state.typesList = typesList
  },
  [RECEVIE_CLASSBRANDS](state,{classBrands}){
    state.classBrands = classBrands
  },
  [RECEVIE_ALLBRANDS](state,{allBrands}){
    state.allBrands = allBrands
  },

}
