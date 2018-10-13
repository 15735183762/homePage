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
let bodytop=document.body.scrollTop || document.documentElement.scrollTop;
    if (bodytop>=300) {
    	back.style.display="block";
    }else{
    	back.style.display="none";
    }
}	
}