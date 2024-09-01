<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue'
import { message } from 'ant-design-vue';
import { useProductStore } from '@/store/product';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()


const router = useRouter()
const changePage = (url) => {
	router.push(url)
}

const productStore = useProductStore()
const cart = ref(productStore.cart)
const formData = ref(productStore.formData)
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

</script>
<template>
  <h1 class="font-bold ml-10">{{ t('order_product') }}</h1>
    <div v-for="(item) in cart" :key="item.title" class="flex h-[150px] ml-10">
			<img class="w-[70px] h-[100px] mx-5 my-auto" :src="item.cover" alt="">
			<p class="my-auto ml-2 font-bold" v-if="cart.id === title">{{ item.title }}</p>
			<div class="flex pl-1 my-auto">
        <div class="w-[50px] h-[30px] text-center" v-if="cart.id === quantity" type="text" >x {{ item.quantity }}
      </div>
      </div>
			<p class="my-auto ml-5" v-if="cart.id === total">NT${{ item.prize * item.quantity }}</p>
    </div>
    <div class="text-right mr-3">
        <hr>
        <p>{{ t('product_total') }}: NT ${{ totalPrize }}</p>
        <p>{{ t('delivery_fee') }}: NT $ {{ fare }}</p>
				<p>{{ t('total') }}: <span class="text-2xl"> NT ${{ totalPrize += fare }}</span></p>
        </div>
    <hr>
    <div class="ml-10 my-3">
      <h1 class="font-bold">{{ t('recipient_info') }}</h1>
      <hr>
      <div class="mt-3 w-50 ml-5">
        <p>{{ t('name') }}:  {{ formData.name }}</p>
        <p>{{ t('cellphone') }}:  {{ formData.phone }}</p>
        <p>{{ t('email')}}:  {{ formData.email }}</p>
        <p>{{ t('address') }}:  {{ formData.address }}</p>
        <p>{{ t('deliver_method') }}:  {{ formData.deliverMethod }}</p>
        <p>{{ t('invoice_type') }}:  {{ formData.invoiceType }}</p>
        <p>{{ t('pay_method') }}:  {{ formData.payment }}</p>
      </div>
      <div class="text-right mr-3">
          <a-button class="bg-black text-white text-right mt-2" @click="changePage('/products')">{{ t('continue_shop') }}</a-button>
        </div>
      </div>
</template>