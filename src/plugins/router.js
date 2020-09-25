import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);



import Home from '../pages/home.vue';
import Follow from '../pages/follow.vue';
import Column from '../pages/column.vue';
import Detail from '../pages/detail.vue';
import Reg from '../pages/reg.vue';
import Login from '../pages/login.vue';
import User from '../pages/user.vue';
import NoPage from '../pages/no-page.vue';


let routes = [
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column},
 /* {path:'/detail',component:Detail,children:[
	  {path:':id',component:Detail}  // 子路由会在`二级展示区`展示
  ]}, */ 
  {path:'/detail/:_id',component:Detail,name:'detail'},  // 子路由的另一种方式
  // 子路由只能在 `一级展示区展示`
  
  {path:'/reg',component:Reg},
  {path:'/login',component:Login},
  {path:'/user',component:User},
  {path:'/',redirect:'/home'},  // 重定向
  {path:'*',component:NoPage},
];

let router = new VueRouter({
  routes
});

export default router;