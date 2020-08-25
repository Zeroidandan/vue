<template>
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <div class="check">
                    <input type="checkbox" v-model="item.done">
                </div>
                <div class="list">
                    <Item :item="item"/>
                </div>
                <button @click="arr.splice(index,1)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import Item from './Item.vue';
    export default {
        props:['arr'],
        components:{
            Item,
        }
    }
</script>

<style lang="less" scoped>
    li{
        overflow: hidden;
        margin-top: 10px;
    }
    .check{
        float: left;
    }
    .list{
        float: left;
        margin-right: 10px;
    }
    button{
        float: left;
    }
</style>