<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const changePage = (url) => {
	router.push(url)
}
</script>
<template>
  <a-result class="my-auto"
    status="success"
    title="您已成功下單"
    sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <template #extra>
      <a-button key="console" type="primary" @click="changePage('/products')">繼續購買</a-button>
    </template>
  </a-result>
</template>