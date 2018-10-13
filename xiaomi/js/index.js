window.onload=function(){
//	购物车下拉效果
	let cart=document.querySelector(".cart");
	let cartlist=document.querySelector(".cartlist");
shopcart(cart,cartlist);
	
//	侧拉选项卡
	let li=document.querySelectorAll(".banner-tab-container-main");
	let leftList=document.querySelectorAll(".leftlist");
sidepull(li,leftList);
	
//  下拉选项卡
    let menu=document.querySelectorAll(".container-middle-info");
	let menuinfo=document.querySelectorAll(".drop-menu");
pull(menu,menuinfo);
	
//	左右箭头按钮效果
	let buttonLeft=document.querySelector(".button-left");
	let buttonRight=document.querySelector(".button-right");
button(buttonLeft,buttonRight);

//  主体下拉选项卡
    let appliances1=document.querySelectorAll(".appliances-top-right1 li a");
	let appliancesinfo1=document.querySelectorAll(".mainmessage1");
	
	let appliances2=document.querySelectorAll(".appliances-top-right2 li a");
	let appliancesinfo2=document.querySelectorAll(".mainmessage2");
	
	let appliances3=document.querySelectorAll(".appliances-top-right3 li a");
	let appliancesinfo3=document.querySelectorAll(".mainmessage3");
	
	let appliances4=document.querySelectorAll(".appliances-top-right4 li a");
	let appliancesinfo4=document.querySelectorAll(".mainmessage4");
	
	let appliances5=document.querySelectorAll(".appliances-top-right5 li a");
	let appliancesinfo5=document.querySelectorAll(".mainmessage5");
appliancespull(appliances1,appliancesinfo1);
appliancespull(appliances2,appliancesinfo2);
appliancespull(appliances3,appliancesinfo3);
appliancespull(appliances4,appliancesinfo4);
appliancespull(appliances5,appliancesinfo5);

//  banner轮播图
	let dots=document.querySelectorAll(".btns li");
	let imgs=document.querySelectorAll(".banner .bannerimg li a img");
	let bannerLB=document.querySelector(".banner");
	let lbtn=document.querySelector(".button-left");
	let rbtn=document.querySelector(".button-right");
bannerimg(dots,imgs,bannerLB,lbtn,rbtn);
	
//	内容左右轮播
    let banner = document.querySelector(".component-container-down-info4");
	let box=document.querySelectorAll(".component-container-down-info4 li");
	let dot=document.querySelectorAll(".dot1");
	let leftBtn = document.querySelector(".component-buttonleft1");
	let rightBtn = document.querySelector(".component-buttonright1");
	
	let banner1 = document.querySelector(".component-container-down-info3");
	let box1=document.querySelectorAll(".component-container-down-info3 li");
	let dot1=document.querySelectorAll(".dot2");
	let leftBtn1 = document.querySelector(".component-buttonleft2");
	let rightBtn1 = document.querySelector(".component-buttonright2");
	
	let banner2 = document.querySelector(".component-container-down-info2");
	let box2=document.querySelectorAll(".component-container-down-info2 li");
	let dot2=document.querySelectorAll(".dot3");
	let leftBtn2 = document.querySelector(".component-buttonleft3");
	let rightBtn2 = document.querySelector(".component-buttonright3");
	
	let banner3 = document.querySelector(".component-container-down-info1");
	let box3=document.querySelectorAll(".component-container-down-info1 li");
	let dot3=document.querySelectorAll(".dot4");
	let leftBtn3 = document.querySelector(".component-buttonleft4");
	let rightBtn3 = document.querySelector(".component-buttonright4");	
	let widths = parseInt(getComputedStyle(banner,null).width);
lunbo(box,dot,leftBtn,rightBtn,banner,widths);
lunbo(box1,dot1,leftBtn1,rightBtn1,banner1,widths);
lunbo(box2,dot2,leftBtn2,rightBtn2,banner2,widths);
lunbo(box3,dot3,leftBtn3,rightBtn3,banner3,widths);	

//  小米闪购平移
    let leftB=document.querySelector(".xiaomichoose-top-left-container");
	let rightB=document.querySelector(".xiaomichoose-top-right-container");
	let con=document.querySelector(".xiaomichoose-bottom-right ul");
xiaomichoose(leftB,rightB,con);

//  返回顶部
    let back=document.querySelector(".topback");
backtop(back);
}