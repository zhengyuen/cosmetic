<script setup>
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons-vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { message } from 'ant-design-vue';
import { useProductStore } from '@/store/product';

const productStore = useProductStore()

const userStore = useUserStore()
const router = useRouter()
const changePage = (url) => {
	router.push(url)
}

const cartAmount = computed(() => {
	let amount = 0
	for (const item of productStore.cart) {
		amount += item.quantity
	}
	return amount
})

const token = computed(() => userStore.token)
const menuList = ref([
	{
		key: '/',
		name: '首頁'
	},
	{
		key: '/about',
		name: '關於我們'
	},
	{
		key: '/products',
		name: '產品介紹'
	},
	{
		key: '/cart',
		icon: 'cart'
	},
	{
		key: '/member',
		icon: 'member'
	},
	// {
	// 	key: '/login',
	// 	name: '登入'
	// },
])
const footerImages = ref([
	'https://cdn-icons-png.flaticon.com/128/1384/1384031.png',
	'https://cdn-icons-png.flaticon.com/128/1077/1077046.png',
	'https://cdn-icons-png.flaticon.com/128/13266/13266170.png',
	'https://cdn-icons-png.flaticon.com/128/167/167649.png'

])
const logout = () =>{
	userStore.setToken('')
	message.success('登出成功')
}
</script>


<template>
  <div class="flex flex-col min-h-screen">
    <nav class="container mx-auto h-[76px]">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl font-bold cursor-pointer" @click="changePage('/')">
        Cosmetic
        </h1>
        <ul class="flex items-center">
          <li v-for="item in menuList" :key="item.key" class="flex items-center mr-4 text-lg leading-[76px] cursor-pointer last:mr-0" @click="changePage(item.key)">
            <span v-if="item.name">{{ item.name }}</span>
            <template v-if="item.icon">
              <a-badge v-if="item.icon ==='cart'" :count="cartAmount" size="small">
              <ShoppingCartOutlined class="text-lg" />
              </a-badge>
              <UserOutlined v-else />
            </template>
          </li>
          <li v-if="!token" class="flex items-center mr-4 text-lg leading-[76px] cursor-pointer last:mr-0"  @click="changePage('/login')">
            登入
          </li>
          <li v-else class="flex items-center mr-4 text-lg leading-[76px] cursor-pointer last:mr-0"  @click="logout">
            登出
          </li>
        </ul>
      </div>
    </nav>
    <div class="flex-1">
      <slot />
    </div>
    <footer class="bg-footerColor">
          <h6 class="text-center py-4">聯絡我們<br>信箱：cosmetic@gmail.com</h6>
          <div class="flex justify-center">
            <img class="w-[30px] h-[30px] my-3 mx-4" v-for="(item, idx) in footerImages" :key="idx" :src="item" :alt="idx">
            </div>
            <!-- <h6 class="text-right py-4">© 2024 Cosmetic All Right Reserved</h6> -->
      </footer>
  </div>
</template>

<style scoped>

</style>