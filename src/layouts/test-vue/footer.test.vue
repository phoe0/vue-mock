<template>
	<div id="app">

		<Header/>
		<h3>app</h3>
		<Footer/>
	</div>
</template>

<script>
	import Header from './header.vue'
	import Footer from './footer.vue'
	export default {
		name: 'App',
		data() {
			return {}
		},
		mounted() {},
		components: {
			// 注册组件
			Header,Footer
		},
		methods: {}
	}
</script>

<style>

</style>
