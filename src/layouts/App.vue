<template>
	<div id="app">
		<loading v-show="$root.bLoading"/>
		<Header v-show="$root.bNav"/>
		<!-- <Home/> -->
		
		<!-- 展示区 -->
		<router-view/> 
		
		<Footer v-show="$root.bFoot"/>
		
	</div>
</template>

<script>
	import Header from './header.vue'
	import Footer from './footer.vue'
	// import Home from '../pages/home.vue
	import loading from '../components/loading/loading.vue'
	
	import Swipe from '../assets/js/swipe.js';
	import '../assets/js/jquery-1.7.2.js'; // src ~~~  window.$ | jQuery
	
	export default {
		name: 'App',
		data() {
			return {}
		},
		watch:{
			$route:{
				handler(newVal){
					let path = newVal.path;
					if(/home|follow|column/.test(path)){
						this.$root.bNav=true;
						this.$root.bFoot=true;
					}
					if(/user/.test(path)){
						this.$root.bNav=false;
						this.$root.bFoot=true;
					}
					if(/login|reg|detail/.test(path)){
						this.$root.bNav=false;
						this.$root.bFoot=false;
					}
				},
				immediate:true
			}
			
		},
		mounted() {
			// 需要先引入swiper和jquery
			// new Swipe($('.banner')[0], {
			//   auto: 2000,
			//   continuous: true,
			//   stopPropation: true,
			//   callback: function(index, element) {
			//     $('.banner ol li').removeClass('active');
			//     $('.banner ol li')
			//       .eq(index)
			//       .addClass('active');
			//   }
			// });
		},
		components: { 
			// 注册组件
			Header,Footer,loading
		},
		methods: {}
	}
</script>

<style>

</style>
