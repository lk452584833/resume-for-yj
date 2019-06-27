import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/components/info/info'
import Skills from '@/components/skills/skills'
import Works from '@/components/works/works'
import Evaluate from '@/components/evaluate/evaluate'
Vue.use(VueRouter)

const routes = [
	{path: '/info', component: Info},
	{path: '/works', component: Works},
	{path: '/skills', component: Skills},
	{path: '/evaluate', component: Evaluate}
]

export default new VueRouter({
	routes: routes,
	// mode: 'history',
	linkActiveClass: 'active'
})
