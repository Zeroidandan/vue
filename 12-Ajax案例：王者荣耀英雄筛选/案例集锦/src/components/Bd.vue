<template>
    <div>
         <ul>
            <li v-for="(item,index) in list" :key="index">
                <div class="box">
                    <div class="box1">
                        <input type="checkbox" v-model="item.done">
                    </div>
                    <div class="box2"><Item :item="item"/></div>
                    <button @click="list.splice(index,1)">删除</button>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
    import Item from './Item.vue';
    export default {
        props:['list'],
        components:{
            Item,
        }
    }
</script>

<style lang="less" scoped>
    li{
        overflow: hidden;
        line-height: 30px;
    }
    .box1,.box2{
        float: left;
    }
    .box{
        width: 500px;
        height: 50px;
        background-color: rgb(175, 220, 250);
        border-bottom:5px solid #FFF;
        line-height: 50px;
    }
    button{
        float: right;
        // 清除按钮样式css代码
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        // 添加按钮样式
        line-height: 25px;
        width: 50px;
        background-color: rgb(84, 127, 245);
        color: #fff;
        text-align: center;
        line-height: 50px;
    }
</style>