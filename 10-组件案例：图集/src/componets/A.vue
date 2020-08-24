<template>
    <div>
        <button v-for="(v,k) in  info" :key="k" @click="$emit('changeStar',{star:k})" :class="{'cur':star == k}">
            {{v}}
        </button>
    </div>
</template>

<script>
    export default {
        props:['star','idx'],
        data(){
            return{
                info:{
                    'foods':'美食',
                    'weishi':'360卫士',
                    'aiqiyi':'爱奇艺'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    button{
        width: 70px;
        height: 30px;
        margin: 5px;
        border: none;
        &.cur{
            background-color: tomato;
            border: none;
        }
    }
</style>