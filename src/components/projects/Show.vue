<template>
	<div class="projects-index">

		<h1>{{ title }}</h1>

		<!--  -->
		<div v-if="true" class="row">
			<div class="col-sm-3">
				<p>
					<a :href="image" :data-lightbox="title" :data-title="title">
						<img :src="image" :alt="title" class="img-responsive center-block">
					</a>
				</p>
				<p>
					<a :href="yt_link" target="_blank" class="btn btn-primary btn-sm btn-block">
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
							<dt v-if="runtime">Runtime</dt>
							<dd v-if="runtime">{{ runtime }}</dd>
							<dt v-if="created_at">Released</dt>
							<dd v-if="created_at">{{ created_at }}</dd>
						</dl>
					</div>
				</div>

				<div class="">
					{{ synopsis }}
				</div>

			</div>
		</div>

		<!--  -->
		<h3>Cast/Crew</h3>
		<div class="table-responsive">
			<table class="table table-striped table-condensed">
				<tbody>
					<tr v-for="cm in crew">
						<td>
							<img v-if="cm.person.avatar" :src="cm.person.avatar" :alt="cm.person.name" width="25">
							<span v-else class="glyphicon glyphicon-user" aria-hidden="true"></span>
						</td>
						<td>
							{{ cm.person.name }}
						</td>
						<td> ... </td>
						<td>
							{{ cm.role }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!--  -->
		<div class="row">
			<div class="col-sm-6">
				<h3>Photos</h3>
				<div class="row">
					<div v-for="n in 6" class="col-xs-4">
						<p>
							<a :href="'http://lorempixel.com/640/480/?'+(n+6)" data-lightbox="project-photos">
								<img :src="'http://lorempixel.com/160/120/?'+(n+6)" alt="" class="img-responsive">
							</a>
						</p>
					</div>
				</div>
			</div>
			<div class="col-sm-6">
				<h3>Videos</h3>
				<div class="row">
					<div v-for="n in 3" class="col-xs-4">
						<p>
							<a href="https://www.youtube.com/watch?v=RCn5xrAFh2Q" data-lightbox="project-videos">
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
export default {
	name: 'project-show',
	data () {
		// return this.$store.getters.projectById(this.$route.params.id)
		return {
			
		}
	},
	computed: {
		director () {
			return this.$store.getters.personById(this.director_id)
		},
		producer () {
			return this.$store.getters.personById(this.producer_id)
		},
		writer () {
			return this.$store.getters.personById(this.writer_id)
		},
		crew () {
			return this.$store.getters.rolesOfProject(this.$route.params.id).map( (role) => {
				return {
					person: this.$store.getters.personById(role.person_id),
					role: role.role
				}
			}).sort(function(a, b) {
				var x = a.person.name_last; var y = b.person.name_last
				return ((x < y) ? -1 : ((x > y) ? 1 : 0))
			})
		}
	}
}
</script>

<style scoped>
h1 {
	margin-top: 0;
}
</style>
