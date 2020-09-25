<template>
  <div id="app">
	  <h3>测试输入框</h3>
	  
	  <UcInput/>
	  <uc-input v-model="ipt" label="账 号"></uc-input>
	  <uc-input v-model="ipt2" type="password" label="密 码"></uc-input>
	 
  </div>
</template>

<script>
	import UcInput from '../components/uc-input/uc-input.vue';
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
		  UcInput
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
