<template>
    <div class="wrap">
        <h1>iviewui--表格拉取数据</h1>
        <Table :columns="columns" :data="tabledata"></Table>
    </div>
</template>

<script>
    // 引包，拉取Ajax
    import axios from 'axios';
    export default {
        // 生命周期
        created () {
            // 书写Ajax，拉取数据
            axios.get('http://www.aiqianduan.com:56506/cars').then(data => {
                // 回调函数，要把服务器返回的数据设置为data中tabledata
                // 两个data是固定写法，因为data中还封装了服务器中一些其他的信息
                this.tabledata = data.data.results;
            });
        },
        data() {
            return {
                columns: [
                    {
                        title:'编号',
                        key:'id'
                    },
                    {
                        title:'品牌',
                        key:'brand'
                    },
                    {
                        title:'车系',
                        key:'series'
                    },
                    {
                        title:'颜色',
                        key:'color'
                    },
                    {
                        title:'排量',
                        key:'engine'
                    },
                    {
                        title:'尾气',
                        key:'exhaust'
                    },
                    {
                        title:'燃料',
                        key:'fuel'
                    }
                ],
                tabledata:[]
            }
        },
    }
</script>

<style lang="less" scoped>
    .wrap{
        width: 900px;
        margin: 40px auto;
        h1{
            width: 900px;
            height: 50px;
            text-align: center;
        }
    }
</style>