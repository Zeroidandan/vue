<template>
    <div>
        <input type="text" v-model="title" @keydown.enter="addLi">
        <button @click="addLi">增加</button>
    </div>
</template>

<script>
    export default {
        props:['arr'],
        data(){
            return{
                title:''
            }
        },
        methods:{
            addLi(){
                this.arr.push({'title':this.title,'done':false});
                this.title = '';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>