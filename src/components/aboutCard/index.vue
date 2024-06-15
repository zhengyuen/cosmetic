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
  isReverse:{
    type: Boolean,
    default: false
  }
  }
)

</script>
<template>
  <div class="flex justify-center py-3" :class="{ 'flex-row-reverse' : isReverse }">
			<div class="w-[200px] h-[200px]">
				<img class="object-fit"
        :src="image"
        alt="" >
				</div>
				<div class="w-[200px] h-[200px] flex text-center items-center">
					<a-button type="primary" @click='showModal' class="cursor-pointer" >{{ title }}</a-button>
				</div>
			</div>
</template>