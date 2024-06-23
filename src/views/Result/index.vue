<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const changePage = (url) => {
	router.push(url)
}
</script>
<template>
  <cos-layout>
  <a-result class="my-auto"
    status="success"
    title="您已成功下單"
    sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <template #extra>
      <a-button key="console" type="primary" @click="changePage('/products')">繼續購買</a-button>
      <a-button key="buy">再買一次</a-button>
    </template>
  </a-result>
  </cos-layout>
</template>