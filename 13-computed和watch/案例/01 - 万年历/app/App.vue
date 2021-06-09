<template>
	<div>
		<h1>万年历</h1>
		<select v-model="year">
			<option v-for="i in 70" :value="1970 + i">{{1970 + i}}</option>
		</select>
		<select v-model="month">
			<option v-for="i in 12" :value="i">{{i}}</option>
		</select>
		<table>
			<tr v-for="i in 6" :key="i">
				<td v-for="j in 7" :key="j">
					<p>{{arr[(i - 1) * 7 + (j - 1)].gongli}}</p>
					<!-- <p>{{arr[(i - 1) * 7 + (j - 1)].nongli}}</p> -->
					<p>{{arr[(i - 1) * 7 + (j - 1)].nongli.term ? arr[(i - 1) * 7 + (j - 1)].nongli.term : arr[(i - 1) * 7 + (j - 1)].nongli.dayCn}}</p>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import solarlunar from 'solarlunar';
	export default {
		data() {
			return {
				year: '2021',
				month:'6'
			}
		},
		computed: {
			arr() {
				var result = [];
				// 日历三要素
				// 1、本月1号星期几
				var ben1 = new Date(this.year,this.month - 1,1).getDay();
				// 2、本月有多少天
				var benNum = new Date(this.year,this.month,0).getDate();
				// 3、上个月有多少天
				var upNum = new Date(this.year,this.month - 1,0).getDate();
				// console.log(ben1,benNum,upNum);

				// 1.将上个月结余放入数组
				var count  = ben1 == 0 ? 7 : ben1;
				for (let i = 0; i < ben1; i++) {
					result.unshift({
						'gongli':upNum - i,
						'nongli':solarlunar.solar2lunar(this.year,this.month-1,upNum - i)
					});					
				}
				// 2.放入本月
				for (let i = 1; i <= benNum; i++) {
					result.push({
						'gongli':i,
						'nongli':solarlunar.solar2lunar(this.year,this.month,i)
					});					
				}
				// 3.用下个月开头补齐42项
				var n = 1;
				while(result.length < 42){
					result.push({
						'gongli':n,
						'nongli':solarlunar.solar2lunar(this.year,this.month, n)
						// 下个月的农历显示错误，逻辑问题
					});
					n++
				}
				return result;
			}
		},
	}
</script>

<style lang="less" scoped>
	td{
		width: 70px;
		height: 90px;
		text-align: center;
		// border: 1px solid #eee;
	}
	select{
		width: 80px;
		height: 30px;
		font-size: 16px;
		margin-bottom: 20px;
	}
</style>