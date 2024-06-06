<script setup>
</script>

<template>
  <p>Member</p>
  <nav class="navbar  bg-white fixed-top navbar-expand-md navCtrl">
		<h1 class="navbar-brand p-2 m-1 fw-bold" style="font-size:30px;"><a href="index.html" class="nav-link">Cosmetic</a></h1>
		<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".collapse">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="navbar-collapse collapse justify-content-end fw-bold "style="font-size:17px;">
			<ul class="navbar-nav nav">
				<li class="nav-item"><a href="index.html" class="nav-link " >首頁</a></li>
				<li class="nav-item"><a href="about.html" class="nav-link" >關於我們</a></li>
				<li class="nav-item"><a href="intro.html" class="nav-link" >產品介紹</a></li>
				<li class="nav-item"><a href="cart.html" class="nav-link" ><img src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="" style="width:20px;height:20px"></a></li>
				<li class="nav-item"><a href="member.html" class="nav-link" ><img src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" style="width:20px;height:20px"></a></li>
			</ul>
		</div>
	</nav>
		<div id="container" class="d-flex justify-content-center">
			<div id="login" class="text-center">
				<h2 class="mt-5 pt-5">會員登入</h2>
						<form class="border border-2 m-5 p-5 " style="border-radius:10px" action="">
							<input type="email"placeholder="電子郵件地址" required class="mb-3" ><br>
							<input type="password" placeholder="密碼" requied><br>
							<button class="mt-3 btn btn-warning">登入</button>
							<button class="mt-3 btn btn-warning">註冊帳號</button>
							</form>	
			</div>
		</div>

</template>

<style scoped>

</style>