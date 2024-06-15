<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue'
defineProps({
  image:{
    type: String,
    default: ''
  },
  title:{
    type: String,
    default: ''
  },
  prize:{
    type: String,
    default: ''
  }
})

</script>
<template>
 	<div class="w-[240px] h-[500px] text-center">
				<img
        :src="image" alt="" class="w-[200px] h-[290px] mx-4">
				<h5 class="">{{ title }}</h5>
				<h6 >{{ prize }}</h6>
				<a-button class="bg-black" type="primary">加入購物車</a-button><a href="cart.html" class="nav-link"></a>
			</div>
</template>