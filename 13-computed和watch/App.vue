<template>
  <div>
    <h2>computed和watch</h2>
    <h4>computed</h4>
    <ul>
      <li>computed定义函数，但是{{}}中 不能加()运行，当做普通值使用；</li>
      <li>computed仅能够根据data的值的不同，变化不同的值。data就好比它的参数；</li>
      <li>computed“计算后”的值，根据data进行计算、计算后的值；</li>
    </ul>
    <p>a的值为：{{a}}</p>
    <p>m的值是a的2倍：{{m}}</p>
    <button @click="a++">a++</button>

    <h4>watch</h4>
    <ul>
      <li>watch表示监控，它可以书写和data某一个属性名，当做函数名，就能监控这个属性；</li>
      <li>当这个属性变化，都会执行函数；</li>
    </ul>
    <p>b的值为：{{b}}</p>
    <p>c的值是b的2倍：{{c}}</p>
    <input type="range" min="0" max="100" v-model="b">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 10,
        b: 20,
        c: 40
      }
    },
    computed: {
      m() {
        return this.a * 2; 
      }
    },
    watch: {
      b(v) {
        this.c = v * 2;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>