<template>
	<div id="app">

		<Header/>
		<h3>app</h3>
	</div>
</template>

<script>
	import Header from './header.vue'
	export default {
		name: 'App',
		data() {
			return {}
		},
		mounted() {},
		components: {
			// 注册组件
			Header
		},
		methods: {}
	}
</script>

<style>

</style>
