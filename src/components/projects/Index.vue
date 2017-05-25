<template>
	<div class="projects-index">
		<h1>{{ title }}</h1>

		<div class="row">
			<div v-for="project in $store.state.projects" class="col-xs-6 col-sm-4 ">
				<router-link :to="{ name: 'ProjectsShow', params: { id: project.id }}" class="thumbnail">

					<img v-if="project.image" :src="project.image" :alt="project.title">
					<img v-else :src="`https://placehold.it/400x600?text=${project.title}`" :alt="project.title">

					<div class="caption">
						{{ project.title }}
					</div>

				</router-link>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'project-index',
	data () {
		return {
			title: 'Projects'
		}
	}
}
</script>

<style scoped>
h1 {
	margin-top: 0;
}
.thumbnail {
	position: relative;
	padding: 0;
	min-height: 100px;
}
.caption {
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(0,0,0, 0.75);
	width: 100%;
	color: #fff;
	padding: 15px 10px;
}
</style>
