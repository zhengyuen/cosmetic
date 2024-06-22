<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const changePage = (url) => {
	router.push(url)
}
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
  },
  desc: String,
  default: ''
})
const emit = defineEmits(['btnClick'])
const handelClick = () => {
  emit('btnClick')
}
// const open = ref(false)

// const showModal = (bool) => {
//   open.value = bool;
// };
</script>
<template>
      <div class="w-[240px] h-[500px] text-center">
				<img
        :src="image" alt=""  @click="changePage('/productInform')" class="w-[200px] h-[290px] mx-4 cursor-pointer duration-500  hover:scale-95 hover:brightness-75 ">
				<h5 class="">{{ title }}</h5>
				<h6 >{{ prize }}</h6>
				<a-button class="bg-black" type="primary" @click="handelClick">加入購物車</a-button>
			</div>
  <!-- <a-modal v-model:open="open" :title="title" @ok="showModal(false)" :closable="false">
    <p>{{ desc }}</p>
    </a-modal> -->
</template>