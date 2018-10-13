window.onload=function () {
	let dots=document.querySelectorAll(".btns li");
	let imgs=document.querySelectorAll(".banner .imgbox li a img");
	let banner=document.querySelector(".banner");
	let widths=parseInt(getComputedStyle(banner,null).width);
	let t;
	let now=0;
	let next=0;
	imgs[0].style.left=0;
	dots[0].classList.add("active");
	t=setInterval(move,1500);
	function move(){
		next++;
		if (next==imgs.length) {
			next=0;
		}
		imgs[now].style.left=0;
		imgs[next].style.left=widths+'px';
		animate(imgs[now],{left:-widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("active");
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add("active");
		});
		now = next;
	}
	banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,1500);
    }
    for (let i=0;i<dots.length;i++) {
		dots[i].onclick=function(){
			for (let j=0;j<imgs.length;j++) {				
				imgs[j].style.left=-widths+'px';
			    dots[j].classList.remove("active");
			}
			imgs[i].style.left=0;
			dots[i].classList.add("active");
			next=i;
		}
	}
	
}