<template>
    <div>
        <p>
            <label v-for="(item,index) in types" :key="index">
                <input type="radio" :value="item" v-model="now">
                {{item}}
            </label>
        </p>
        <ul>
            <li v-for="(item,index) in heros" :key="index">
                <!-- {{item}} -->
                <img :src="`http://www.aiqianduan.com:56506/images/wzry/${item.pic}.jpg`"/>
                <p>
                    {{item.title}}
                </p>
                <div class="mask" v-if="now !='全部' && now != item.hero_type"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                heros: [],
                types: ['全部','战士','辅助','法师','坦克','射手','刺客'],
                now:'法师'
            }
        },
        // 生命周期，当组件被加载之后做的事情
        created(){
            axios.get('http://www.aiqianduan.com:56506/wzry').then(data => {
                // then是然后，回调函数
                console.log(data.data);
                this.heros = data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    label{
        color: white;
    }
    ul{
        list-style: none;
    }
    li{
        position: relative;
        text-align: center;
        width: 120px;
        height: 130px;
        float: left;
        // border: 1px solid yellow;
        margin-right: 10px;
        margin-bottom: 10px;

        img{
            width: 120px;
            height: 100px;
        }
        p{
            margin: 0;
        }
        .mask{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.7);
        }
    }

</style>