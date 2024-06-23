<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const changePage = (url) => {
	router.push(url)
}
const columns = [
	{
		key: 'checkbox',
		dataIndex: 'checkbox'
	},
	{
		key:'image',
    title: '圖片',
    dataIndex: 'image',
    width: 150,
  },
  {
    title: '商品',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '單價',
    dataIndex: 'prize',
    width: 150,
  },
  {
		key: 'number',
    title: '數量',
    dataIndex: 'number',
  },
	{
    title: '總價',
    dataIndex: 'sum',
  },
	{
		key: 'operation',
		title: '操作',
		dataIndex: 'operation'
	}
];

const data = [{
  key: 1,
	image: 'https://0206hom-cosmetic.netlify.app/image/pexels-photo-4841481.webp',
  name: '極保濕組合',
  prize: '$1,069',
  number: 1,
	sum: '$1,069'
}];
</script>

<template>
	<cos-layout>
	<div class="container-fluid">
		</div>
	<div  class="text-center">
		<h1 class="mb-3 mt-3 font-bold text-2xl">我的購物車</h1>
		<a-table class="flex items-center"
    :columns="columns"
    :data-source="data"
  >
		<template #bodyCell="{ column, record }">
			<template v-if="column.key === 'checkbox'">
						<input type="checkbox" class="p-3">
			</template>
			<template v-if="column.key === 'image'">
				<div >
						<img :src="record.image" alt="image" class="object-fit  ">
				</div>
			</template>
			<template v-if="column.key === 'number'">
			<div class="flex pl-1 ">
        <button class="list-none text-center w-[20px] h-[30px] bg-pink">+</button>
        <input class="w-[50px] text-center border-2" type="text" :value="record.number">
        <button class="list-none text-center w-[20px] h-[30px] bg-pink">-</button>
      </div>
			</template>
			<template v-if="column.key === 'operation'" >
						<a-button class="">刪除</a-button>
			</template>
		</template>
	</a-table>
		</div>
			<hr class="w-[200px] mt-5 ">
			<div class="text-right mr-32">
				<p>總金額NT $1,069</p>
			<a-button class="bg-black text-white mt-3 mb-3" @click="changePage('/checkout')" >前往結帳</a-button><br>
		</div>
		<div class="border-2 text-center justify-content-center border-dotted">
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