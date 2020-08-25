<template>
    <div>
        <h5>亲爱的用户，一共{{arr.length}}项，已完成{{zuowan}}项，未完成{{meizuo}}项</h5>
    </div>
</template>

<script>
    export default {
        props:['arr'],
        // 表示计算后的数据
        // 根据peops或者data进行一些计算，就要写在computed中
        computed:{
            zuowan(){
                return this.arr.filter(item => item.done).length;
            },
            meizuo(){
                return this.arr.filter(item => !item.done).length;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>