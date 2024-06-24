<script setup>
import { ref, computed } from 'vue'
// import { addCart, getCart } from '@/utils/localStorage.js'
import CosLayout from '@/components/cosLayout/index.vue'
import { HeartOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const changePage = (url) => {
	router.push(url)
}
const tabImages = [
  {
    key: 1,
    image:'https://images.pexels.com/photos/6847873/pexels-photo-6847873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    key: 2,
    image:'https://images.pexels.com/photos/4841341/pexels-photo-4841341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    key: 3,
    image:'https://images.pexels.com/photos/4841237/pexels-photo-4841237.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    key: 4,
    image:'https://images.pexels.com/photos/4841389/pexels-photo-4841389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  }
  ]
  const tabImageIndex = ref(0)
  const changeImage = (index) => {
    tabImageIndex.value = index
  }
  const tabImage = computed(() => tabImages[tabImageIndex.value].image)
  const amount = ref(1)
  const plus = () => {
    amount.value += 1
  }
  const minus = () => {
    if (amount.value > 0){
      amount.value -= 1
    }
  }

  // const addToCart = () =>{
  //   const cart = getCart()
  //   if(!cart.length) {
  //     addCart(item)
  //     return
  //   }
    // if ()

</script>
<template>
  <cos-layout>
    <div class="container">
      <div class="flex font-bold ml-4 mb-4">
      <div class="w-1/2 h-[520px] mr-8">
        <div class="flex gap-2">
          <div class="w-2/3">
            <img class="w-full h-[520px] object-cover" :src="tabImage" alt="">
          </div>
          <div class="w-1/3">
            <div class="flex flex-col">
              <div v-for="(item, idx) in tabImages"  class="box-border mb-2 cursor-pointer" :key="item.key" @click="changeImage(idx)">
                <img class="w-full h-[124px] object-cover" :src="item.image" alt="image">
              </div>
            </div>
            </div>
          </div>
        </div>
      <div class="w-1/2">
        <h1 class="text-2xl text-center m-3 font-bold">極保濕修護組</h1>
          <ul class="font-bold list-disc">
            <li>高科技前導技術，快速疏通肌脂通道，有效解決輕度肌膚屏障受損、敏感或暗沉</li>
            <li>無重力水感小分子，將修護油轉化至小於肌膚間質通道的奈米級微粒，有效滲透肌底</li>
            <li>水感油配方，透過高科技處理，將黏稠油脂轉化為液態配方，肌膚更容易吸收</li>
            <li>通過貼布測試/無香料/無酒精/無Paraben/無色素/無礦物油</li>
          </ul>
      <h2>價格</h2>
      <p class="text-xl">NT$1,069</p>
      <!--數量按鈕-->
      <div class="flex pl-1 my-3">
        <button @click="plus" class="list-none text-center w-[20px] h-[30px] bg-pink">+</button>
        <input class="w-[50px] text-center border-2" type="text" v-model="amount">
        <button @click="minus" class="list-none text-center w-[20px] h-[30px] bg-pink">-</button>
      </div>
        <a-button class="bg-pink mr-2 font-bold" @click="changePage('/cart')">加入購物車</a-button>
        <a-button class="bg-pink font-bold" @click="changePage('/checkout')">立即購買</a-button>
        <a-button class="mt-3 hover:text-pink flex items-center">
          <template #icon>
            <HeartOutlined />
          </template>
          <span>加到最愛</span>
        </a-button>
      </div>
    </div>
  </div>
  </cos-layout>
</template>