<template>
	<div id="app">
		<!-- <pre>{{ $store.state.roles }}</pre> -->
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
	beforeCreate () {
		this.$store.dispatch('fetchData')
	}
}
</script>
