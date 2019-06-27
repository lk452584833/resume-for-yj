<template>
	<div>
		<span :class="classType" class="supports-icon"></span>
	</div>
</template>

<script>
	export default{
		props: {
			size: {
				type: Number,
				default: 1
			},
			className: {
				type: String,
				default: 'icon_name'
			}
		},
		computed: {
			classType() {
				return `${this.className} styl${this.size}`
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.supports-icon{
		display:block;width:100%;height:100%;background-repeat: no-repeat;background-size: 100% 100%;
		&.icon_name{background-image:url('../../common/images/icon_name@2x.png');}
		&.icon_city{background-image:url('../../common/images/icon_city@2x.png');}
		&.icon_mail{background-image:url('../../common/images/icon_mail@2x.png');}
		&.icon_money{background-image:url('../../common/images/icon_money@2x.png');}
		&.icon_down{background-image:url('../../common/images/icon_down@2x.png');}
		&.icon_up{background-image:url('../../common/images/icon_up@2x.png');}
	}
</style>
