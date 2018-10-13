//按需加载和楼层跳转
let section=document.querySelectorAll("section");
let list=document.querySelectorAll(".list");	
//按需加载	
let arr=[];
    section.forEach((val,index)=>{
    	arr.push(val.offsetTop);   	
    })
	window.onscroll=function(){
		let bodytop=document.body.scrollTop || document.documentElement.scrollTop;
		let leftlist=document.querySelector(".leftlist");
		let banner=document.querySelector(".banner");
		if (bodytop>=600) {
			leftlist.style.left="60px";
		}
		if(bodytop<600){
			leftlist.style.left="-80px";
		}
		if (bodytop>=128) {
		    banner.style.position="fixed";
		    banner.style.top="0";
	    }
		if (bodytop<128) {
		    banner.style.position="absolute";
		    banner.style.top="128px";
	    }
		arr.forEach((val,index)=>{
			if (bodytop+innerHeight/2>=val) {
				for (let i=0;i<list.length;i++) {
				    list[i].classList.remove("active");
			    }
			    list[index].classList.add("active");
				let imgs=section[index].querySelectorAll("img");
				imgs.forEach((vals,indexs)=>{
					let url=imgs[indexs].getAttribute("imgsrc");
					vals.setAttribute("src",url);
				})
				
			}
		})		
    }
//楼层跳转
	list.forEach((val,index)=>{
		val.onclick=function(){
			for (let i=0;i<list.length;i++) {
				list[i].classList.remove("active");
			}
			val.classList.add("active");
			animate(document.body,{scrollTop:arr[index]});
			animate(document.documentElement,{scrollTop:arr[index]});
		}
	})	
