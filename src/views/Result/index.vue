<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue'
import { useProductStore } from '@/store/product';
import { setFormData, getFormData } from '@/utils/localStorage';

const router = useRouter()
const changePage = (url) => {
	router.push(url)
}

const productStore = useProductStore()
const cart = ref(productStore.cart)
const formData = ref(productStore.formData)
console.log(formData.value)
const totalPrize = computed(() => {
	let price = 0
	for (const item of productStore.cart) {
		price += item.quantity * item.prize
	}
	return price
})
const fare = computed(() => {
  if (totalPrize.value < 1200){
    return 60
  } else {
    return 0
  }
})

// const checkout = ref(productStore.checkout)
// const resultPage = () => {
//   const result = getFormData()
//   const newResult = result.map(toResult => {
//     if () {
//       return formData
//     }
//   })
//   return formData
// }
// setFormData(result)
// result
</script>
<template>
  <h1 class="font-bold ml-10">訂單商品</h1>
    <div v-for="(item) in cart" :key="item.title" class="flex h-[150px] ml-10">
			<img class="w-[70px] h-[100px] mx-5 my-auto" :src="item.cover" alt="">
			<p class="my-auto ml-2 font-bold" v-if="cart.id === title">{{ item.title }}</p>
			<div class="flex pl-1 my-auto">
        <input class="w-[50px] h-[30px] text-center" v-if="cart.id === quantity" type="text" >x {{ item.quantity }}
      </div>
			<p class="my-auto ml-5" v-if="cart.id === total">NT${{ item.prize * item.quantity }}</p>
    </div>
    <div class="text-right mr-3">
        <hr>
        <p>商品總金額 NT ${{ totalPrize }}</p>
        <p>運費 NT $ {{ fare }}</p>
				<p>總付款金額 <span class="text-2xl"> NT ${{ totalPrize += fare }}</span></p>
        </div>
    <hr>
    <div class="ml-10 my-3">
      <h1 class="font-bold">寄送資訊</h1>
      <div >
        <p class="" ></p>
      </div>
      </div>
  <a-result class="my-auto"
    status="success"
    title="您已成功下單"
    sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <template #extra>
      <a-button key="console" type="primary" @click="changePage('/products')">繼續購買</a-button>
    </template>
  </a-result>
</template>