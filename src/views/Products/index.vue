<script setup>
</script>
<template>
  <p>Products</p>
  <nav class="navbar  bg-white fixed-top navbar-expand-md px-3">
		<h1 class="navbar-brand p-2 m-1 fw-bold" style="font-size:30px;"><a href="index.html" class="nav-link">Cosmetic</a></h1>
		<button class="navbar-toggler ctrl" data-bs-toggle="collapse" data-bs-target=".collapse">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="navbar-collapse collapse justify-content-end fw-bold "style="font-size:17px;">
			<ul class="navbar-nav nav">
				<li class="nav-item"><a href="index.html" class="nav-link " >首頁</a></li>
				<li class="nav-item"><a href="about.html" class="nav-link" >關於我們</a></li>
				<li class="nav-item"><a href="intro.html" class="nav-link text-warning" >產品介紹</a></li>
				<li class="nav-item"><a href="cart.html" class="nav-link" ><img src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="" style="width:20px;height:20px"></a></li>
				<li class="nav-item"><a href="member.html" class="nav-link" ><img src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" style="width:20px;height:20px"></a></li>
			</ul>
		</div>
	</nav>
	<div class="container-fluid">
		<div class="row" id="banner">
			<div class="col p-0">

			</div>
		</div>
		</div>
	<div id="text" class="img-fluid">
		<h1 class="fw-bold mt-5 pt-5 text-center">產品介紹</h1>
		<div class="row  text-center justify-content-center">
			<h3 class="product-list-title">
			<ins class="yellow mt-3 pt-5 pb-3 fw-bold d-flex justify-content-center"style="color: #E1D2D2">經典組合</ins></h3>
			<div class="col-12 col-md-3"><img src="https://images.pexels.com/photos/6847873/pexels-photo-6847873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="img-fluid"  style="width:200px;height:290px"data-bs-toggle="modal" data-bs-target="#intro1">
				<h5 class="mt-3">極保濕修護組</h5>
				<h6 >$1,069</h6>
				<button class="btn btn-dark mb-5"><a href="cart.html" class="nav-link">加入購物車</a></button>
			</div>
			<div class="col-12 col-md-3"><img src="https://images.pexels.com/photos/9775406/pexels-photo-9775406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="img-fluid" style="width:200px;height:290px" data-bs-toggle="modal" data-bs-target="#intro2"><h5 class="mt-3">青春抗痘組</h5>
				<h6 >$1,630</h6>
				<button class="btn btn-dark mb-5"><a href="cart.html" class="nav-link">加入購物車</a></button>
			</div>
			<div class="col-12 col-md-3"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTagyYX9g8YZ7M_7alrjMtz8nVDzTHQwSGfDIw07-D6hpTwCK24" alt="" class="img-fluid " data-bs-toggle="modal" data-bs-target="#intro4"><h5 class=mt-3>亮白美顏組</h5>
					<h6 >$1,900</h6><button class="btn btn-dark mb-5"><a href="cart.html" class="nav-link">加入購物車</a></button>
				</div>
			</div>

			<div class="row text-center justify-content-center">
				<h3 class="product-list-title">
			<ins class="yellow mt-3 pt-5 pb-3 fw-bold d-flex justify-content-center "style="color: #E1D2D2">乳液</ins></h3>
				<div class="col-12 col-md-3"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbFerpSCZl1PirhiyZyir2ZmFon9aIB1Hmg-y8cSzxXNGTi2NB" alt="" class="img-fluid " data-bs-toggle="modal" data-bs-target="#intro3">
				<h5 class="mt-3">極保濕乳液</h5>
				<h6>$500</h6>
				<button class="btn btn-dark mb-5"><a href="cart.html" class="nav-link">加入購物車</a></button>
			</div>
				
				<div class="col-12 col-md-3"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9rvrygOBC3o6DG_QvlLPbK6z7PNZx13ihP0l3v00YiJ31hjhE" alt="" class="img-fluid " data-bs-toggle="modal" data-bs-target="#intro5"><h5 class="mt-3">毛孔緊緻霜</h5>
					<h6 >$900</h6>
					<button class="btn btn-dark mb-5"><a href="cart.html" class="nav-link">加入購物車</a></button>
				</div>
				<div class="col-12 col-md-3"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnbmE_tKOy2tLQKSakJzUX92LSC8lHMjLgbU4q9VDV2ZpqM_-4" alt="" class="img-fluid  " data-bs-toggle="modal" data-bs-target="#intro6"><h5 class=mt-3>亮白乳液</h5>
					<h6>$1,050</h6><button class="btn btn-dark mb-5"><a href="cart.html" class="nav-link">加入購物車</a></button>
				</div>
			</div>
			<div class="row " style="background-color: #FFEFC7;">
			<h6 class="my-3 text-center">聯絡我們<br>信箱：cosmetic@gmail.com</h6>
			<div class="d-flex justify-content-center img-fluid position-absolute" style="width:10px height:10px">
				<img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="" class="me">
				<img src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png" alt="" class="me">
				<img src="https://cdn-icons-png.flaticon.com/128/13266/13266170.png" alt="" class="me">
				<img src="https://cdn-icons-png.flaticon.com/128/167/167649.png" alt="" class="me">
			</div>	
		<!-- <--<footer>
				<div class="row">
					<h6 class="my-3">聯絡我們<br>信箱：cosmetic@gmail.com</h6>
					<div class="d-flex justify-content-center img-fluid position-absolute" style="width:10px height:10px">
						<img src="image/instagram.png" alt="" class="me">
						<img src="image/youtube.png" alt="" class="me">
						<img src="image/social-media.png" alt="" class="me">
						<img src="image/line.png" alt="" class="me">
					</div>
				</div> --> 

			<div>
				<div class="modal fade" id="intro1">
					<div class="modal-dialog modal-lg modal-dialog-centered" style="width:600px;height:50px;">
						<div class="modal-body bg-white ">
							<img src="https://images.pexels.com/photos/6847873/pexels-photo-6847873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="justify-content-center"style="width:200px;height:300px;">
							<div style="position:relative;right:-220px;bottom:200px">
								<h3 class="" style="color:#D6A0A0;font-family:標楷體;">極保濕修護組</h3>
								<p class="text-start">極保濕化妝水、乳液、面膜<br>三重保濕效果，極度鎖住肌膚的水分。<br>質感細膩不油膩，使你擁有會呼吸的水嫩肌膚。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="modal fade" id="intro2">
					<div class="modal-dialog modal-lg modal-dialog-centered" style="width:600px;height:50px;">
						<div class="modal-body bg-white p-3">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eDqj61p-pWgpAd5gejdMkB5Ugl0y66LfFwSbvFEGJhEBmJdr" alt="" class="justify-content-center"style="width:200px;height:300px;">
							<div style="position:relative;right:-220px;bottom:200px">
								<h3 class="text-warning" style="color:#D6A0A0;font-family:標楷體;">青春抗痘組</h3>
								<p class="text-start">有效抗痘洗面乳、乳液、凝膠<br>在抗痘的同時也保護你的肌膚<br>使你的臉青春藏不住。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="modal fade" id="intro3">
					<div class="modal-dialog modal-lg modal-dialog-centered" style="width:600px;height:50px;">
						<div class="modal-body bg-white ">
							<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbFerpSCZl1PirhiyZyir2ZmFon9aIB1Hmg-y8cSzxXNGTi2NB" alt="" class="justify-content-center"style="width:200px;height:300px;">
							<div style="position:relative;right:-220px;bottom:200px">
								<h3 class="" style="color:#D6A0A0;font-family:標楷體;">極保濕乳液</h3>
								<p class="text-start">小分子快速滲透<br>使你的肌膚能最有效的吸收。<br>質感細膩不油膩，使你擁有會呼吸的水嫩肌膚。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="modal fade" id="intro4">
					<div class="modal-dialog modal-lg modal-dialog-centered" style="width:600px;height:50px;">
						<div class="modal-body bg-white ">
							<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTagyYX9g8YZ7M_7alrjMtz8nVDzTHQwSGfDIw07-D6hpTwCK24" alt="" class="justify-content-center"style="width:200px;height:300px;">
							<div style="position:relative;right:-220px;bottom:200px">
								<h3 class="" style="color:#D6A0A0;font-family:標楷體;">亮白美顏組</h3>
								<p class="text-start">極亮白化妝水、乳液、面膜<br>三重亮白效果，徹底消滅黑色素。<br>抗皺抗蠟黃，使你擁有天然好氣色。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="modal fade" id="intro5">
					<div class="modal-dialog modal-lg modal-dialog-centered" style="width:600px;height:50px;">
						<div class="modal-body bg-white ">
							<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9rvrygOBC3o6DG_QvlLPbK6z7PNZx13ihP0l3v00YiJ31hjhE" alt="" class="justify-content-center"style="width:200px;height:300px;">
							<div style="position:relative;right:-220px;bottom:200px">
								<h3 class="text-warning" style="color:#D6A0A0;font-family:標楷體;">毛孔緊緻霜</h3>
								<p class="text-start">含有自由基<br>快速修復肌膚老化和緊緻毛孔。<br>使你輕鬆擁有水煮蛋肌。。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="modal fade" id="intro6">
					<div class="modal-dialog modal-lg modal-dialog-centered" style="width:600px;height:50px;">
						<div class="modal-body bg-white ">
							<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnbmE_tKOy2tLQKSakJzUX92LSC8lHMjLgbU4q9VDV2ZpqM_-4" alt="" class="justify-content-center"style="width:200px;height:300px;">
							<div style="position:relative;right:-220px;bottom:200px">
								<h3 class="" style="color:#D6A0A0;font-family:標楷體;">亮白乳液</h3>
								<p class="text-start">亮白乳液<br>超亮白效果，快速消滅黑色素。<br>抗皺抗蠟黃，使你擁有天然好氣色。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
</div>
</template>

<style scoped>

</style>
