import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import { store } from '../store'

// import Hello from '@/components/Hello'
import ProjectsIndex from '@/components/projects/Index'
import ProjectsShow from '@/components/projects/Show'


export default new Router({
	routes: [
		{
			path: '/projects',
			name: 'ProjectsIndex',
			component: ProjectsIndex
		},
		{
			path: '/projects/:id',
			name: 'ProjectsShow',
			component: ProjectsShow,
			beforeEnter: (to, from, next) => {
				if (!store.state.projects.length) {
					store.dispatch('fetchData').then(()=>{next()})
				} else { next() }
			}
		},
		// {
		// 	path: '/cast-crew/:id',
		// 	name: 'CastCrewShow',
		// 	component: ProjectsIndex
		// },
		{ path: '*', component: ProjectsIndex }
	]
})
