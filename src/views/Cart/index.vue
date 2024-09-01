<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store/product';
import { ref,computed } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const productStore = useProductStore()
const cart = ref(productStore.cart)
const router = useRouter()

const changePage = (url) => {
	router.push(url)
}
const totalPrize = computed(() => {
	let price = 0
	for (const item of productStore.cart) {
		price += item.quantity * item.prize
	}
	return price
})

const columns = [
	{
		key:'cover',
    title: t('picture'),
    dataIndex: 'cover',
    width: 150,
  },
  {
    title: t('product'),
    dataIndex: 'title',
    width: 150,
  },
  {
    title: t('unit_price'),
    dataIndex: 'prize',
    width: 150,
  },
  {
		key: 'quantity',
    title: t('amount'),
    dataIndex: 'quantity',
  },
	{
		key: 'total',
    title: t('total'),
    dataIndex: 'total',
  },
	{
		key: 'operation',
		title: t('operation'),
		dataIndex: 'operation'
	}
];
const adjustQuantity = (id, num) => {
	cart.value = cart.value.map(product => {
		if (product.id === id) {
			if (product.quantity > 1 || ( product.quantity === 1 && num > 0)) {
			product.quantity += num
			}
			return product
		}if (product.quantity === 0){
			const newCart = productStore.cart.filter(product => product.id !== id)
			productStore.setCart(newCart)
			cart.value = newCart
		}
		return product
	})
}
const deleteProduct = (id) => {
	const newCart = productStore.cart.filter(product => product.id !== id)
	productStore.setCart(newCart)
	cart.value = newCart
}
</script>

<template>
	<div class="container mx-auto">
	<div  class="text-center">
		<h1 class="mb-3 mt-3 font-bold text-2xl">{{ t('cart') }}</h1>
		<a-table
    :columns="columns"
    :data-source="cart"
  >
		<template #bodyCell="{ column, record }">
			<template v-if="column.key === 'cover'">
				<img :src="record.cover" alt="image" class="object-cover w-[80px] h-[80px]">
			</template>
			<template v-if="column.key ==='total'">
					{{ `$ ${record.prize * record.quantity}` }}
			</template>
			<template v-if="column.key === 'quantity'">
			<div class="flex pl-1">
        <button class="list-none text-center w-[20px] h-[30px] bg-pink" @click="adjustQuantity(record.id, 1)">+</button>
        <input class="w-[50px] text-center border-2" type="text" :value="record.quantity">
        <button class="list-none text-center w-[20px] h-[30px] bg-pink" @click="adjustQuantity(record.id, -1)">-</button>
      </div>
			</template>
			<template v-if="column.key === 'operation'" >
					<a-button @click="deleteProduct(record.id)">刪除</a-button>
			</template>
		</template>
	</a-table>
	</div>
		</div>
			<hr class="w-[200px] mt-5 ">
			<div class="text-right mr-32">
				<p>{{ t('total') }} NT ${{ totalPrize }}</p>
			<a-button class="bg-black text-white mt-3 mb-3" @click="changePage('/checkout')" >{{ t('checkout') }}</a-button><br>
		</div>
		<div class="border-2 text-center justify-content-center border-dotted">
				<div class=" justify-content-center ">
					<h2 class="font-bold">{{ t('shopping_instructions') }}</h2>
					<ul class="list-unstyled  ">
						<li>{{ t('instructions_1') }}</li>
						<li>{{ t('instructions_2') }}</li>
						<li>{{ t('instructions_3') }}</li>
					</ul>
					<h3 class="mt-3">{{ t('customer_service') }}</h3>
					<ul class="list-unstyled mb-3">
						<li>{{ t('cellphone') }}：00-000000</li>
						<li >{{ t('email') }}：cosmetic@gmail.com</li>
					</ul>
				</div>
			</div>
</template>

<style scoped>
.ant-table-cell {
	display: flex;
	align-items: center;
}
</style>