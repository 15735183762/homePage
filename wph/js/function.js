//返回顶部
function backtop (back) {
	back.onclick=function(){
		let res=document.body.scrollTop || document.documentElement.scrollTop;
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}
}
//右侧固定栏左滑
function leftSlide (boxinfo,boxhidden) {
	boxinfo.onmouseover=function(){
		boxinfo.style.background="#df147f";
        boxhidden.style.width="120px";
        boxhidden.style.border="1px solid #C3C3C3";
	}
	boxinfo.onmouseout=function(){
		boxinfo.style.background="";
        boxhidden.style.width="0";
        boxhidden.style.border="none";
	}
}
//左滑效果
function nameLeftslide (boxinfo,boxhidden,close) {	
	boxinfo.onmouseover=function(){
		boxinfo.style.background="#df147f";
		boxhidden.style.width="274px";
	}
	boxinfo.onmouseout=function(){
		boxinfo.style.background="";
		boxhidden.style.width="0";
	}
    close.onclick=function(){
    	boxinfo.style.background="";
		boxhidden.style.width="0";
    }
    boxhidden.onmouseover=function(){
		boxinfo.style.background="";
		boxhidden.style.width="274px";
	}
	boxhidden.onmouseout=function(){
		boxinfo.style.background="";
		boxhidden.style.width="0";
	}
}
//太原下拉框
function area(taiyuan,taiyuanhidden,taiyuanClose,prvince,prvincehidden,city,cityhidden) {
	taiyuan.onclick=function(){
		taiyuan.style.background="white";
		taiyuanhidden.style.display="block";
		taiyuan.style.borderTop="1px solid #e3e3e3";
		taiyuan.style.borderLeft="1px solid #e3e3e3";
		taiyuan.style.borderRight="1px solid #e3e3e3";
	}
	taiyuanClose.onclick=function(){
    	taiyuan.style.background="";
		taiyuanhidden.style.display="none";
		taiyuan.style.borderTop="";
		taiyuan.style.borderLeft="";
		taiyuan.style.borderRight="";
    }
	prvince.onclick=function(){
		prvincehidden.style.display="block";
		prvince.style.background="white";
		prvince.style.borderTop="2px solid #F10180";
		prvince.style.borderRight="0";
		prvince.style.borderBottom="0";
		city.style.border="1px solid #E3E3E3";
		city.style.background="#f8f8f8";
		cityhidden.style.display="none";
		prvince.style.fontWeight="bold";
		city.style.fontWeight="400";
	}
	city.onclick=function(){
		prvincehidden.style.display="none";
		cityhidden.style.display="block";
		city.style.background="white";
		city.style.borderTop="2px solid #F10180";
		prvince.style.background="#f8f8f8";
		prvince.style.border="1px solid #E3E3E3";
		city.style.borderLeft="0";
		city.style.borderBottom="0";
		city.style.fontWeight="bold";
		prvince.style.fontWeight="400";
	}
}
//导航下拉条
function navList (nav,navhidden) {
	nav.onmouseover=function(){
		navhidden.style.display="block";
		nav.style.background="white";
		nav.style.borderTop="1px solid #e3e3e3";
		nav.style.borderLeft="1px solid #e3e3e3";
		nav.style.borderRight="1px solid #e3e3e3";
	}
	nav.onmouseout=function(){
		navhidden.style.display="none";
		nav.style.background="#f5f5f5";
		nav.style.borderTop="";
		nav.style.borderLeft="";
		nav.style.borderRight="";
	}
	navhidden.onmouseover=function(){
		navhidden.style.display="block";
		nav.style.background="white";
		nav.style.borderTop="1px solid #e3e3e3";
		nav.style.borderLeft="1px solid #e3e3e3";
		nav.style.borderRight="1px solid #e3e3e3";
	}
	navhidden.onmouseout=function(){
		navhidden.style.display="none";
		nav.style.background="#f5f5f5";
		nav.style.borderTop="";
		nav.style.borderLeft="";
		nav.style.borderRight="";
	}
}
//明日预告手机开售提醒
function box (boximg,boximgHidden) {
	boximg.onmouseover=function(){
		boximg.style.opacity=0;
		boximgHidden.style.opacity=1;
	}
	boximg.onmouseout=function(){
		boximg.style.opacity=1;
		boximgHidden.style.opacity=0;
	}
	boximgHidden.onmouseover=function(){
		boximg.style.opacity=0;
		boximgHidden.style.opacity=1;
	}
	boximgHidden.onmouseout=function(){
		boximg.style.opacity=1;
		boximgHidden.style.opacity=0;
	}
}
//选项卡
function appliancespull (appliances,appliancesinfo) {
	appliancesinfo[0].style.display="block";
	for (let i=0;i<appliances.length;i++) {
		appliances[i].onmouseover=function(){
			for (let j=0;j<appliancesinfo.length;j++) {
				appliancesinfo[j].style.display="none";					
			}
			appliances[i].style.background="#f10180";	
			appliancesinfo[i].style.display="block";
			appliances[i].style.color="white";
			appliances[i].style.borderRadius="50px";
		}
		appliances[i].onmouseout=function(){
			appliancesinfo[i].style.display="block";
			appliances[i].style.background="";
			appliances[i].style.color="#333";
			appliances[i].style.borderRadius="";
		}
	}
}
