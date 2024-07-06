<script setup>
import { UserOutlined } from '@ant-design/icons-vue';
import { ref, computed } from 'vue';
import { useProductStore } from '@/store/product';
import { useRouter } from 'vue-router';

const router = useRouter()
const changePage = (url) => {
	router.push(url)
}
const productStore = useProductStore()
const cart = ref(productStore.cart)

const totalPrize = computed(() => {
	let price = 0
	for (const item of productStore.cart) {
		price += item.quantity * item.prize
	}
	return price
})

</script>
<template>
    <div class="container mx-auto ">
    <h1 class="fw-bold text-center font-bold text-2xl my-5">結帳</h1>
    <h1 class="font-bold ml-10">訂單商品</h1>
    <div v-for="(item) in cart" :key="item.title" class="flex h-[150px] ml-10">
			<img class="w-[70px] h-[100px] mx-5 my-auto" :src="item.cover" alt="">
			<p class="my-auto ml-2 font-bold" v-if="cart.id === title">{{ item.title }}</p>
			<div class="flex pl-1 my-auto">
        <input class="w-[50px] h-[30px] text-center" v-if="cart.id === quantity" type="text" >x {{ item.quantity }}
      </div>
			<p class="my-auto ml-5" v-if="cart.id === total">NT${{ item.prize * item.quantity }}</p>
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
        <p>商品總金額 NT ${{ totalPrize }}</p>
        <p v-if="totalPrize < 1200">運費 NT $ 60</p>
        <p v-else>運費 NT $ 0</p>
				<p v-if="totalPrize < 1200">總付款金額 <span class="text-2xl"> NT ${{ totalPrize += 60 }}</span></p>
				<p v-else>總付款金額 <span class="text-2xl"> NT ${{ totalPrize += 0 }}</span></p>
			<a-button class="bg-black text-white my-3"  @click="changePage('/result')">下訂單</a-button>
		</div>
  </div>
</template>