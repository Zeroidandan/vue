<template>
    <div>
        <img v-for="i in 4" :key="i" :class="{'cur':i==idx}" @mouseenter="$emit('changeIdx',{'idx':i})" :src="`/images/${star}/${i}.jpg`" alt="">
    </div>
</template>

<script>
    export default {
        props:['star','idx'],
        
    }
</script>

<style lang="less" scoped>
    img{
        width: 100px;
        height: 60px;
        margin-top: 20px;
        margin-right: 5px;  
        &.cur{
            border: 4px solid #333;
        }
    }
</style>