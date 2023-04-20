<template>
	<view class="content"></view>
</template>

<script setup>
import { getBanner } from '../../api/apis.js';
import { onLoad } from '@dcloudio/uni-app';

onLoad(Option => {
	getBanner({ type: 1 }).then(res => {
		console.log(res);
	});
});
</script>

<style></style>
