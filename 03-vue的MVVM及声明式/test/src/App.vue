<template>
    <div>
        <h1>Vue 学习之路</h1>
        <h1>{{a}}</h1>
        <button @click="add(1)">按我+1</button>
        <button @click="add(2)">按我+2</button>
        <button @click="cut">按我-1</button>
        <p>
            <img :src="`/images/a${b}.jpg`" alt="">
            <img :src="'/images/a' + b + '.jpg'" alt="">
        </p>
        <button @click="uppic" :disabled="b==1">上一张</button>
        <button @click="nextpic" :disabled="b==3">下一张</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                a: 0,
                b: 2
            }
        },
        methods:{
            add(n){
                this.a += n;
            },
            cut(){
                this.a--;
            },
            nextpic(){
                this.b++;
            },
            uppic(){
                this.b--;
            }
        }
    }
</script>

<style lang="less" scoped>
    h1{
        color: pink;
    }
    img{
        width: 200px;
        height: 400px;
    }
</style>