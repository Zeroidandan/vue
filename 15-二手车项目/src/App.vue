<template>
  <div class="warp">
    <h1>二手车大全</h1>
    <div class="colorbox">
      <h6>共计{{total}}辆</h6>
      <CheckboxGroup v-model="color">
        <Checkbox v-for="(item,index) in ['红','橙','黄','绿','蓝','紫','黑','白','灰','银灰','香槟','咖啡','其他']" :key="index" :label="item">
          {{item}}
        </Checkbox>
      </CheckboxGroup>
    </div>
    <Table :columns="columns1" :data="data1"></Table>
    <div class="pagebox">
      <Page :total="total" :current="current" @on-change="changePage" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // 生命周期，组件创建成功
  created() {
    // 在生命周期中，调用loadData函数，这个代码套路在小程序中也有
    this.loadData();
  },
  data() {
    return {
      // 车辆总数
      total: 0,
      // 当前页数
      current: 1,
      columns1: [
        {
          title: "照片",
          key: "img",
          width: 180,
          render(h, { row }) {
            return h("div", [
              h("img", {
                attrs: {
                  src: `http://aiqianduan.com:56506/images/carimages_small/${row.id}/view/${row.img}`,
                },
              }),
            ]);
          },
        },
        {
          title: '编号',
          key: 'id',
        },
        {
          title: '品牌',
          key: 'brand',
        },
        {
          title: '车系',
          key: 'series',
        },
        {
          title: '颜色',
          key: 'color',
        },
        {
          title: '排量',
          key: 'engine',
        },
        {
          title: '尾气',
          key: 'exhaust',
        },
        {
          title: '燃料',
          key: 'fuel',
        },
      ],
      data1: [],
      color: [],
    };
  },
  methods: {
    loadData() {
      // 书写Ajax代码，拉取默认数据
      axios
        .get("http://www.aiqianduan.com:56506/cars?page=" + this.current + '&color=' + this.color.join('v'))
        .then((data) => {
          // 回调函数，要把服务器返回的数据设置为data中的tabledata
          // 两个data是固定写法，因为data中还封装了服务器的一些其他信息，data.data是返回的信息
          this.data1 = data.data.results;
          this.total = data.data.total;
        });
    },
    changePage(current) {
      // 先改变current属性值
      this.current = current;
      this.loadData();
    },
  },
  // 监控，监控什么啊？？
  watch: {
    // 监控color变化，函数名是什么，就表示监控什么
    color() {
      // 当color变化了，就拉取数据，并且要变为第1页
      this.current = 1;
      this.loadData();
    }
  },
};
</script>

<style lang="less" scoped>
.warp {
  width: 1000px;
  margin: 40px auto;
  h1 {
    text-align: center;
    line-height: 80px;
  }
  .pagebox {
    margin: 40px 0;
    text-align: center;
  }
  .colorbox{
    height: 70px;
    h6{
      margin-bottom: 10px;
    }
  }
}
</style>