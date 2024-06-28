<script setup>
import CosLayout from '@/components/cosLayout/index.vue'
import { reactive, onMounted, ref } from 'vue';
import { userApi } from '@/api/user'
import { setToken, getToken } from '@/utils/localStorage';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router'

const formData = reactive({
		username:'',
		password:''
	})

const router = useRouter()
const goToHome = () => {
	router.push('/')
}

const token = ref(getToken)
// const FormState = {
//   username: String,
//   password: String,
//   remember: Boolean
// }

// const formState = reactive<FormState>({
//   username: '',
//   password: '',
//   remember: true,
// });
// const onFinish = (values) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

// username:'emilys',
// password: 'emilyspass',

	// login('emilys', 'emilyspass')
const submit = async(e) => {
	e.preventDefault()
	try {
		const { code, data } = await userApi.login(username, password)
		if (code === 200) {
			const { token } = data
			setToken(token)
			message.success('登入成功')
			goToHome()
		}
	} catch(err){
			message.success('使用者名稱或密碼失敗')
	}
}

// onMounted (()=> {
// 	if (token.value) {
// 		goToHome()
// 	}
// })
</script>

<template>
<cos-layout>
			<div class="text-center border-solid border-[1px]  w-[350px] h-72 rounded-md mx-auto mb-6">
				<h2 class="mt-5 mb-3 pt-5 font-bold">會員登入</h2>
						<form @submit="submit" class="m-5 p-5 " action="">
							<label for="username" class="mr-3">信箱</label>
							<input type="email" v-model="formData.username" placeholder="電子郵件地址"  class="mb-3 w-52 border-2 border-solid rounded  py-1" id="username"><br>
							<label for="password" class="mr-3">密碼</label>
							<input type="password" v-model="formData.password" placeholder="密碼"  class="mb-3 w-52 border-2 border-solid rounded px-2 py-1" id="password"><br>
				<!-- <a-form
					:model="formState"
					name="basic"
					:label-col="{ span: 8 }"
					:wrapper-col="{ span: 16 }"
					autocomplete="off"
					@finish="onFinish"
					@finishFailed="onFinishFailed"
				>
				<a-form-item class="w-[300px] mx-auto"
					label="使用者帳號"
					name="username"
					:rules="[{ required: true, message: 'Please input your username!' }]"
				>
					<a-input v-model:value="formState.username" />
				</a-form-item>

				<a-form-item class="w-[300px] mx-auto"
					label="密碼"
					name="password"
					:rules="[{ required: true, message: 'Please input your password!' }]"
				>
					<a-input-password v-model:value="formState.password" />
				</a-form-item>

					<a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
						<a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
					</a-form-item>
				</a-form>-->
							<button class="mt-3 mx-2 p-1 rounded bg-black text-white  hover:bg-modalGray hover:!text-white border-none disabled:bg-modalGray disabled:text-white" type="submit" :disabled="!formData.username ||!formData.password">登入</button>
							<button class="mt-3 p-1 rounded bg-black text-white hover:bg-modalGray hover:!text-white border-none disabled:bg-modalGray disabled:text-white" :disabled="!formData.username ||!formData.password">註冊帳號</button>
							</form>
							</div>
			<!-- </div>
		</div> -->
</cos-layout>
</template>

<style scoped>

</style>