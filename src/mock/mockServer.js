import Mock from 'mockjs'

import data from './data.json'
import types from './types.json'

// import brands from './brands.json'
//头部导航栏数据
Mock.mock('/headmenus',{code:0, data: data.menus})

//获取所有图片轮播广告
const imgsList = data.datas.filter(item => item.type === "1" )
Mock.mock('/imgslist',{code:0, data:imgsList})

/*console.log(imgsList)*/
//获取column的图片 图标导航
const columnImgs = data.datas.filter(item => item.type === '3')
Mock.mock('/columnImgs',{code:0, data: columnImgs[0].menus})
/* console.log(columnImgs[0].menus)*/

// 通用广告模板 打折品牌
const adBrands = data.datas.filter(item => item.type === '13')
Mock.mock('/adBrands',{code: 0, data: adBrands})
/*console.log(adBrands)*/
// 分类的数据
// 名称
Mock.mock('/typesName',{code: 0, data: types.name})
// 列表
Mock.mock('/typesList',{code:0, data: types.list})
