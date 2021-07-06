<template>
    <div class="warp">
        <h2>汽车筛选器</h2>
        <Table :columns="columns1" :data="data1"></Table>
        <div class="pagebox">
            <Page :total="total" :current="current" :page-size="10" @on-change="changePage"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        created () {
            this.loadData();
        },
        data() {
            return {
                // 车辆总数
                total:0,
                // 当前第几页
                current:1,
                columns1: [
                    {
                        title:'照片',
                        key:'img',
                        width:180,
                        render(h,{row}){
                            return h('div',[
                                h('img',{
                                    attrs:{
                                        src:`http://aiqianduan.com:56506/images/carimages_small/${row.id}/view/${row.img}`
                                    }
                                })
                            ])
                        }
                    },
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
                    },
                ],
                data1:[]
            }
        },
        methods: {
            loadData() {
                axios.get('http://www.aiqianduan.com:56506/cars?page=' + this.current).then(data =>{
                    this.data1 = data.data.results;
                    this.total = data.data.total;
                });
            },
            changePage(current){
                this.current  = current;
                this.loadData();
            }
        },
        
    }
</script>

<style lang="less" scoped>
.warp{
    margin: 0 auto;
    width: 1000px;
    h2{
        text-align: center;
        line-height: 70px;
    }
    .pagebox{
        margin: 40px 0;
        text-align: center;
    }
}
</style>