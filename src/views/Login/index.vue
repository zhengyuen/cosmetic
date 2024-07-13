<script setup>
import { reactive, onMounted, ref } from 'vue';
import { userApi } from '@/api/user'
// import { setToken, getToken } from '@/utils/localStorage';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

const userStore = useUserStore()
const formData = reactive({
		username:'',
		password:''
	})

const router = useRouter()
const goToHome = () => {
	router.push('/')
}

const token = ref(userStore.token)


// username:'emilys',
// password: 'emilyspass',

	// login('emilys', 'emilyspass')
const submit = async(e) => {
	e.preventDefault()
	console.log(formData.username, formData.password);
	try {
		const { code, data } = await userApi.login(formData.username, formData.password)
		if (code === 200) {
			const { token } = data
			userStore.setToken(token)
			message.success('登入成功')
			goToHome()
		}
	} catch(err){
			message.error('使用者名稱或密碼失敗')
	}
}

onMounted (()=> {
	if (token.value) {
		goToHome()
	}
})

</script>

<template>
	<div class=""></div>
			<div class="text-center border-solid border-[1px]  w-[350px] h-72 rounded-md mx-auto mb-6">
				<h2 class="mt-5 mb-3 pt-5 font-bold">會員登入</h2>
						<form @submit="submit" class="m-5 p-5 " action="">
							<label for="username" class="mr-3">信箱</label>
							<input v-model="formData.username" placeholder="電子郵件地址"  class="focus:outline-0 mb-3 w-52 border-2 border-solid rounded  py-1 pl-1" id="username"><br>
							<label for="password" class="mr-3">密碼</label>
							<input type="password" v-model="formData.password" placeholder="密碼"  class="focus:outline-0 mb-3 w-52 border-2 border-solid rounded px-2 py-1" id="password"><br>


						<button
						class="mt-3 mx-2 p-1 rounded bg-black text-white  hover:bg-modalGray hover:!text-white border-none disabled:bg-modalGray disabled:text-white" type="submit" :disabled="!formData.username ||!formData.password">登入</button>
						<button
						class="mt-3 p-1 rounded bg-black text-white hover:bg-modalGray hover:!text-white border-none disabled:bg-modalGray disabled:text-white" :disabled="!formData.username ||!formData.password">註冊帳號
						</button>
							</form>
							</div>
</template>

<style scoped>

</style>