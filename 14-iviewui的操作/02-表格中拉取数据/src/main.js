// alert('webpack打包终于开始运行了');
import Vue from 'vue';
import App from './App.vue';
import iviewui from 'view-design';

// 使用插件，use()方法
Vue.use(iviewui);

// vue起步语法
new Vue({
    el:'#app',
    render(h){
        return h(App);
    }
});