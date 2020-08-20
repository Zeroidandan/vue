<template>
    <div>
        <input type="text" ref="kuang">
        <button @click="addli">按我添加</button>
        <ul>
            <li v-for="(item,index) in arr" :key="index">{{index}} - {{item}}
                <button @click="delli(index)">删除</button>
            </li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr: [11, 22, 33, 44, 55, 66, 77, 88],
            };
        },
        methods:{
            addli(){
                var value = this.$refs.kuang.value;
                this.arr.push(value);
            },
            delli(n){
                this.arr.splice(n,1);
            }
        }
    };
</script>

<style lang="less" scoped>

</style>