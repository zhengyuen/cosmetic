<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const changePage = (url) => {
	router.push(url)
}
</script>

<template>
	<cos-layout>
	<div class="container-fluid">
		</div>
	<div  class="text-center">
		<h1 class="mb-3 mt-3 font-bold text-2xl">我的購物車</h1>
		<p>目前沒有商品在購物車喔!</p>
			<img src="https://0206hom-cosmetic.netlify.app/image/pexels-photo-4841481.webp" alt="" class="w-[300px] h-[300px] rounded-full mx-auto">
			<button class="text-pink font-bold text-xl mb-5" @click="changePage('/products')">繼續購物--></button>
			</div>
		<!-- <div  id="bgArea">

			<a href="https://0206hom-cosmetic.netlify.app/intro"> 
				<img src="image/pic05.jpg" alt=""></a>
				<span id="btn" class="border border-0 mt-0 " style="position:relative;top:-80px;left:200px">&times;</span>	
				<div style="position:relative;left:150px;top:-130px">
					<p>極保濕修護組</p>
					<p>單價$1,069元</p>
					<ul class="counter quantity-toggle " >
						<li id="minus"><input type="button" onclick="minuser()" value="-"/></li>
						<li id="countnum">1</li>
						<li id="plus"><input type="button" onclick="adder()" value="+"/></li>
					</ul>
				</div> -->
			<!-- 	<div class="counter ">
					<button id="minus" onclick="minuser()" value="-"/>-</button>
					<input id="countnum" type="text" min="1" value="1">
					<button id="plus"  onclick="adder()" value="+"/>+</button>
				</div>	 -->	

		<div class="border border-2 text-center justify-content-center border-dotted">
			<div class="">
				<div class=" justify-content-center ">
					<h3>購物須知</h3>
					<ul class="list-unstyled  ">
						<li>1. 運費國內超商店到店為60元，郵寄60元，滿1,200免運費。</li>
						<li>2. 若商品有缺損或想更改，退款和換貨請在七天前申請。</li>
						<li>3. 付款後三日內及會出貨，若遇國定假日和週末則在工作日開始出貨。</li>
					</ul>
					<h3 class="mt-3">客服專線</h3>
					<ul class="list-unstyled mb-3">
						<li>電話：00-000000</li>
						<li >信箱：cosmetic@gmail.com</li>
					</ul>
				</div>
			</div>
			</div>
	</cos-layout>
</template>

<style scoped>

</style>