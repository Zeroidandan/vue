<template>
    <div>
       <input type="text" v-model="title" @keydown.enter="addList">
       <button @click="addList">增加</button>
    </div>
</template>

<script>
    export default {
        props:['list'],
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addList() {
                this.list.push({'title':this.title,'done':false});
                this.title = '';
            }
        },
    }
</script>

<style lang="less" scoped>
    input{
        width: 250px;
        height: 30px;
        border:2px solid #ccc;
    }
    button{
        // 清除按钮样式css代码
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        // 
        margin-left: 20px;
        line-height: 25px;
        width: 50px;
        height: 36px;
        background-color: rgb(84, 127, 245);
        color: #fff;
    }
</style>