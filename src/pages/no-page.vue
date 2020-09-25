<template>
	<div class="no-page">
		<h3>404</h3>
		<h3>Not Found</h3>
		<router-link to="/home">回到首页</router-link>
	</div>
</template>

<script>
	export default {
		name: 'no-page',
		props: {},
		data() {
			return {}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style>
	.no-page { padding-top: 60px;text-align: center;}
</style>
