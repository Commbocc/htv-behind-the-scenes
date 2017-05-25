import Vue from 'vue'
import Vuex from 'vuex'

import _ from 'underscore'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		api_version: 'v4',
		api_key: 'AIzaSyBNQ8YKnvfFy3ZWyWzAte2_Cln0qLu8o2U',
		spreadsheet_id: '1KdXxqGViSxUP9oviwE9gCpZE69GjN6kZp14QHQf9DbU',

		ranges: [
			// pagination could be used: {... range: `Projects!A${offset}:M${offset+limit}`}
			{key: 'projects', range: 'Projects!A:ZZ'},
			{key: 'people', range: 'People!A:ZZ'},
			{key: 'roles', range: 'Roles!A:ZZ'},
			{key: 'photos', range: 'Photos!A:ZZ'},
			{key: 'videos', range: 'Videos!A:ZZ'},
		],

		projects: [],
		people: [],
		roles: [],
		photos: [],
		videos: [],

	},
	actions: {
		fetchData (context) {
			var ranges = context.state.ranges.map(r => `ranges=${r.range}`).join('&')
			var url = `https://sheets.googleapis.com/${context.state.api_version}/spreadsheets/${context.state.spreadsheet_id}/values:batchGet?${ranges}&key=${context.state.api_key}`
			return Vue.http.get(url).then(response => {
				// console.log(response.body)
				context.commit('setData', response.body.valueRanges)
			}, error => {
				console.error(error)
			})
		}
	},
	mutations: {
		setData: (state, data) => {
			data.map(vr => {
				var regex = /(.*?)\!/g
				var rangeObj = state.ranges.find( _r => _r.range.match(regex)[0] === vr.range.match(regex)[0] )
				var range_data = []
				for (var i = 1; i < vr.values.length; i++) {
					range_data.push(_.object(vr.values[0], vr.values[i]))
				}
				Vue.set(state, rangeObj.key, range_data)
			})
		}
	},
	getters: {
		projectById: (state, getters) => (id) => {
			return state.projects.find(p => parseInt(p.id) === parseInt(id))
		},
		personById: (state, getters) => (id) => {
			return state.people.find(p => parseInt(p.id) === parseInt(id))
		},
		rolesOfProject: (state, getters) => (project_id) => {
			return state.roles.filter( r => {
				return parseInt(r.project_id) === parseInt(project_id)
			})
		},
		photosOfProject: (state, getters) => (project_id) => {
			return state.photos.filter( p => {
				return parseInt(p.project_id) === parseInt(project_id)
			})
		}
	}
})
