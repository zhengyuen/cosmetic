<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { UserOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const changePage = (url) => {
	router.push(url)
}
</script>
<template>
  <cos-layout>
    <div class="container mx-auto">
    <h1 class="fw-bold text-center font-bold text-2xl my-5">結帳</h1>
    <div class="flex h-[150px] ml-10">
      <h1 class="font-bold">訂單商品</h1>
			<img class="w-[70px] h-[100px] mx-5 my-auto" src="https://0206hom-cosmetic.netlify.app/image/pexels-photo-4841481.webp" alt="">
			<p class="my-auto ml-2 font-bold">極保濕組合</p>
			<div class="flex pl-1 my-auto">
        <input class="w-[50px] h-[30px] text-center" type="text" value="1">
      </div>
			<p class="my-auto ml-2">NT$1,069</p>
    </div>
    <hr>
    <div class="ml-10 my-3">
      <h1 class="font-bold">寄送資訊</h1>
      <span>賣家宅配</span><span class="ml-4">鄭XX (+886) 9XXXXXXX 106 臺北市大安區XXXXXXXX</span><br>
      <span>電子發票</span><span class="ml-4">二聯式發票(個人) 會員載具</span>
    </div>
			<hr>
      <div class="ml-10 my-3">
      <h1 class="font-bold">付款方式</h1>
      <a-button>信用卡</a-button>
      <a-button class="ml-2">金融卡</a-button>
      </div>
			<div class="text-right mr-3">
        <hr>
        <p>商品總金額 NT $1,069</p>
        <p>運費 NT $0</p>
				<p>總付款金額 <span class="text-2xl"> NT $1,069</span></p>
			<a-button class="bg-black text-white my-3"  @click="changePage('/result')">下訂單</a-button>
		</div>
  </div>
  </cos-layout>
</template>