<template>
    <div>
        <h4>组件Test</h4>
        <p>
            组件自己的值A是：{{a}}；&nbsp;&nbsp;
            接收B的值是：{{b}}；&nbsp;&nbsp;
            接收引用类型C的值是：{{c}}；
        </p>
        <p>
            <button @click="a++">A+1</button>
            <button @click="addB">B+5</button>
            <button @click="c.v+=10">C+10</button>
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                a:0
            }
        },
        props: ['b', 'c'],
        methods:{
            addB(){
                this.$emit('addB',{n:5});
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>