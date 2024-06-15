<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
</script>

<template>
<cos-layout>
		<div class="flex justify-center my-5">
			<div class="text-center border-solid border-2 w-[300px] h-[300px] rounded-md">
				<h2 class="mt-5 pt-5">會員登入</h2>
						<form class="border border-2 m-5 p-5 " style="border-radius:10px" action="">
							<input type="email"placeholder="電子郵件地址" required class="mb-3" ><br>
							<input type="password" placeholder="密碼" requied><br>
							<a-button class="mt-3 mx-2 bg-pink">登入</a-button>
							<a-button class="mt-3 bg-pink">註冊帳號</a-button>
							</form>	
			</div>
		</div>
</cos-layout>
</template>

<style scoped>

</style>