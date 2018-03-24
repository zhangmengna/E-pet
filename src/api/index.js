/*
* 当前项目接口ajax请求模块
*/
import ajax from './ajax'

//头部导航菜单
export const reqHeadMenus = () => ajax('/headmenus')
// 内容区所有静态图
export const reqImgsList = () => ajax('/imgslist')
// 八个小图标图片
export const reqColumnImgs = () => ajax('/columnImgs')

//主页打折广告牌
export const reqAdBrands = () => ajax('/adBrands')
// 分类名称  列表
export const reqTypesName = () => ajax('/typesName')
export const reqTypesList = () => ajax('/typesList')

export const reqClassBrands = () => ajax('/getClassBrands')
// 获取所有品牌
export const reqAllBrands = () => ajax('/getAllBrands')
