<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { ref, computed } from 'vue';
import ProductsCard from '@/components/productsCard/index.vue'
import { useRouter, useRoute } from 'vue-router';
import { productApi } from '@/api/products'

const router = useRouter()

const route = useRoute()

const changePage = (url) => {
	router.push(url)
}

const products = ref([])
const getProductData = async() => {
	const { code, data } = await productApi.getProducts()
	if (code === 200){
		products.value = data
		localStorage.setItem('products', JSON.stringify(data))
	}
}
getProductData()

const productId = ref(Number(route.params.id))
const productItem = ref(JSON.parse(localStorage.getItem('products') || []))
const product = computed(() => productItem.value.find(product => product.id === productId.value))


const newProductItemUp = [productItem.value[0],productItem.value[1],productItem.value[2]]
const newProductItemDown = [productItem.value[3],productItem.value[4],productItem.value[5]]


</script>
<template>
<cos-layout>

	<div class="container">
		</div>
		<h1 class="fw-bold text-center font-bold text-2xl my-5">產品介紹</h1>
			<h3 class="text-center">
			<ins class="text-pink font-bold text-xl my-5">經典組合</ins></h3>
			<div >
			<div class="flex justify-center">
				<products-card
				class="mx-4"
				v-for="item in newProductItemUp"
				:key="item.title"
				:image="item.cover"
				:title="item.title"
				:prize="item.prize"
				:desc="item.desc"
				@image-click="changePage(`/product/${item.id}`)" @btn-click="changePage('/cart')"
				/>
			</div>
			</div>
			<div class="text-center justify-content-center">
				<h3>
			<ins class=" text-pink font-bold text-xl my-5">乳液</ins></h3>
			</div>
			<div class="flex justify-center">
				<products-card
				v-for="item in newProductItemDown"
				class="mx-4"
				:key="item.title"
				:image="item.cover"
				:title="item.title"
				:prize="item.prize"
				:desc="item.desc"
				@btn-click="changePage('/cart')"
				/>
		</div>
		</cos-layout>
</template>

<style scoped>

</style>
