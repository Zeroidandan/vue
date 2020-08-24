<template>
    <div>
        <img v-for="i in 4" :key="i" :src="`/images/${star}/${i}.jpg`" alt="" :class="{'cur' : idx == i}" @mouseenter="$emit('changeIdx',{'idx':i})">
    </div>
</template>

<script>
    export default {
        props:['star','idx'],
    }
</script>

<style lang="less" scoped>
    img{
        width: 50px;
        height: 70px;
        margin: 10px 2px;
        &.cur{
            border: 2px solid yellow;
        }
    }
</style>