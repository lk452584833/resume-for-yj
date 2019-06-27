// api 层，统一管理接口调用
import {get} from './axios.js'

// 挂载到vue原型上，暴露接口,main.js 引入。
// 全局使用:  this.$_axios.getWork().then()
export default {
	install(Vue, options) {
		Vue.prototype.$_axios = {
			getWork: function(data) {
				return get('/works', data)
			},
			getInfo: function(data) {
				return get('info', data)
			}
		}
	}
}
