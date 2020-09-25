<template>
  <div id="app">
	  <h3>测试骨架屏</h3>
	  
	  <frame-screen v-if="list.length === 0"/>
	  
	  <div v-else>加载完之后的内容<br>{{list}}</div>
	</div>
</template>

<script>
	import FrameScreen from '../components/frame-screen/frame-screen.vue';
	export default {
	  name: 'App',
	  data(){
		  return {
			  list:[]
		  }
	  },
	  mounted() {
	  	setTimeout(()=>{
			this.list=[
				{_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
				{_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
				{_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
				{_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
			]
		},2000);
	  },
	  components: {
		  // 注册组件
		  FrameScreen
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
