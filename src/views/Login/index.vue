<script setup>
import axios from 'axios'
import CosLayout from '@/components/cosLayout/index.vue'
import { reactive } from 'vue';

const FormState = {
  username: String,
  password: String,
  remember: Boolean
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

// username:'emilys',
// password: 'emlypass',

const login = async(username, password) => {
    const data = await axios.post('https://dummyjson.com/auth/login' , {username, password})
		console.log(data);
  }

	login('emilys', 'emlypass')
</script>

<template>
<cos-layout>
		<div class="flex justify-center my-5">
			<div class="text-center border-solid border-2 w-[350px] h-[300px] rounded-md">
				<h2 class="mt-5 mb-3 pt-5">會員登入</h2>
						<!-- <form class="border-2 m-5 p-5 " style="border-radius:10px" action="">
							<input type="email" placeholder="電子郵件地址" required class="mb-3" ><br>
							<input type="password" placeholder="密碼" requied><br> -->
				<a-form
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
				</a-form>
							<a-button class="mt-3 mx-2 bg-pink">登入</a-button>
							<a-button class="mt-3 bg-pink">註冊帳號</a-button>
							<!-- </form> -->
			</div>
		</div>
</cos-layout>
</template>

<style scoped>

</style>