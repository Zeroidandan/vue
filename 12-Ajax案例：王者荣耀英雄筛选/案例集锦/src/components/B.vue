<template>
    <div>   
        <button @click="$emit('goUp')" :disabled="idx==1">上一张</button>
        <img :src="`/images/${star}/${idx}.jpg`" alt="">
        <button @click="$emit('goNext')" :disabled="idx==4">下一张</button>

    </div>
</template>

<script>
    export default {
        props:['star','idx'],
    }
</script>

<style lang="less" scoped>
    img{
        width: 300px;
        height: 250px;
    }
</style>