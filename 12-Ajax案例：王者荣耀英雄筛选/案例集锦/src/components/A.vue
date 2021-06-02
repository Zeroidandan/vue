<template>
    <div>
        <div class="btn">
            <button v-for="(v,k) in info" :key="k" :class="{'cur':star==k}" @click="$emit('changeStar',{star:k})">{{v}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        props:['star','idx'],
        data() {
            return {
                info: {
                    aiqiyi:'爱奇艺',
                    foods:'美食',
                    weishi:'360卫士'
                }
            }
        },
        
    }
</script>

<style lang="less" scoped>
    .btn{
        width: 300px;
        height: 50px;
        line-height: 50px;
        margin-left: 100px;
        button{
            margin-right: 20px;
            &.cur{
                border: 2px solid black;
            }
        }
        
    }
</style>