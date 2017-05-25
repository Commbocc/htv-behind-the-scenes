<template>
	<tbody>
		<tr v-for="cm in members">
			<td class="cast-thumb-cell" width="1">
				<div v-if="cm.person.headshot" class="embed-responsive embed-responsive-4by3">
					<a :href="cm.person.headshot" :data-lightbox="cm.person.headshot" :data-title="cm.person.name" class="img-responsive center-block">
						<img :src="cm.person.headshot" :alt="cm.person.name">
					</a>
				</div>
				<span v-else class="glyphicon glyphicon-user" aria-hidden="true"></span>
			</td>
			<td>
				{{ cm.person.name }}
			</td>
			<td> ... </td>
			<td>
				{{ cm.role.role }}
			</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: ['members']
}
</script>

<style scoped>
tbody {
	border-top: solid 3px #bbb !important;
}
.cast-thumb-cell {
	padding: 3px 0;

}
.cast-thumb-cell > .embed-responsive {
	width: 35px;
	height: 35px;
	padding: 0;
}
.cast-thumb-cell img {
	max-height: 100%;
	max-width: 100%;
}
.cast-thumb-cell > span {
	padding: 10px;
}
</style>
