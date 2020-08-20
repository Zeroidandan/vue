// alert('webpack打包终于开始运行了');
import Vue from 'vue';
import App from './App.vue';

// vue起步语法
new Vue({
    el:'#app',
    render(h){
        return h(App);
    }
});