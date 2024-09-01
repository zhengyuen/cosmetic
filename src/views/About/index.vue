<script setup>
import { ref, reactive } from 'vue';
import aboutCard from '@/components/aboutCard/index.vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const aboutCards = ref([
	{
		image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHFKP5wIy8hZoKCyGmFqmuOVxiwBypbt27LRMuB4Y2TC3gxAEQ',
		title: t('friendly_environment'),
		desc: t('friendly_desc')
	},
	{
		image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTc85qZ2hJh6T4-Yepsfo0LshAJ5X-lTZnT-S1NYVs3crOgMz9n',
		title: t('organic_certification'),
		isReverse: true,
		desc: t('organic_desc')
	},
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyIU22C6mXSUgaIdf7opxpUDJSzJtMMCOXN6fy1OKZ83eylbL',
		title: t('moisturizing'),
		desc: t('moisturizing_desc')
	},
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJghslzSVxmRBpQ-nNQft2LCY8DguVmobjjQ&s',
		title: t('perfect_repair'),
		isReverse: true,
		desc: t('perfect_desc')
	}
])


const form = reactive({
	name: '',
	email: ''
})

</script>

<template>
	<div >
		<div class="my-5 text-center">
			<h1 class="font-bold text-2xl my-10">{{ t('about_us') }}</h1>
			<about-card class="mx-auto"
			v-for="item in aboutCards"
			:key="item.title"
			:image="item.image"
			:title="item.title"
			:is-reverse="item.isReverse"
			:desc="item.desc"
			/>
		</div>
	</div>
	<div class="w-[500px] h-[200px] mx-auto mb-2 pt-8">
		<h1 class="text-center mb-2">{{ t('free_trial') }}</h1>
	<div class=" mx-auto text-center">
  <span class="mr-2"></span> <input class="w-[200px] h-8 border-2 rounded pl-2" :placeholder="$t('input_email')">
      <button class="bg-black text-white p-1 rounded" type="submit">{{ t('fill_send') }}</button>
	</div>
	</div>
</template>

<style scoped>
</style>