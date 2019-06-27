<template>
	<div class="info">
		<div class="info-msg">
			<ul>
				<li class="info-msg-item"
				v-for="(msg, index) in info.basicMsg"
				:key="index"
				>
				<icon-maps class="icon" :className="`icon_`+index"></icon-maps>
				<span class="basisMsg">{{msg}}</span>
				</li>
			</ul>
		</div>
		<div class="more sex-age">
			<span class="sex color-gr">{{info.sex}}</span>
			<span class="age">{{info.age}}</span>
		</div>
		<div class="more work">
			<span class="work-title color-gr">WORK</span>
			<span class="work-years"><span class="bigger">{{info.workLongTime}}</span>year</span>
		</div>
	</div>
</template>

<script>
	import IconMaps from '@/components/IconMaps/IconMaps.vue'
	export default{
		components: {
			IconMaps
		},
		props: {
			info: {
				type: Object
			}
		},
		created() {
			this.classMap = ['icon_name', 'icon_city', 'icon_mail', 'icon_money']
		}
	}
</script>

<style lang="less">
	.info{
		position: relative;
		padding: 48px 48px 0;
		.color-gr{color:#00ffb5;}
		.info-msg-item{
			font-size: 0;
			margin-bottom: 50px;
			.icon{
				display: inline-block;
				width: 44px;
				height: 30px;
				margin-right: 36px;
				.icon_city{
					height: 40px;
					margin-top: -5px;
				}
			}
			.basisMsg{
				display: inline-block;
				font-size: 30px;
				line-height: 100%;
				color:#000;
			}
		}
		.more{
			position: absolute;
			&.sex-age{
				top: 56px;
				right: 110px;
				.sex{font-size: 22px;line-height: 32px;margin-right: 36px;}
				.age{font-size: 22px;line-height: 32px;color:#282828;}
			}
			&.work{
				top:130px;
				right: 44px;
				line-height: 100%;
				.work-title{
					margin-right: 36px;
				}
				.work-years{
					font-size: 22px;
					color:#282828;
					.bigger{
						position: relative;
						top: 6px;
						font-size: 66px;
						font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
					}
				}
			}
		}
	}
</style>
