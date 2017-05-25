<template>
	<div class="projects-index">

		<h1>{{ project.title }}</h1>

		<!--  -->
		<div v-if="true" class="row">
			<div class="col-sm-3">
				<p>
					<a :href="project.image" data-lightbox="project-photos" :data-title="project.title">
						<img :src="project.image" :alt="project.title" class="img-responsive center-block">
					</a>
				</p>
				<p>
					<a :href="project.yt_link" target="_blank" class="btn btn-primary btn-sm btn-block">
						Play Video
					</a>
				</p>
			</div>
			<div class="col-sm-9">
				<div class="row">
					<div class="col-xs-6">
						<dl>
							<dt v-if="director">Director</dt>
							<dd v-if="director">
								{{ director.name }}
							</dd>
							<dt v-if="producer">Producer</dt>
							<dd v-if="producer">
								{{ producer.name }}
							</dd>
							<dt v-if="writer">Writer</dt>
							<dd v-if="writer">
								{{ writer.name }}
							</dd>
						</dl>
					</div>
					<div class="col-xs-6">
						<dl>
							<dt v-if="project.released">Released</dt>
							<dd v-if="project.released">{{ project.released }}</dd>
							<dt v-if="project.runtime">Runtime</dt>
							<dd v-if="project.runtime">{{ project.runtime }}</dd>
						</dl>
					</div>
				</div>

				<div class="">
					{{ project.synopsis }}
				</div>

			</div>
		</div>

		<!--  -->
		<h3>Cast &amp; Crew</h3>
		<div class="table-responsive">
			<table class="table table-striped">

				<cc-table-body :members="cast"></cc-table-body>
				<cc-table-body v-if="show_crew" :members="crew"></cc-table-body>

				<a href="#" @click.prevent="show_crew = !show_crew" class="btn btn-text btn-xs">
					<span v-if="show_crew">Hide</span>
					<span v-else>Show</span>
					Crew
				</a>
			</table>
		</div>


		<!--  -->
		<div class="row">
			<div v-if="photos.length > 0" class="col-sm-6">
				<h3>Photos</h3>
				<div class="row">
					<div v-for="photo in photos" class="col-xs-4">
						<p class="embed-responsive embed-responsive-4by3">
							<a :href="photo.image" data-lightbox="project-photos" :data-title="photo.title">
								<img :src="photo.image" :alt="photo.title" class="img-responsive">
							</a>
						</p>
					</div>
				</div>
			</div>

			<div v-if="videos.length > 0" class="col-sm-6">
				<h3>Videos</h3>
				<div class="row">
					<div v-for="n in 3" class="col-xs-4">
						<p>
							<a href="#" data-lightbox="project-videos">
								<img :src="'http://lorempixel.com/160/120/?'+n" alt="" class="img-responsive">
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import CcTableBody from '@/components/cast_crew/TableBody'

export default {
	name: 'project-show',
	components: {
		'cc-table-body': CcTableBody
	},
	data () {
		return {
			project: this.$store.getters.projectById(this.$route.params.id),
			show_crew: false
		}
	},
	computed: {
		director () {
			return this.$store.getters.personById(this.project.director_id)
		},
		producer () {
			return this.$store.getters.personById(this.project.producer_id)
		},
		writer () {
			return this.$store.getters.personById(this.project.writer_id)
		},
		castAndCrew () {
			return this.$store.getters.rolesOfProject(this.$route.params.id).map( (role) => {
				return {
					person: this.$store.getters.personById(role.person_id),
					role: role
				}
			}).sort(this.sortFunction)
		},
		cast () {
			return this.castAndCrew.filter(c => c.role.is_crew === "FALSE")
		},
		crew () {
			return this.castAndCrew.filter(c => c.role.is_crew === "TRUE")
		},
		photos () {
			return this.$store.getters.photosOfProject(this.$route.params.id)
		},
		videos () {
			// return this.$store.getters.videossOfProject(this.$route.params.id)
			return []
		},
	},
	methods: {
		sortFunction (a,b) {
			var x = a.person.name_last; var y = b.person.name_last
			return ((x < y) ? -1 : ((x > y) ? 1 : 0))
		}
	}
}
</script>

<style scoped>
h1 {
	margin-top: 0;
}
</style>
