<template>
	<div class="header">
		<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(image, index) in info.headImages" :key="index">
				<img v-lazy="image" alt="">
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default{
		props: {
			info: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="less">
	.van-swipe{
		height: 480px;
		.van-swipe-item {
			img{
				position: absolute;
				left:0;
				top:-20%;
				width: 100%;
				max-height: 150%;
			}
		}
		.van-swipe__indicators{
			left: 10%;
			bottom: 4%
		}
		.van-swipe__indicator{
			width: 10px;
			height:10px;
			&.van-swipe__indicator--active{
				width: 34px;
				border-radius: 10px;
				background-color: #fbdd77!important;
			}
		}
	}
</style>
