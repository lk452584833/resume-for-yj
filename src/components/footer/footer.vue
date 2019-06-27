<template>
	<div class="footer">
		<h4 class="top">CALL ME</h4>
		<P class="tel"><a :href="tel" target="_blank">{{tel}}</a></P>
	</div>
</template>

<script>
	export default{
		props: ['tel']
	}
</script>

<style lang="less" scoped="">
	.footer{
		position: fixed;
		text-align: center;
		left: 50%;
		bottom:30px;
		width:290px;
		height:88px;
		border-radius: 44px;
		border: 2px solid #ffd345;
		margin-left:-145px;
		.top{
			color:#00ffb5;
			font-size: 30px;
			line-height: 48px;
			margin-top: 6px;
		}
		.tel{
			font-size: 24px;
			a{color:#383838;}
		}
	}
</style>
