<template>
  <div id="app">
	  <h3>测试导航</h3>
	  
	  <!-- <UcNav/> -->
	  <!-- <uc-nav/> -->
	  <uc-nav bg-color="transparent" :border-width="0" arrow="gray1"></uc-nav>
  </div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav.vue';
	export default {
	  name: 'App',
	  data(){
		  return {
			  ipt:'link',
			  ipt2:'k301'
		  }
	  },
	  components: {
		  // 注册组件
		  UcNav
	  },
	  methods:{
		  show(ev){
			  console.log(ev);
		  }
	  }
	}
</script>

<style>
	
</style>
