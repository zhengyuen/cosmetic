<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { ref } from 'vue';
import ProductsCard from '@/components/productsCard/index.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const changePage = (url) => {
	router.push(url)
}
const productsCards = ref([
	{
		image: 'https://images.pexels.com/photos/6847873/pexels-photo-6847873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		title: '極保濕修護組',
		prize: '$1,069',
		desc:'極保濕化妝水、乳液、面膜。三重保濕效果，極度鎖住肌膚的水分。質感細膩不油膩，使你擁有會呼吸的水嫩肌膚。'
	},
	{
		image: 'https://images.pexels.com/photos/9775406/pexels-photo-9775406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		title: '青春抗痘組',
		prize: '$1,630',
		desc:'有效抗痘洗面乳、乳液、凝膠, 在抗痘的同時也保護你的肌膚, 使你的臉青春藏不住。'
	},
	{
		image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTagyYX9g8YZ7M_7alrjMtz8nVDzTHQwSGfDIw07-D6hpTwCK24',
		title: '亮白美顏組',
		prize: '$1,900',
		desc:'極亮白化妝水、乳液、面膜。三重亮白效果，徹底消滅黑色素。抗皺抗蠟黃，使你擁有天然好氣色。'
	}
	])
	const productsCard = ref([
	{
		image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbFerpSCZl1PirhiyZyir2ZmFon9aIB1Hmg-y8cSzxXNGTi2NB',
		title: '極保濕乳液',
		prize: '$500',
		desc:'小分子快速滲透，使你的肌膚能最有效的吸收。質感細膩不油膩，使你擁有會呼吸的水嫩肌膚。'
	},
	{
		image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9rvrygOBC3o6DG_QvlLPbK6z7PNZx13ihP0l3v00YiJ31hjhE',
		title: '毛孔緊緻霜',
		prize: '$900',
		desc:'含有自由基, 快速修復肌膚老化和緊緻毛孔。使你輕鬆擁有水煮蛋肌。'
	},
	{
		image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnbmE_tKOy2tLQKSakJzUX92LSC8lHMjLgbU4q9VDV2ZpqM_-4',
		title: '亮白乳液',
		prize: '$1,050',
		desc:'超亮白效果，快速消滅黑色素。抗皺抗蠟黃，使你擁有天然好氣色。'
	}
])
</script>
<template>
<cos-layout>

	<div class="container-fluid">
		<div class="row" id="banner">
			<div class="col p-0">
			</div>
		</div>
		</div>
		<h1 class="fw-bold text-center font-bold text-2xl my-5">產品介紹</h1>
			<h3 class="text-center">
			<ins class="text-pink font-bold text-xl my-5">經典組合</ins></h3>
			<div >
			<div class="flex justify-center">
				<products-card
				class="mx-4"
				v-for="item in productsCards"
				:key="item.title"
				:image="item.image"
				:title="item.title"
				:prize="item.prize"
				:desc="item.desc"
				@btn-click="changePage('/cart')"
				/>
			</div>
			</div>
			<div class="text-center justify-content-center">
				<h3>
			<ins class=" text-pink font-bold text-xl my-5">乳液</ins></h3>
			</div>
			<div class="flex justify-center">
				<products-card
				v-for="item in productsCard"
				class="mx-4"
				:key="item.title"
				:image="item.image"
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
