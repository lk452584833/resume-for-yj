<template>
	<div class="works">
		<ul>
			<li class="item"
			v-for="(work,index) in works"
			:key="index"
			@click="toggleContent(index)"
			>
				<div class="item-content">
					<div class="time">
						<span class="starTime">{{work.starTime | timeChange}}</span>-<span class="endTime">{{work.endTime | timeChange}}</span>
					</div>
					<div class="company">
						{{work.name}}
						<icon-maps class="icon" :className="iconName(index)"></icon-maps>
					</div>
				</div>
				<div class="item-more" v-show="showMores[index]">
					<div class="skill-item">
						<span class="name">职<span class="hiden">职务</span>务</span>
						<span class="icon-center">/</span>
						<span class="msg">{{work.web}}</span>
					</div>
					<div class="skill-item major clearfix">
						<span class="name">岗位职责</span>
						<span class="icon-center">/</span>
						<span class="items">
							<span class="item" v-for="(duty, index) in work.dutys"
							:key="index"
							>{{duty}}</span>
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import formatDate from '../../common/js/data.js'
	import IconMaps from '../IconMaps/IconMaps.vue'
	const ERRO_OK = 0
	const ICON_UP = 'icon_up'
	const ICON_DOWN = 'icon_down'
	export default{
		components: {
			IconMaps
		},
		filters: {
			timeChange(time) {
				let date = new Date(time)
				return formatDate(date, 'yyyy-MM')
			}
		},
		data() {
			return {
				works: {},
				showMores: []
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.$_axios.getWork().then((response) => {
					if (response.errno === ERRO_OK) {
						this.works = response.data
						this.works.forEach((e) => {
							this.showMores.push(false)
						})
					}
				})
			})
		},
		methods: {
			toggleContent(index) {
				let back = !this.showMores[index]
				let had = this.showMores.filter(e => {
					return e === true
				})
				if (had && had.length > 0) {
					this.showMores = this.showMores.map(e => {
						e = false
					})
				}
				this.showMores.splice(index, 1, back)
			},
			iconName(index) {
				return this.showMores[index] ? ICON_UP : ICON_DOWN
			}
		}
	}
</script>

<style lang="less">
	.works{
		padding: 44px 56px;
		.item{
			position: relative;margin-bottom: 30px;
			.item-content{
				display: flex;
				.time{flex:0 1 auto;padding: 0 10px;color:#00ffbe;font-size: 24px;line-height: 50px;}
				.company{
					flex: 1;
					position: relative;
					box-sizing: border-box;
					text-indent: 24px;
					line-height: 50px;
					border: 2px solid #ffdc6c;
					color:#313131;
					border-radius: 8px;
					font-size: 26px;
					.icon{
						float: right;
						margin-right: 16px;
						margin-top: 18px;
						width: 20px;
						height: 12px;
					}
				}
			}
			.item-more{
				position: absolute;
				top: 56px;
				left:0;
				width: 100%;
				box-sizing: border-box;
				padding: 20px 22px;
				z-index: 100;
				background-color: #fff;
				border: 2px solid #ffdc6c;
				border-radius: 10px;
			}
			.skill-item{
				margin-bottom:30px;
				&:last-child{margin-bottom: 0;}
				.icon-center{font-size: 16px;color:#8f8f8f;line-height: 26px;margin:0 14px;}
				span{display: inline-block;font-size: 26px;line-height: 26px;color:#262626;}
				.hiden{visibility: hidden;}
				.graduateTime{margin-left:14px;color:#515151;font-size: 22px;}
				.items{
					float: left;
					.item{
						flex:1;margin-bottom:10px; color:#3b3b3b;text-align: left;line-height: 40px;
					}
				}
				&.major{
					display: flex;
					.name{
						flex: 0 1 auto;
						min-width: 110px;
					}
					.icon-center{
						flex: 0 1 auto;
					}
					.items{
						flex: 1 1 auto;
					}
				}
			}
		}
	}
</style>
