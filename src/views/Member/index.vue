<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { UserOutlined, ArrowDownOutlined, CheckCircleOutlined  } from '@ant-design/icons-vue';
</script>
<template>
  <cos-layout>
    <h1 class="fw-bold text-center font-bold text-2xl my-5">會員</h1>
    <a-tabs v-model:activeKey="activeKey" animated >
    <a-tab-pane key="1" tab="訂單查詢" class="text-center">
      <li class="text-white font-bold bg-green w-[100px] mx-auto my-3">已下訂單</li><ArrowDownOutlined />
      <li class="my-3 font-bold">已出貨</li><ArrowDownOutlined />
      <li class="my-3 font-bold">到達物流中心</li><ArrowDownOutlined />
      <li class="my-3 font-bold">到達指定位置</li><ArrowDownOutlined />
      <li class="my-3 font-bold">訂單完成 </li><CheckCircleOutlined class="mb-4"/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="會員資料">
      <div class="text-center mb-4">
      <a-avatar :size="64">
      <template #icon><UserOutlined /></template>
      </a-avatar>
      <h1 class="font-bold">我的檔案</h1>
      <p class="mt-4">帳號:xxx</p>
      <p>姓名:xxx</p>
      <p>電話:09xxxxxxxx</p>
      <p>地址:台北市大同區xxxx</p>
      <p>信箱:fjdsfj@gmail.com</p>
      </div>
    </a-tab-pane>
  </a-tabs>
  </cos-layout>
</template>