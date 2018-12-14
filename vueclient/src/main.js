// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';//引入axios组件
axios.defaults.withCredentials=true;  //跨域保存session有用
axios.defaults.baseURL = "http://localhost:3000"; //打包的时候直接删掉，默认基础路径在这里配置
//将 axios 赋值给 Vue，方便在子组件里面使用
Vue.prototype.$reqs = axios;

Vue.config.productionTip = true//原来是false

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.data.err){
    alert(response.data.err);
    return Promise.reject(response);
  }else if(response.data.redirect){
    alert("请先登录..");
    window.location.href = "#/"; //跳转到登录页
    return Promise.reject(response);
  }else{
    //返回response继续执行后面的操作
    return response;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
