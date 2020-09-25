import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false


// 引入样式资源
// 引入的方式 取决于导出的方式;
import './assets/css/base.css';// ~~ src  引入css文件(基础css样式) 
import './assets/js/font.js';  //字体比值控制   字体按照屏幕的比例进行设置大小；


//引入路由配置
import router from './plugins/router.js';

//  引入拦截器
import './plugins/axios'

// 引入全局的过滤器
import './filters';     // 直接引入filters目录下的index.js文件；

let vm = new Vue({
  render: h => h(App),
  router,
  data:{
	  bNav:false,
	  bFoot:false,
	  bLoading:true
  }
}).$mount('#app');

// 导出vm 实例
export default vm;
