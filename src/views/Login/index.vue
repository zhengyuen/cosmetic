<script setup>
import { reactive, onMounted, ref } from 'vue';
import { userApi } from '@/api/user'
// import { setToken, getToken } from '@/utils/localStorage';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()


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
			<div class="text-center border-solid border-[1px]  w-[350px] h-72 rounded-md mx-auto mb-6">
				<h2 class="mt-5 mb-3 pt-5 font-bold">{{ t('member_login') }}</h2>
						<form @submit="submit" class="m-5 p-5 " action="">
							<label for="username" class="mr-3"></label>
							<input v-model.trim="formData.username" :placeholder="$t('input_email')"  class="focus:outline-0 mb-3 w-52 border-2 border-solid rounded  py-1 pl-1 text-black" id="username"><br>
							<label for="password" class="mr-3"></label>
							<input type="password" v-model.trim="formData.password" :placeholder="$t('input_password')"  class="focus:outline-0 mb-3 w-52 border-2 border-solid rounded px-2 py-1 text-black" id="password"><br>

							<button
							class="mt-3 mx-2 p-1 w-12 rounded bg-black text-white  hover:bg-modalGray hover:!text-white border-none disabled:bg-modalGray disabled:text-white" type="submit" :disabled="!formData.username ||!formData.password">{{ t('login') }}</button>
						</form>
				</div>
</template>

<style scoped>

</style>