<script setup>
</script>

<template>
  <p>home</p>
  <nav class="navbar  bg-white fixed-top navbar-expand-md navctrl">
		<h1 class="navbar-brand text-dark p-2 m-1 fw-bold"  style="font-size:30px"><a href="index.html" class="nav-link">Cosmetic</a></h1>
		<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".collapse">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="navbar-collapse collapse justify-content-end fw-bold" style="font-size:17px;">
			<ul class="navbar-nav nav">
				<li class="nav-item"><a href="index.html" class="nav-link text-warning" >首頁</a></li>
				<li class="nav-item"><a href="about.html" class="nav-link" >關於我們</a></li>
				<li class="nav-item"><a href="intro.html" class="nav-link" >產品介紹</a></li>
				<li class="nav-item"><a href="cart.html" class="nav-link" ><img src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="" style="width:20px;height:20px"></a></li>
				<li class="nav-item"><a href="member.html" class="nav-link" ><img src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" style="width:20px;height:20px"></a></li>
			</ul>
		</div>
	</nav>
	<div class="container-fluid">
		<div class="row">
			<div class="col p-0">
				<!-- 輪播照片 -->
				<div class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
					<a href=".carousel" data-bs-slide="prev" class="carousel-control-prev"><i class="carousel-control-prev-icon"></i></a>
					<a href=".carousel" data-bs-slide="next" class="carousel-control-next"><i class="carousel-control-next-icon"></i></a>

					<div class="carousel-inner">
						<div class="carousel-item active" id="p1"><!--<img src="images/banner1.jpg" alt="" class="img-fluid">--></div>
						<div class="carousel-item" id="p2"><!--<img src="images/banner2.jpg" alt="" class="img-fluid">--></div>
						<div class="carousel-item" id="p3"><!--<img src="images/banner3.jpg" alt="" class="img-fluid">--></div>
					</div>
					<ul class="carousel-indicators list-unstyled">
						<li data-bs-target=".carousel" data-bs-slide-to="0" class="rounded-circle active" style="width:10px;height:10px"></li>
						<li data-bs-target=".carousel" data-bs-slide-to="1" class="rounded-circle" style="width:10px;height:10px"></li>
						<li data-bs-target=".carousel" data-bs-slide-to="2" class="rounded-circle" style="width:10px;height:10px"></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="row my-5">
			<div class="offset-md-3 col-12 col-md-3 my-3">
				<img src="https://images.pexels.com/photos/6847825/pexels-photo-6847825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="img-fluid mx-auto d-block" style="width:200px;height:200px">
			</div>
			<div class="col-12 col-md-3 my-3" style="text-center ">
				<h5 class="mb-5">品牌故事</h5>
				<h4 class="text" style="color: #E1D2D2">賦予我一個美好的靈魂,我的外表也將一同美麗。</h4>
			</div>
		</div>

		<div class="row d-flex justify-content-center">
			<div class="col-12 col-md-3 text-center my-3">
				<h5 class="mb-5">用法</h5>
				<h4 class="text" style="color: #E1D2D2">美的事物是永恆的喜悅。——濟慈</h4>
			</div>
			<div class="col-12 col-md-3 my-3 pb-5 text-center">
				<img src="https://images.pexels.com/photos/19327517/pexels-photo-19327517/free-photo-of-hand-cream-in-a-bottle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="img-fluide" style="width:200px;height:250px">
			</div>
			<footer>
				<div class="row">
					<h6 class="my-3">聯絡我們<br>信箱：cosmetic@gmail.com</h6>
					<div class="d-flex justify-content-center img-fluid position-absolute" style="width:10px height:10px">
					<img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="" class="me">
				<img src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png" alt="" class="me">
				<img src="https://cdn-icons-png.flaticon.com/128/13266/13266170.png" alt="" class="me">
				<img src="https://cdn-icons-png.flaticon.com/128/167/167649.png" alt="" class="me">
					</div>
				</div>
		</footer>
	</div>
</div>
</template>

<style scoped>
	#p1{
	background-image: url('https://images.pexels.com/photos/9775406/pexels-photo-9775406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
}
#p2{
	background-image: url('https://images.pexels.com/photos/6847873/pexels-photo-6847873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
}
#p3{
	background-image: url('image/come1.jpeg');
}

</style>