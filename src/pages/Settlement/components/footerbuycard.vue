<template>
	<div>
		<div class="prdcard2">
			<div class="box2">
				<h3 class="prdcard-name2"> {{this.title}} </h3>
				<div class="prdcard-pricecon2">
					<span class="prdcard-span1">&yen;</span>
					<span class="prdcard-span2"> {{this.price}} </span>
					<span class="prdcard-span3">起/张</span>
				</div>
			</div>
			<div class="prdcard-tagcon2">
				<ol class="time2">
					<li class="prdcard-tagcon-li2">
						<span class="prdleft2 iconfont">&#xe627;</span>{{this.date}}
					</li>
					<li class="prdcard-tagcon-li2">
						<span class="prdleft2 iconfont">&#xe627;</span>条件退
					</li>
				</ol>
				<ul class="info2">
					<li class="prdcard-tagcon-li2">
						<span class="prdleft2 iconfont">&#xe627;</span>{{this.people}}
					</li>
					<li class="prdcard-tagcon-li2">
						<span class="prdleft2 iconfont">&#xe627;</span>{{this.food}}
					</li>
					<li class="prdcard-tagcon-li2">
						<span class="prdleft2 iconfont">&#xe627;</span>{{this.other}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			title: "",
			price: 0,
			date: "",
			people: "",
			other: "",
			food: ""
		}
	},
	created() {
		let data = localStorage.info;
		data = JSON.parse(data);
		if (data) {
			this.title = data.intro;
			this.price = data.price;
			this.food = data.food;
			this.other = data.others;
			this.people = data.people;
			let month = data.date.slice(0, 2),
				day = data.date.slice(3, 5),
				year = data.year;
			this.date = year + "-" + month + "-" + day;
		}
	}
}
</script>

<style scoped>
@import "../css/footerbuycard.css";
@import "../../../assets/font/iconfont.css";
</style>
