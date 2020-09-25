<template>
  <div class="banner">
     <ul class="clearfix">
		 <router-link 
			  tag="li"
			  v-for="(item,index) of data"
			  :key="item._id"
			  :to="{name:'detail',params:{_id:item._id},query:{collectionName}}"
		 >
			 <!-- 背景图片 -->
			 <img :src="item.banner" alt=""/>
			 <div class="text-box">
				 <h2>{{ item.title }}</h2>
				 <p>{{ item.sub_title }}</p>
			 </div>
		 </router-link>
	 </ul>
  </div>
</template>

<script>
	import Swipe from './js/swipe.js';
	import './js/jquery-1.7.2.js'; // src ~~~  window.$ | jQuery
	
  export default {
    name:'banner',
    props:{
		//[{_id:xx,image:xx,title:xx,sub_title:xx}]
		data:{  // 传过来的轮播图信息，包括 id、图片地址、标题、副标题
			type:Array,
			required:true
		},
		collectionName:{
			type:String,
			required:true
		}
	},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){
		// 如果当前的数据长度不为0, 则进行加载轮播图;
		this.data.length !==0 && this.initSwiper();
	},
    updated(){
		// 等页面传过来数据之后，再进行加载轮播图;
		this.initSwiper();
	},
    methods:{
		//  加载轮播图的方法；
		initSwiper(){
			
			// 放到 pages/home.vue文件中；(因为首页用到了轮播图)
		  new Swipe($('.banner')[0], {
		    auto: 2000,
		    continuous: true,
		    stopPropation: true,
		    callback: function(index, element) {
		      $('.banner ol li').removeClass('active');
		      $('.banner ol li')
		        .eq(index)
		        .addClass('active');
		    }
		  });
		}
	}
  }
</script>

<style scoped>
   .banner{overflow: hidden;}
   .banner ul li {
     position: relative;
     overflow: hidden;
     z-index: 1;
     width: 6.4rem;
     float: left;
   }
   .banner ul li img {
     width: 100%;
     display: block;
   }
   .banner ul li .text-box {
     width: 5.8rem;
     padding: 0 0.3rem;
     height: 1.24rem;
     position: absolute;
     left: 0;
     bottom: 0;
     color: #fff;
     background: rgba(0, 0, 0, 0.5);
   }
   .text-box h2 {
     font-size: 0.3rem;
     font-weight: normal;
     margin-top: 0.22rem;
     line-height: 100%;
     margin-bottom: 0.22rem;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
   }
   .text-box p {
     line-height: 100%;
   }
   
   .banner ol {
     position: absolute;
     right: 0.2rem;
     bottom: 0.2rem;
   }
   .banner ol li {
     width: 0.15rem;
     height: 0.15rem;
     background: #5477b2;
     float: left;
     border-radius: 50%;
     margin-right: 0.08rem;
   }
   .banner ol li.active {
     background: #fff;
   }
</style>
