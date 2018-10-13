window.onload=function(){
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
    let bodytop1=document.body.scrollTop || document.documentElement.scrollTop;
        if (bodytop1>=650) {
            back.style.display="block";
        }else{
            back.style.display="none";
        }
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

} 
