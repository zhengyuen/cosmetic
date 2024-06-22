<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
</script>
<template>
  <cos-layout>
    <div class="flex font-bold ml-4 mb-4">
  <a-tabs v-model:activeKey="activeKey" :tab-position="bottom" animated >
    <a-tab-pane key="1" tab="Tab 1"><img class="w-[300px] h-[400px]" src="https://images.pexels.com/photos/6847873/pexels-photo-6847873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2"><img class="w-[300px] h-[400px]" src="https://images.pexels.com/photos/4841341/pexels-photo-4841341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""></a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3"><img class="w-[300px] h-[400px]" src="https://images.pexels.com/photos/4841237/pexels-photo-4841237.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""></a-tab-pane>
    <a-tab-pane key="4" tab="Tab 4"><img class="w-[300px] h-[400px]" src="https://images.pexels.com/photos/4841389/pexels-photo-4841389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""></a-tab-pane>
  </a-tabs>
      <div class="m-4 w-[50%] mx-auto">
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
        <li class="list-none text-center w-[20px] h-[30px] bg-pink">+</li>
        <input class="w-[50px] text-center border-2" type="text" value="1">
        <li class="list-none text-center w-[20px] h-[30px] bg-pink">-</li>
      </div>
        <a-button class="bg-pink mr-2 font-bold">加入購物車</a-button>
        <a-button class="bg-pink font-bold">立即購買</a-button>
        <a-button class="block mt-3 hover:text-pink"><img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" class="w-[10px] h-[10px]">加到最愛</a-button>
      </div>
    </div>
      <!-- <ul calss="flex-row">
        <li>商品介紹</li>
        <li>規格說明</li>
        <li>運送方式</li>
      </ul> -->
  </cos-layout>
</template>