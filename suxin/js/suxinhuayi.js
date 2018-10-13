window.onload=function(){
//图片缩放
    let box1=document.querySelector(".maininner .mainimg1");
    let boximg1=document.querySelector(".mainimg1 img");
    let shadow1=document.querySelector(".container1");
    change(box1,boximg1,shadow1);

    let box2=document.querySelector(".maininner .mainimg2");
    let boximg2=document.querySelector(".mainimg2 img");
    let shadow2=document.querySelector(".container2");
    change(box2,boximg2,shadow2);

    let box3=document.querySelector(".maininner .mainimg3");
    let boximg3=document.querySelector(".mainimg3 img");
    let shadow3=document.querySelector(".container3");
    change(box3,boximg3,shadow3);

    let box4=document.querySelector(".maininner .mainimg4");
    let boximg4=document.querySelector(".mainimg4 img");
    let shadow4=document.querySelector(".container4");
    change(box4,boximg4,shadow4);

    function change(box,boximg,shadow){
	    shadow.onmouseover=function(){
		    shadow.style.background="rgba(0,0,0,0.6)";
		    boximg.style.transform="scale(1.1,1.1)";
	    }
	    shadow.onmouseout=function(){
		    shadow.style.background="rgba(0,0,0,0.3)";
		    boximg.style.transform="";
        } 
    }
//微信二维码效果
let weixin=document.querySelector(".weixin");
let erweima=document.querySelector(".erweima");
    weixin.onmouseover=function(){
	    erweima.style.opacity=1;
    }
    weixin.onmouseout=function(){
	    erweima.style.opacity=0;
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
window.onscroll=function(){
let bodytop=document.body.scrollTop || document.documentElement.scrollTop;
    if (bodytop>=650) {
    	back.style.display="block";
    }else{
    	back.style.display="none";
    }
}	











}
