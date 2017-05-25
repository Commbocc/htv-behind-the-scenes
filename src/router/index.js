import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import ProjectsIndex from '@/components/projects/Index'
import ProjectsShow from '@/components/projects/Show'

Vue.use(Router)

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
			component: ProjectsShow
		},
		// {
		// 	path: '/cast-crew/:id',
		// 	name: 'CastCrewShow',
		// 	component: ProjectsIndex
		// },
		{ path: '*', component: ProjectsIndex }
	]
})
