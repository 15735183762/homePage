window.onload=function(){
//轮播图效果
let imgs=document.querySelectorAll(".bannerimg li");
let dots=document.querySelectorAll(".btns li");
let lbtn=document.querySelector(".button-left");
let rbtn=document.querySelector(".button-right");
console.log(imgs,dots);
    imgs[0].style.zIndex=2;
	dots[0].style.background="#fff";
	for (let i=0;i<dots.length;i++) {
		dots[i].onclick=function(){
			for (let j=0;j<imgs.length;j++) {
				imgs[j].style.zIndex=1;
				dots[j].style.background="#B0B0B0";
			}
			imgs[i].style.zIndex=2;
			dots[i].style.background="#fff";
			num=i;
		}
	}
    let num=0;
	rbtn.onclick=function(){
		moveR();
	}
    function moveR() {
		num++;
		if(num==2){
			num=0;
		}
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.zIndex=1;
			dots[j].style.background="#B0B0B0";
		}
		imgs[num].style.zIndex=2;
		dots[num].style.background="#fff";
	}
	lbtn.onclick=function(){
		moveL();
	}
	function moveL() {
		num--;
		if(num<0){
			num=1;
		}
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.zIndex=1;
			dots[j].style.background="#B0B0B0";
		}
		imgs[num].style.zIndex=2;
		dots[num].style.background="#fff";
	}

//二维码
let weixin=document.querySelector(".weixin");
let erweima=document.querySelector(".erweima");
    weixin.onmouseover=function(){
	    erweima.style.opacity=1;
    }
    weixin.onmouseout=function(){
	    erweima.style.opacity=0;
    }
//头部动画效果
let header=document.querySelector(".header");
let nav=document.querySelectorAll(".nav li");
let huayi=document.querySelector(".huayisize");
let huayu=document.querySelector(".huayusize");
let left=document.querySelectorAll(".huayu-inner-down-in1");
let right=document.querySelectorAll(".huayu-inner-down-in2");
let office=document.querySelector(".officesize");
let section=document.querySelector("section");
header.style.borderBottom="none";
    window.onscroll=function(){
    	let bodytop=document.body.scrollTop || document.documentElement.scrollTop;
        if (bodytop>=20) {
    	    header.style.background="white"; 
            header.style.borderBottom="1px solid #e5e5e5";        
        }
        if(bodytop<20){
    	    header.style.background="rgba(0,0,0,0.15)";
            header.style.borderBottom="none";  
        }
        if(bodytop<=300){
        	huayi.style.transform="translateY(-80px)";
            huayi.style.opacity=0;
        }else{
        	huayi.style.transform="translateY(0)";
            huayi.style.opacity=1;
        }
        if (bodytop>=750) {
            back.style.display="block";
        }else{
            back.style.display="none";
        }
        if(bodytop<=1000){
        	huayu.style.transform="translateY(-80px)";
            huayu.style.opacity=0;
        }else{
        	huayu.style.transform="translateY(0)";
            huayu.style.opacity=1;
        }
        if(bodytop<=1000){
        	left[0].style.transform="translateX(-60px)";
            left[0].style.opacity=1;
        }
        else{
        	left[0].style.transform="translateX(0)";
            left[0].style.opacity=1;
        }
        if(bodytop<=1000){
        	right[0].style.transform="translateX(60px)";
            right[0].style.opacity=0;
        }else{
        	right[0].style.transform="translateX(0)";
            right[0].style.opacity=1;
        }
        if(bodytop<=1100){
        	left[1].style.transform="translateX(-60px)";
            left[1].style.opacity=0;
        }else{
        	left[1].style.transform="translateX(0)";
            left[1].style.opacity=1;
        }
        if(bodytop<=1100){
        	right[1].style.transform="translateX(60px)";
            right[1].style.opacity=0;
        }else{
        	right[1].style.transform="translateX(0)";
            right[1].style.opacity=1;
        }
        if(bodytop<=1200){
        	left[2].style.transform="translateX(-60px)";
            left[2].style.opacity=0;
        }else{
        	left[2].style.transform="translateX(0)";
            left[2].style.opacity=1;
        }
        if(bodytop<=1200){
        	right[2].style.transform="translateX(60px)";
            right[2].style.opacity=0;
        }else{
        	right[2].style.transform="translateX(0)";
            right[2].style.opacity=1;
        }
        if(bodytop<=1300){
        	left[3].style.transform="translateX(-60px)";
            left[3].style.opacity=0;
        }else{
        	left[3].style.transform="translateX(0)";
            left[3].style.opacity=1;
        }
        if(bodytop<=1300){
        	right[3].style.transform="translateX(60px)";
            right[3].style.opacity=0;
        }else{
        	right[3].style.transform="translateX(0)";
            right[3].style.opacity=1;
        }
        if(bodytop<=1700){
        	office.style.transform="translateY(-80PX)";
            office.style.opacity=0;
        }else{
        	office.style.transform="translateY(0)";
            office.style.opacity=1;
        }
        if(bodytop<=1900){
        	section.style.transform="translateY(100PX)";
            section.style.opacity=0;
        }else{
        	section.style.transform="translateY(0)";
            section.style.opacity=1;
        }
    }
//返回顶部
let back=document.querySelector(".backtop");
backtop(back);
    function backtop (back) {
	    back.onclick=function(){
		    let res=document.body.scrollTop || document.documentElement.scrollTop;
		    animate(document.body,{scrollTop:0});
		    animate(document.documentElement,{scrollTop:0});
	    }
    }
}
