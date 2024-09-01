<script setup>
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from 'vue';
import HomeCard from '@/components/homeCard/index.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const carouseImage = reactive([
	'https://images.pexels.com/photos/9775406/pexels-photo-9775406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	'https://images.pexels.com/photos/6847873/pexels-photo-6847873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	'https://images.pexels.com/photos/4841529/pexels-photo-4841529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
])

const homeCards = ref([
	{
		image: 'https://images.pexels.com/photos/6847825/pexels-photo-6847825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		title: t('brand_story'),
		desc: t('brand_desc')
	},
	{
		image: 'https://images.pexels.com/photos/19327517/pexels-photo-19327517/free-photo-of-hand-cream-in-a-bottle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		title: t('usage'),
		desc: t('usage_desc'),
		isReverse: 'ture'
	}
])
</script>

<template>
<a-carousel class="w-full mb-20" autoplay>
    <div v-for="(item, idx) in carouseImage" :key="idx">
			<img class="w-full h-[450px] object-cover" :src="item"/>
		</div>
  </a-carousel>
	<div >
		<home-card
		class="mx-auto"
		v-for="item in homeCards"
		:key="item.title"
		:image="item.image"
		:title="item.title"
		:desc="item.desc"
		:is-reverse="item.isReverse"
		/>
		</div>
</template>

<style scoped>
</style>