import {
	get
} from "./https.js"

export const getBanner = (obj) => get('/banner', obj) //轮播
export const getIndxIcon = (obj) => get('/homepage/dragon/ball', obj) //首页图标

export const getTJGD = (obj) => get('/personalized', obj) //推荐歌单
export const getTJGQ = (obj) => get('/personalized/newsong', obj) //推荐新音乐
export const getMV = (obj) => get('/personalized/mv', obj) //推荐MV
export const getDJ = (obj) => get('/personalized/djprogram', obj) // 推荐电台