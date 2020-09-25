<template>
  <div class="uc-button">
	  <button  class="login-btn"  :style="{ background:bgColor}" @click="$emit('click',$event)"  >
	  
	  <!-- 给按钮绑定原生的点击事件，并事件传递给父元素 -->
		  <template v-if="text !== '按 钮'">
			  {{text}}
		  </template>
		  <slot v-if="text === '按 钮'">默认按钮</slot>
	  </button>
  </div>
</template>

<script>
  export default {
    name:'uc-button',
    props:{
		text:{   // 按钮显示的文本
			type:String,
			default:'按 钮'
		},
		bgColor:{   // 按钮的背景颜色
			type:String,
			default:'#4C4F50'
		}
	},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .uc-button{}
  .login-btn {
    width: 4.65rem;
    height: 0.65rem;
    background: #4c4f50;
    color: #fff;
    text-align: center;
    line-height: 0.65rem;
    border-radius: 8px;
    display: block;
    /* margin-top: 0.62rem; */
    font-size: 0.28rem;
    border:none;
    outline: none;
  }
</style>
