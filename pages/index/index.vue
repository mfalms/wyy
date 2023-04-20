<template>
	<view class="content">
		<view class="banner">
			<swiper :autoplay="true" :interval="3000" :duration="1000" circular>
				<swiper-item v-for="it in bannerList">
					<view class="swiper-item"><image :src="it.pic" mode=""></image></view>
				</swiper-item>
			</swiper>
		</view>

		<view class="fandIcon">
			<scroll-view scroll-x="true" class="mk">
				<view v-for="it in fandIconList" class="item">
					<view class="imgbox"><image :src="it.iconUrl" mode=""></image></view>
					<view class="">{{ it.name }}</view>
				</view>
			</scroll-view>
		</view>

		<view class="tit_min">推荐歌单</view>
		<view class="tit_max">
			<view class="left">为你精挑细选</view>
			<view class="right">查看更多</view>
		</view>
		<view class="cont">
			<view class="item" v-for="it in TJGDlist">
				<image :src="it.picUrl" mode=""></image>
				<view class="text">{{ it.name }}</view>
			</view>
		</view>

		<view class="tit_min">{{ getYMD() }}</view>
		<view class="tit_max">
			<view class="left">新歌</view>
			<view class="right">查看更多</view>
		</view>
		<view class="cont-y">
			<view class="item" v-for="it in TJGQlist">
				<image :src="it.picUrl" mode=""></image>
				<view class="name">{{ it.name }}--{{ it.song.artists[0].name }}</view>
				<view class="icon"><image src="../../static/播放2.png" mode=""></image></view>
			</view>
		</view>

		<view class="tit_min">推荐MV</view>
		<view class="tit_max">
			<view class="left">为你精挑细选</view>
			<view class="right">查看更多</view>
		</view>
		<view class="cont">
			<view class="item" v-for="it in TJMVlist">
				<image :src="it.picUrl" mode=""></image>
				<view class="text">{{ it.copywriter }}</view>
			</view>
		</view>
		<view class="tit_min">推荐电台</view>
		<view class="tit_max">
			<view class="left">为你精挑细选</view>
			<view class="right">查看更多</view>
		</view>
		<view class="cont">
			<view class="item" v-for="(it, i) in TJDTlist">
				<template v-if="i < 3">
					<image :src="it.picUrl" mode=""></image>
					<view class="text">{{ it.name }}</view>
				</template>
			</view>
		</view>
		<view class="last">没有啦 ~</view>
	</view>
</template>

<script setup>
import { getBanner, getIndxIcon, getTJGD, getTJGQ, getMV, getDJ } from '../../api/apis.js';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

let bannerList = ref([]); //banner列表
let fandIconList = ref([]); //发现图标入口图

let TJGDlist = ref([]); //推荐歌单
let TJGQlist = ref([]); //推荐歌曲
let TJMVlist = ref([]); //推荐MV
let TJDTlist = ref([]); //推荐电台

let getData = () => {
	getBanner({ type: 1 }).then(res => {
		// console.log(res.banners, 'banner');
		bannerList.value = res.banners;
	});
	getIndxIcon({}).then(res => {
		// console.log(res.data, 'icon');
		fandIconList.value = res.data;
	});
	// 推荐歌单
	getTJGD({ limit: 3 }).then(res => {
		// console.log(res.result, '推荐歌单');
		TJGDlist.value = res.result;
	});
	//推荐歌曲
	getTJGQ({ limit: 3 }).then(res => {
		// console.log(res.result, '推荐歌曲');
		TJGQlist.value = res.result;
	});
	// 推荐MV
	getMV({}).then(res => {
		// console.log(res, '推荐MV');
		TJMVlist.value = res.result;
	});
	// DJ
	getDJ({}).then(res => {
		console.log(res);
		TJDTlist.value = res.result;
	});
};

// 获取时间
const getYMD = () => {
	let myDate = new Date();
	let myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	let myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
	let myToday = myDate.getDate(); //获取当前日(1-31)
	myMonth = myMonth > 9 ? myMonth : '0' + myMonth;
	myToday = myToday > 9 ? myToday : '0' + myToday;
	let nowDate = `${myMonth}月${myToday}日`;
	return nowDate;
};
console.log(getYMD());
onLoad(Option => {
	getData();
});
</script>

<style lang="scss">
@import './index.scss';
</style>
