<template>
  <div id="app">
    <v-header :info="info"></v-header>
		<div class="tab">
			<div class="tab-item"><router-link to="/info">基本信息</router-link></div>
			<div class="tab-item"><router-link to="/skills">专业技能</router-link></div>
			<div class="tab-item"><router-link to="/works">工作经历</router-link></div>
			<div class="tab-item"><router-link to="/evaluate">自我评价</router-link></div>
		</div>
		<keep-alive>
			<router-view :info="info"></router-view>
		</keep-alive>
	<v-footer :tel="info.tel"></v-footer>
  </div>
</template>

<script>
import vheader from './components/header/header.vue'
import vfooter from './components/footer/footer.vue'
const ERRO_OK = 0
export default {
  name: 'App',
	components: {
	'v-header': vheader,
	'v-footer': vfooter
	},
	data() {
		return {
			info: {}
		}
	},
	mounted() {
		this.$nextTick(function() {
			this.$_axios.getInfo().then((response) => {
				if (response.errno === ERRO_OK) {
					this.info = response.data
				}
			})
		})
	}
}
</script>

<style lang="less">
html,body{
	touch-action: none;
	font-style: normal;
	font-weight: 200;
}
#app {
  .tab{
		display: flex;width:100%;.border-1px(rgba(7,17,27,0.1));height:100px;line-height:100px;
		.tab-item{
			flex:1;text-align: center;
			a{
				display: block;font-size: 26px;color:#333;;
				&.active{
					position: relative;font-size: 30px;font-weight: bold;
					&:after{
						content: '';position: absolute;left: 50%;bottom: -3px;z-index: 10;margin-left:-40px;width: 80px;height: 6px;border-radius: 3px;background: #fbdd77;
					}
				}
			}
		}
	}
}
</style>
