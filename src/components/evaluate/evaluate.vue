<template>
	<div class="evaluate">
		<ul class="items">
			<li class="item clearfix"
			v-for="(item, index) in info.selfs"
			:key="index"
			>
				<span class="span num">{{index+1}}.</span>
				<span class="span des">{{item}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props: {
			info: {
				type: Object
			}
		}
	}
</script>

<style lang="less">
	.evaluate{
		padding: 48px 56px;box-sizing: border-box;
		.items{
			.item{
				margin-bottom: 40px;display: flex;
			}
			.span{
				&.num{
					flex: 0 1 auto;
					margin-top: 4px;
					margin-right: 20px;
					width:36px;
					height:36px;
					line-height: 36px;
					border-radius: 6px;
					border: 2px solid #ffdc6c;
					color:#242424;
					text-align: center;
				}
				&.des{
					flex: 1 1 auto;
					box-sizing: border-box;
					width: 570px;
					padding: 4px 10px;
					border: 2px solid #00ffbe;
					border-radius: 10px;
					line-height: 36px;
					font-size: 24px;
				}
			}
		}
	}
</style>
