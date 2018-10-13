window.onload=function(){
//返回顶部
let back=document.querySelector(".backtop");
backtop(back);
//右侧固定栏左滑
let icon1=document.querySelector(".icon1");
let hidden1=document.querySelector(".iconhidden1");
leftSlide(icon1,hidden1);
let icon2=document.querySelector(".icon2");
let hidden2=document.querySelector(".iconhidden2");
leftSlide(icon2,hidden2);
let icon3=document.querySelector(".icon3");
let hidden3=document.querySelector(".iconhidden3");
leftSlide(icon3,hidden3);
let icon4=document.querySelector(".icon4");
let hidden4=document.querySelector(".iconhidden4");
leftSlide(icon4,hidden4);
let icon5=document.querySelector(".copy");
let hidden5=document.querySelector(".iconhidden5");
leftSlide(icon5,hidden5);
let icon6=document.querySelector(".backtop");
let hidden6=document.querySelector(".iconhidden6");
leftSlide(back,hidden6);
//左滑关闭
let name=document.querySelector(".name");
let namehidden=document.querySelector(".namehidden");
let close=document.querySelector(".close");
nameLeftslide (name,namehidden,close);
//太原市下拉框
let taiyuan=document.querySelector(".top-left a");
let taiyuanhidden=document.querySelector(".top-left-hidden");
let taiyuanClose=document.querySelector(".top-left-close");
let prvince=document.querySelector(".prvince");
let prvincehidden=document.querySelector(".prvincehidden");
let city=document.querySelector(".city");
let cityhidden=document.querySelector(".cityhidden");
area(taiyuan,taiyuanhidden,taiyuanClose,prvince,prvincehidden,city,cityhidden);
//导航下拉条
let login=document.querySelector(".login");
let loginhidden=document.querySelector(".loginhidden");
navList (login,loginhidden);
let sell=document.querySelector(".sell");
let sellhidden=document.querySelector(".sellhidden");
navList (sell,sellhidden);
let memberclub=document.querySelector(".memberclub");
let memberclubhidden=document.querySelector(".memberclubhidden");
navList (memberclub,memberclubhidden);
let client=document.querySelector(".client");
let clienthidden=document.querySelector(".clienthidden");
navList (client,clienthidden);
let phone=document.querySelector(".phone");
let phonehidden=document.querySelector(".phonehidden");
navList (phone,phonehidden);
let more=document.querySelector(".more");
let morehidden=document.querySelector(".morehidden");
navList (more,morehidden);
let submit=document.querySelector(".submit");
let shopcart=document.querySelector(".shopcart");
navList (submit,shopcart);
//明日预告手机开售提醒
//let boximg=document.querySelector(".fifth-down-inner1info");
let boximg=document.querySelector(".fifth-down-inner1-hidden1");
let boximgHidden=document.querySelector(".fifth-down-inner1-hidden2");
box (boximg,boximgHidden);
//数字晃动
let num=document.querySelector(".img5");
num.classList.add('animated');
num.classList.add('swing');
num.classList.add('infinite');
//选项卡
let appliancesinfo=document.querySelectorAll(".second-right");
let appliances=document.querySelectorAll(".dr1");
appliancespull(appliances,appliancesinfo);
//导航上移固定






}