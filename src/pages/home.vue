<template>
	<div class="home  pd-top">
		<!-- 轮播图 -->
		<banner :data="banner" collectionName="banner" />
		<!-- 轮播图下面的内容 -->
		<div class="list">
			<uc-cell 
				 v-for="(item,index) of list "
				 :key="item._id"
				 :data="item"
				 :index="index" 
				 collectionName="home"
	    	>
			</uc-cell>
		</div>
	</div>
</template>

<script>
	import banner from '../components/banner/banner.vue'
	import UcCell from '../components/uc-cell/uc-cell.vue'
	

	import axios from 'axios';
	export default {
		name: 'home',
		props: {},
		data() {
			return {
				banner:[
				  // {_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
				  // {_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
				  // {_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
				  // {_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
				],
				list:[
					// {_id:1,title:'hahaha1',des:'xxoo'},
					// {_id:2,title:'hahaha2',des:'xxoo'},
					// {_id:3,title:'hahaha3',des:'xxoo'},
					// {_id:4,title:'hahaha4',des:'xxoo'},
					// {_id:5,title:'hahaha5',des:'xxoo'},
				]
			}
		},
		components: {
			banner,UcCell
		},
		mounted() {
			
			// 获取banner图下面列表的数据
			axios({
				// url:' http://localhost:3333/api/home'
				url:'/api/home',
				params:{_limit:20,_page:1}
			}).then(
			   res => {
				   this.list = res.data.data;
			   }
			)
			
			
			// 获取banner图的数据
			axios({
				url:'/api/banner',
				params:{_limit:4,_page:1}
			}).then(
				res =>　{
					// console.log(res);
					this.banner = res.data.data;
				}
			)
		},
		updated() {},
		methods: {}
	}
</script>

<style>
	.home {}
	.list{
	  padding: 0 0.34rem;
	}
</style>
