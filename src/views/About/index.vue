<script setup>
</script>

<template>
  <p>About</p>
  <nav class="navbar  fixed-top navbar-expand-md px-3">
		<h1 class="navbar-brand p-2 m-1 fw-bold" style="font-size:30px;"><a href="index.html" class="nav-link">Cosmetic</a></h1>
		<button class="navbar-toggler ctrl" data-bs-toggle="collapse" data-bs-target=".collapse">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="navbar-collapse collapse justify-content-end fw-bold "style="font-size:17px;">
			<ul class="navbar-nav nav">
				<li class="nav-item"><a href="index.html" class="nav-link " >首頁</a></li>
				<li class="nav-item"><a href="about.html" class="nav-link text-warning" >關於我們</a></li>
				<li class="nav-item"><a href="intro.html" class="nav-link " >產品介紹</a></li>
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
	
	<div id="exp" class="img-fluid">
		<div class="row my-5 text-center">
			<h1 class="mb-5 pb-5 py-5 fw-bold">關於我們</h1>
			<div class="offset-md-3 col-12 col-md-3">
				<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHFKP5wIy8hZoKCyGmFqmuOVxiwBypbt27LRMuB4Y2TC3gxAEQ" alt="" class="img-fluid mx-auto d-block" >
			</div>
			<div class="col-12 col-md-3 text-center align-items-center">
				<h5 class=" border-3 border-start py-3 text-muted" data-bs-toggle="modal" data-bs-target="#intro1">友善環境</h5>
			</div>
		
			<div class="row d-flex justify-content-center">
				<div class="col-12 col-md-3 text-center py-5 mt-5">
					<h5 class="border-3 border-end py-3 mb-5 text-muted" data-bs-toggle="modal" data-bs-target="#intro2">有機認證</h5>
				</div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyIU22C6mXSUgaIdf7opxpUDJSzJtMMCOXN6fy1OKZ83eylbL" alt="" class="img-fluid p-3" style="width:190px;height:190px">
			</div>
			<div class="offset-md-3 col-12 col-md-3 ">
				<img src="" alt="" class="img-fluid mx-auto d-block" >
			</div>
			<div class="col-12 col-md-3 text-center  py-3">
				<h5 class="border-3 border-start py-3 mb-5 text-muted" data-bs-toggle="modal" data-bs-target="#intro3">超保濕</h5>

			</div>
		</div>
			<div class="row d-flex justify-content-center">
		<div class="col-12 col-md-3 text-center  ">
			<h5 class="border-3 border-end  py-3 mb-5 text-muted" data-bs-toggle="modal" data-bs-target="#intro4">完美修護</h5>
		</div>
		<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ58CAsE5WK3cG8RvDnf8imlMTuXyvCNJy2CfxZw-ChU7IrtGli" alt="" class="img-fluid mt-3 p-3" style="width:100px;height:100px">
	</div>

</div>
<div>
	<div class="modal fade" id="intro1">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-body bg-white ">
				<h3 class="text-warning">友善環境</h3>
				<p class="text-start">秉持ESG企業原則，產品包裝皆為環境可分解之產物，在使用產品時也同時在愛護地球。</p>
			</div>
		</div>
	</div>
</div>
<div>
	<div class="modal fade" id="intro2">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-body bg-white ">
				<h3 class="text-warning">有機認證</h3>
				<p class="text-start">所使用的原料皆為有機認證的純原料。</p>
			</div>
		</div>
	</div>
</div>
<div>
	<div class="modal fade" id="intro3">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-body bg-white ">
				<h3 class="text-warning">超保濕</h3>
				<p class="text-start">含有盧繪成分高保濕效果。</p>
			</div>
		</div>
	</div>
</div>
	<div class="modal fade" id="intro4">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-body bg-white ">
				<h3 class="text-warning">完美修護</h3>
				<p class="text-start">成分含有自由基能完美修復肌膚。</p>
			</div>
		</div>
	</div>
	<!-- <form action="">
		<fieldset >
			<p>
				<legend class="h5">與我們聯繫</legend><br>
			</p>
			<p>
				<label for="name">您的姓名：</label><input type="text">
			</p><br>
			<p>
				<label for="email">您的信箱：</label><input type="email">
			</p><br>
			<input type="submit" value="填好送出">
		</fieldset>
		<br>
	</form> -->
	<form action="">
		<fieldset>
			<h3>與我們聯繫</h3>
			<input type="email" placeholder="請輸入您的電子郵件" ><input type="submit" value="填好送出"><br>
			<input type="text" placeholder="請輸入您的姓名" ><input type="submit" value="填好送出">
			<p class="text-center">免費拿試用品</p>
		</fieldset>
	</form>

	<div class="row " style="background-color: #FFEFC7;">
			<h6 class="my-3 text-center">聯絡我們<br>信箱:cosmetic@gmail.com</h6>
			<div class="d-flex justify-content-center img-fluid position-absolute" style="width:10px height:10px">
				<img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="" class="me">
				<img src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png" alt="" class="me">
				<img src="https://cdn-icons-png.flaticon.com/128/13266/13266170.png" alt="" class="me">
				<img src="https://cdn-icons-png.flaticon.com/128/167/167649.png" alt="" class="me">
			</div>
	 </div>


</template>

<style scoped>

</style>