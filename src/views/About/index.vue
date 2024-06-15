<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { ref } from 'vue';
import aboutCard from '@/components/aboutCard/index.vue'

const aboutCards = ref([
	{
		image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHFKP5wIy8hZoKCyGmFqmuOVxiwBypbt27LRMuB4Y2TC3gxAEQ',
		title: '友善環境'
	},
	{
		image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTc85qZ2hJh6T4-Yepsfo0LshAJ5X-lTZnT-S1NYVs3crOgMz9n',
		title: '有機認證',
		isReverse: true
	},
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyIU22C6mXSUgaIdf7opxpUDJSzJtMMCOXN6fy1OKZ83eylbL',
		title: '超保濕'
	},
	{
		image: 'https://cdn-icons-png.flaticon.com/128/8459/8459607.png',
		title: '完美修護',
		isReverse: true
	}
])
const modalDes = ref([
	{
		title:'友善環境',
		desc:'秉持ESG企業原則，產品包裝皆為環境可分解之產物，在使用產品時也同時在愛護地球。'
	},
	{
		title:'有機認證',
		desc:'所使用的原料皆為有機認證的純原料。'
	},
	{
		title:'超保濕',
		desc:'含有盧繪等成分高保濕效果。'
	},
	{
		title:'完美修護',
		desc:'成分含有自由基能完美修復肌膚。'
	}
])
const value19 = ref([
	{
		title:String,
		default:'請輸入姓名'
	}
])
const value20 = ref([
	{
		title:String,
		default:'請輸入信箱'
	}
])
</script>

<template>
	<cos-layout>


	<div id="" class="">
		<div class="my-5 text-center">
			<h1 class="font-bold text-xl my-10">關於我們</h1>
			<about-card class="mx-auto"
			v-for="item in aboutCards"
			:key="item.title"
			:image="item.image"
			:title="item.title"
			:is-reverse="item.isReverse"
			/>
</div>
</div>
<div>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
	<!-- <div class="modal fade" id="intro1">
		<div class="modal-dialog modal-lg modal-dialog-centered"> -->
			
			<div v-for="(item, idx) in items"  :key="idx" class="">
				<a-button type="" @click="showModal">友善環境</a-button> 
				<a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
      <p>哈囉</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    
				<h3 class="text-warning">友善環境</h3>
				<p class="text-start">秉持ESG企業原則，產品包裝皆為環境可分解之產物，在使用產品時也同時在愛護地球。</p></a-modal>
			</div>
<div>
	<div class="modal fade" id="intro2">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-body bg-white ">
				<h3 class="text-warning">有機認證</h3>
				<p class="text-start">所使用的原料皆為有機認證的純原料。</p>
			</div>
		</div>
	</div>
</div>
<div>
	<div class="modal fade" id="intro3">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-body bg-white ">
				<h3 class="text-warning">超保濕</h3>
				<p class="text-start">含有盧繪成分高保濕效果。</p>
			</div>
		</div>
	</div>
</div>
	<div class="modal fade" id="intro4">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-body bg-white ">
				<h3 class="text-warning">完美修護</h3>
				<p class="text-start">成分含有自由基能完美修復肌膚。</p>
			</div>
		</div>
	</div>
	
	<form action="">
		<fieldset class="table-auto">
			<h3>與我們聯繫</h3>
			<input type="email" placeholder="請輸入您的電子郵件" ><input type="submit" value="填好送出"><br>
			<input type="text" placeholder="請輸入您的姓名" ><input type="submit" value="填好送出">
			<p class="text-center">免費拿試用品</p>
		</fieldset>
	</form>
		<h3>與我們聯繫</h3>
	<a-input-group compact class="mx-2 my-2 w-[350px]">
      <a-input v-model:value="value19" style="width: calc(100% - 200px)" />
      <a-button type="primary">填好送出</a-button>
    </a-input-group>
		<a-input-group compact class="mx-2 my-2 w-[350px]">
      <a-input  v-model:value="value20" style="width: calc(100% - 200px)" />
      <a-button  type="primary">填好送出</a-button>
    </a-input-group>
</cos-layout>


</template>

<style scoped>

</style>