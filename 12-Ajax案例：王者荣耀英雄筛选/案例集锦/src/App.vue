<template>
  <!-- template里面，只能有一个外层div，外层div里面可以有无数个div -->
  <div>
    <h1>你好我是Vue，很高兴遇见你！</h1>
    <h3>{{ a }}</h3>
    <button @click="add(1)">按我+1</button>
    <button @click="add(5)">按我+5</button>
    <button @click="add(10)">按我+10</button>
    <hr />
    <h2>图集切换</h2>
    <p>
      <button @click="food()">美食</button>
      <button @click="aiqiyi()">爱奇艺</button>
      <button @click="weishi()">360卫士</button>
    </p>
    <button @click="goup()" :disabled="bb == 1">上一张</button>
    <button @click="gonext()" :disabled="bb == 4">下一张</button>
    <p>
      <img :src="`/images/${m}/${bb}.jpg`" alt="" />
      <img :src="'/images/' + m + '/' + bb + '.jpg'" alt="" />
    </p>
    <hr />
    <h2>v-for指令</h2>
    <input type="text" ref="kuang" />
    <button @click="tianjia()">添加</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ index }} -- {{ item }}
        <button @click="del(index)">删除</button>
      </li>
    </ul>
    <hr />
    <h2>v-model指令</h2>
    <input type="text" v-model="num" />
    <p>{{ num }}</p>
    <button @click="num++">num++</button>
    <hr />
    <h2>案例一：调色板</h2>
    <div
      class="box"
      :style="{ 'background-color': `rgb(${r},${g},${b})` }"
    ></div>
    <p>
      <input type="range" min="0" max="255" v-model="r" />
      <input type="number" min="0" max="255" v-model="r" />
    </p>
    <p>
      <input type="range" min="0" max="255" v-model="g" />
      <input type="number" min="0" max="255" v-model="g" />
    </p>
    <p>
      <input type="range" min="0" max="255" v-model="b" />
      <input type="number" min="0" max="255" v-model="b" />
    </p>
    <hr />
    <h2>案例二：微博发布框</h2>
    <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
    <span :class="{ danger: content.length > 100 }">
      字数：{{ content.length }}/100字
    </span>
    <p>
      <button :disabled="content.length > 100">发布</button>
      <button @click="content = ''">清空</button>
    </p>
    <hr />
    <h2>案例三：双色球</h2>
    <div class="ball">
      <p
        v-for="i in 33"
        :key="i"
        class="redball"
        :class="{ cur: redball.includes(i) }"
        @click="red(i)"
      >
        {{ i }}
      </p>
    </div>
    <div class="ball">
      <p
        v-for="i in 16"
        :key="i"
        class="blueball"
        :class="{ cur: blueball.includes(i) }"
        @click="blue(i)"
      >
        {{ i }}
      </p>
    </div>
    <div class="kai">
      <button @click="suiji()" class="btn">开奖</button>
    </div>
    <div class="result">
      <!-- <p>开奖结果：{{redball}} | </p> -->
      <p>
        开奖结果：{{ redball }} | <span>{{ blueball }}</span>
      </p>
    </div>

    <h2>TodoList [任务计划列表]</h2>
    <Hd :list="list" />
    <Bd :list="list" />
    <Ft :list="list" />
    <!-- {{list}} -->

    <h2>Ajax</h2>
    <div class="ajax">
      <p>
        <label v-for="(item, index) in types" :key="index">
          <input type="radio" :value="item" v-model="now"/>{{ item }}
          <!-- <input type="radio" v-model="now" :value="item"/>{{ item }} -->
        </label>
      </p>
      <ul>
        <li v-for="(item, index) in heros" :key="index">
          <!-- {{item}} -->
          <img
            :src="`http://www.aiqianduan.com:56506/images/wzry/${item.pic}.jpg`"
            alt=""
          />
          <p>{{ item.cname }}</p>
          <div class="mask" v-if="now != '全部' && now != item.hero_type"></div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import Hd from "./components/Hd.vue";
import Bd from "./components/Bd.vue";
import Ft from "./components/Ft.vue";

import axios from "axios";
export default {
  components: {
    Hd,
    Bd,
    Ft,
  },
  // data表示数据，它是一个函数，返回一个对象
  // 可以用快捷键vdata快速展开
  data() {
    return {
      a: 0,
      bb: 1,
      m: "foods",
      arr: [10, 20, 30, 40, 50, 60, 70, 80, 90],
      num: 10,
      r: 100,
      g: 150,
      b: 150,
      content: "",
      redball: [],
      blueball: [],
      list: [
        { title: "吃早饭", done: true },
        { title: "学习VUE", done: true },
        { title: "睡午觉", done: false },
      ], //儿子可以直接更改数组，可以不用 $emit
      heros: [],
      types: ["全部","坦克", "法师", "辅助", "战士", "刺客", "射手"],
      now:'全部',
    };
  },
  created() {
    axios.get("http://www.aiqianduan.com:56506/wzry").then((data) => {
      console.log(data.data);
      this.heros = data.data;
    });
  },
  // methods表示定义方法
  methods: {
    add(n) {
      // 注意，这里不需要this.setData()了，因为
      // vue是变量劫持的机理，直接改变a即可
      // 注意，this.data.a++,而是this.a++即可
      this.a += n;
    },
    goup() {
      this.b--;
    },
    gonext() {
      this.b++;
    },
    food() {
      this.m = "foods";
    },
    aiqiyi() {
      this.m = "aiqiyi";
    },
    weishi() {
      this.m = "weishi";
    },
    tianjia() {
      var value = this.$refs.kuang.value;
      this.arr.push(value);
      this.$refs.kuang.value = "";
    },
    del(n) {
      this.arr.splice(n, 1);
    },
    suiji() {
      var redball = [];
      while (redball.length != 6) {
        var n = parseInt(Math.random() * 33) + 1;
        if (!redball.includes(n)) {
          redball.push(n);
        }
        this.redball = redball;
      }
      var blueball = [];
      while (blueball.length != 1) {
        var m = parseInt(Math.random() * 16) + 1;
        if (!blueball.includes(m)) {
          blueball.push(m);
        }
        this.blueball = blueball;
      }
    },
    red(i) {
      if (this.redball.includes(i)) {
        this.redball = this.redball.filter((item) => item != i);
      } else {
        if (this.redball.length < 6) {
          this.redball.push(i);
        } else {
          alert("红球已选购足够的数目");
        }
      }
    },
    blue(i) {
      if (this.blueball.includes(i)) {
        this.blueball = this.blueball.filter((item) => item != i);
      } else {
        if (this.blueball.length < 1) {
          this.blueball.push(i);
        } else {
          alert("蓝球已选购足够的数目");
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: purple;
}
hr {
  margin: 50px 0px;
}
img {
  width: 200px;
  height: 280px;
}
.box {
  width: 300px;
  height: 300px; // border: 1px solid black;
}
.danger {
  color: red;
  font-weight: bold;
}
.ball {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  float: left;
  margin: 50px;
}
.redball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid red;
  color: red;
  float: left;
  line-height: 30px;
  text-align: center;
  margin: 5px;
  &.cur {
    color: white;
    background-color: red;
  }
}
.blueball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid blue;
  color: blue;
  float: left;
  line-height: 30px;
  text-align: center;
  margin: 10px;
  &.cur {
    color: white;
    background-color: blue;
  }
}
.kai {
  clear: both;
  width: 80px;
  height: 40px;
  margin-left: 360px;
  margin-bottom: 50px;
}
.btn {
  width: 80px;
  height: 40px;
  background-color: rgb(66, 123, 228);
  color: white;
  border: none;
  font-size: 16px;
}
.result {
  width: 400px;
  height: 50px;
  border: 1px solid black;
  clear: both;
  margin-left: 50px;
  padding-left: 10px;
  margin-bottom: 50px;
}

// Aajx
.ajax{
    width: 100%;
    height: 1800px;
    background-color:  rgba(0, 0, 0, 0.8);
}
.ajax ul {
  list-style: none;
}
.ajax ul li {
  position: relative;
  text-align: center;
  width: 120px;
  height: 130px;
  border: 1px solid #ccc;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    margin: 0;
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
label {
  color: #fff;
}
</style>