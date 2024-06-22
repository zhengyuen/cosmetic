<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { ref, reactive } from 'vue';
import aboutCard from '@/components/aboutCard/index.vue'

const aboutCards = ref([
	{
		image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHFKP5wIy8hZoKCyGmFqmuOVxiwBypbt27LRMuB4Y2TC3gxAEQ',
		title: '友善環境',
		desc:'秉持ESG企業原則，產品包裝皆為環境可分解之產物，在使用產品時也同時在愛護地球。'
	},
	{
		image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTc85qZ2hJh6T4-Yepsfo0LshAJ5X-lTZnT-S1NYVs3crOgMz9n',
		title: '有機認證',
		isReverse: true,
		desc:'所使用的原料皆為有機認證的純原料。'
	},
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyIU22C6mXSUgaIdf7opxpUDJSzJtMMCOXN6fy1OKZ83eylbL',
		title: '超保濕',
		desc:'含有盧繪等成分高保濕效果。'
	},
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJghslzSVxmRBpQ-nNQft2LCY8DguVmobjjQ&s',
		title: '完美修護',
		isReverse: true,
		desc:'成分含有自由基能完美修復肌膚。'
	}
])


const form = reactive({
	name: '',
	email: ''
})

</script>

<template>
	<cos-layout>
	<div >
		<div class="my-5 text-center">
			<h1 class="font-bold text-2xl my-10">關於我們</h1>
			<about-card class="mx-auto"
			v-for="item in aboutCards"
			:key="item.title"
			:image="item.image"
			:title="item.title"
			:is-reverse="item.isReverse"
			:desc="item.desc"
			/>
		</div>
	</div>
	<div class="w-[500px] h-[200px] mx-auto mb-2 bg-pink">
		<h1>與我們聯繫(免費拿試用品)</h1>
	<a-input-group compact class="mx-2 my-2 w-[350px]">
      <a-input v-model:value="value19" style="width: calc(100% - 200px)" placeholder="請輸入您的信箱" />
      <a-button type="primary">填好送出</a-button>
    </a-input-group>
		<a-input-group compact class="mx-2 my-2 w-[350px]">
      <a-input  v-model:value="value20" style="width: calc(100% - 200px)" placeholder="請輸入您的姓名" />
      <a-button  type="primary">填好送出</a-button>
    </a-input-group>
	</div>
</cos-layout>


</template>

<style scoped>

</style>