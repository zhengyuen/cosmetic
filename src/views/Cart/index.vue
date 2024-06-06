<script setup>
</script>

<template>
  <p>Cart</p>
  <nav class="navbar  bg-white fixed-top navbar-expand-md navCtrl">
		<h1 class="navbar-brand p-2 m-1 fw-bold" style="font-size:30px;"><a href="index.html" class="nav-link">Cosmetic</a></h1>
		<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".collapse">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="navbar-collapse collapse justify-content-end fw-bold "style="font-size:17px;">
			<ul class="navbar-nav nav">
				<li class="nav-item"><a href="index.html" class="nav-link " >首頁</a></li>
				<li class="nav-item"><a href="about.html" class="nav-link" >關於我們</a></li>
				<li class="nav-item"><a href="intro.html" class="nav-link " >產品介紹</a></li>
				<li class="nav-item"><a href="cart.html" class="nav-link text-warning" ><img src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="" style="width:20px;height:20px"></a></li>
				<li class="nav-item"><a href="member.html" class="nav-link" ><img src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" style="width:20px;height:20px"></a></li>
			</ul>
		</div>
	</nav>
	<div class="container-fluid">
		<div class="row" id="banner">
			<div class="col p-0">		
				
		
	<div id="text" class="col-12 mb-5 mt-5 pt-5 text-center">
		<h1 class=""mb-3 mt-3>我的購物車</h1>
		<p>目前沒有商品在購物車喔!</p>
			<img src="./pexels-photo-4841481.webp" alt="" class="rounded-circle" style="width:300px;height:300px;">
			<a href="https://0206hom-cosmetic.netlify.app/intro">
			<button class="border-0 bg-white text-warning h5 ">繼續購物--></button></a>
			</div>
		</div>
		<!-- <div  id="bgArea">

			<a href="https://0206hom-cosmetic.netlify.app/intro"> 
				<img src="image/pic05.jpg" alt=""></a>
				<span id="btn" class="border border-0 mt-0 " style="position:relative;top:-80px;left:200px">&times;</span>	
				<div style="position:relative;left:150px;top:-130px">
					<p>極保濕修護組</p>
					<p>單價$1,069元</p>
					<ul class="counter quantity-toggle " >
						<li id="minus"><input type="button" onclick="minuser()" value="-"/></li>
						<li id="countnum">1</li>
						<li id="plus"><input type="button" onclick="adder()" value="+"/></li>
					</ul>
				</div> -->
			<!-- 	<div class="counter ">
					<button id="minus" onclick="minuser()" value="-"/>-</button>
					<input id="countnum" type="text" min="1" value="1">
					<button id="plus"  onclick="adder()" value="+"/>+</button>
				</div>	 -->	
		
		<div id="know" class="col-12  border border-2 text-center justify-content-center ">
			<div class="row">
				<div class="col-12 flex justify-content-center ">
					<h3>購物須知</h3>
					<ul class="list-unstyled ">
						<li>1. 運費國內超商店到店為60元，郵寄60元，滿1,200免運費。</li>
						<li>2. 若商品有缺損或想更改，退款和換貨請在七天前申請。</li>
						<li>3. 付款後三日內及會出貨，若遇國定假日和週末則在工作日開始出貨。</li>
					</ul>
					<h3>客服專線</h3>
					<ul class="list-unstyled ">
						<li>電話：00-000000</li>
						<li>信箱：cosmetic@gmail.com</li>
					</ul>
				</div>
			</div>
		<!-- <div class="col col-md-6  justify-content-center end"><img src="image/pexels-photo-4841481.webp" alt="" class="img-fluid rounded-circle" style="width:400px;height:400px"></div> -->
		
			<!-- <div class="row">
				<footer>
				<h6 class="my-3">聯絡我們<br>信箱：cosmetic@gmail.com</h6>
				<div class="d-flex justify-content-center img-fluid " style="width:10px height:10px" class="position-absolute">
					<img src="image/instagram.png" alt="" class="me">
					<img src="image/youtube.png" alt="" class="me">
					<img src="image/social-media.png" alt="" class="me">
					<img src="image/line.png" alt="" class="me">
				</div>
			
		</footer> -->
		<div class="row " style="background-color: #FFEFC7;">
			<h6 class="my-3 text-center">聯絡我們<br>信箱：cosmetic@gmail.com</h6>
			<div class="d-flex justify-content-center img-fluid position-absolute" style="width:10px height:10px">
				<img src="./instagram.png" alt="" class="me">
				<img src="./youtube.png" alt="" class="me">
				<img src="./social-media.png" alt="" class="me">
				<img src="./line.png" alt="" class="me">
			</div>	
		
		</div>
		</div>
	</div>
		</div>
</template>

<style scoped>

</style>