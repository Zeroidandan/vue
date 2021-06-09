<template>
	<div>
		<h1>省市县镇 - 四级联动</h1>
		<div v-if="Object.keys(obj).length != 0">
			<!-- Object.keys().length可以统计键的数量 -->
			<select v-model="p">
				<option v-for="(v,k) in obj">{{k}}</option>
			</select>
			<select v-model="c">
				<option v-for="(v,k) in obj[p]">{{k}}</option>
			</select>
			<select v-model="a">
				<option v-for="(v,k) in obj[p][c]">{{k}}</option>
			</select>
			<select v-model="s">
				<option v-for="item in obj[p][c][a]">{{item}}</option>
			</select>
		</div>
		<h3>{{p}}{{c}}{{a}}{{s}}</h3>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				obj: {},
				p:'北京市',
				c:'市辖区',
				a:'朝阳区',
				s:'建外街道',
			}
		},
		created () {
			axios.get('http://www.aiqianduan.com:56506/pcas').then(data => {
				this.obj = data.data;
			});
		},
		watch: {
			// 当省变化了，必须让c变为省会城市。为了防止四个直辖市之前切换“市辖区”没有引发切换，所以把a也换一下
			p(v) {
				this.c = Object.keys(this.obj[v])[0];
				this.a = Object.keys(this.obj[v][this.c])[0];
			},
			// 同理
			c(v){
				this.a = Object.keys(this.obj[this.p][v])[0];
			},
			// 同理
			a(v){
				this.s = this.obj[this.p][this.c][v][0];
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>