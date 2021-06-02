<template>
    <div>
        <!-- 调用computed，不能加圆括号 -->
        <h4>亲爱的用户，您已经做完{{finished}}项，<span>未完成的有{{mei}}项</span></h4>
    </div>
</template>

<script>
    export default {
        props:['list'],
        // 什么时候用computed，根据props或者data进行一些相关计算，那么就要写在computed中。
        // 注意computed中定义函数，但是使用的时候，不能家圆括号。
        computed: {
            // 定义computed，实际上是定义函数
            finished() {
                return this.list.filter(item => item.done).length;
            },
            mei(){
                return this.list.filter(item => !item.done).length;
            }

        },
    }
</script>

<style lang="less" scoped>
    span{
        color: red;
    }
</style>