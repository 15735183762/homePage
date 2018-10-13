window.onload=function(){
	let position=document.querySelectorAll(".banner p")[0];
	let citys=document.querySelector(".citys");
	let cancel=document.querySelector(".search p");
	let main=document.querySelector("main");
	position.onclick=function(){
		citys.style.display="block";
		main.style.display="none";
	}
	cancel.onclick=function(){
		citys.style.display="none";
		main.style.display="block";
	}
}
