//页面加载完成时
//$(function(){
	//1.获取当前城市的天气信息
	let tianqi;
	$.ajax({
		type:"get",
		url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
		dataType:"jsonp",
	    success:function(obj){
	    	tianqi=obj.data;
		    console.log(tianqi);
            updata(tianqi);		    
	    }
	});
	function updata(tianqi){
		//获取当前的城市
		$(".cityinfo span").html(tianqi.city);
		//获取当前的温度
		$(".climate").html(tianqi.weather.current_temperature+"°");
		//获取当前城市的天气状况
		$(".weather").html(tianqi.weather.current_condition);				
//		//今天的天气
		$(".today-high").html(tianqi.weather.dat_high_temperature);
		$(".today-low").html(tianqi.weather.dat_low_temperature+"℃");
		$(".today-down").html(tianqi.weather.day_condition);
		$(".today .down img").attr("src","img/"+tianqi.weather.dat_weather_icon_id+".png");		
//		//明天的天气
		$(".tomorrow-high").html(tianqi.weather.tomorrow_high_temperature);
		$(".tomorrow-low").html(tianqi.weather.tomorrow_low_temperature+"℃");
		$(".tomorrow-down").html(tianqi.weather.tomorrow_condition);
		$(".tomorrow .down img").attr("src","img/"+tianqi.weather.tomorrow_weather_icon_id+".png");		
		//未来24小时的天气状况
		let hweather=tianqi.weather.hourly_forecast;
		hweather.forEach(function(v){
			let str=`
			        <li class="contain">
				    <p>${v.hour}:00</p>
			        <img src="img/${v.weather_icon_id}.png"/>
			        <p>${v.temperature}°</p>
			        </li>	
			        `;
			$(".timewea-info ul").append(str);
		})		
		//未来15天的天气状况
		let dweather=tianqi.weather.forecast_list;
		dweather.forEach(function(v){
			let time=v.date.substr(5,9);
			let ti=v.condition.split("转")
		    if(ti[1]==undefined){
			    ti[1]=ti[0];
		    }
			let str=`
			        <li class="wea-detail-contain">
				        <div class="date">
				            <p>${time}</p>
				            <p class="date-info">${ti[0]}</p>
				        </div>			
				        <img src="img/${v.weather_icon_id}.png"/>
				        <p>${v.high_temperature}°</p>
				        <p>${v.low_temperature}°</p>
				        <img src="img/${v.weather_icon_id}.png"/>
				        <p>${ti[1]}</p>
				        <div>
					        <p>${v.wind_direction}</p>
				            <p class="level">${v.wind_level}级</p>
				        </div>	
			        </li>	
			        `;
			$(".wea-detail-info ul").append(str);
		})
	}	
	
//2.获取城市信息
	let city;
	$.ajax({
		type:"get",
		url:"https://www.toutiao.com/stream/widget/local_weather/city/",
		dataType:"jsonp",
	    success:function(obj){
	    	city=obj.data;
		    console.log(city);
            updataCity(city);		    
	    }
	});    
    //获取每个城市信息
	function updataCity(city){
		for (let i in city) {
//			console.log(city[i]);
			let str=`<p class="information2">${i}</p>`;
			$(".hot-city").append(str);
			for (let j in city[i]) {
//				console.log(j);
				let str1=`<li class="city">${j}</li>`;
				$(".hot-city").append(str1);         
			}
		}
	}	

//点击每个城市，获取当前城市的天气信息
window.onload=function(){
	$(".city").click(function(){
		$(".timewea-info ul").empty();
		$(".wea-detail-info ul").empty();
		$("main").css({"display":"block"});
		$(".citys").css({"display":"none"});
		let con=$(this).html();
		console.log(con);
		ajaxs(con);			
	})		
	function ajaxs(str){			
		let url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
		$.ajax({
			type:"get",
			url:url1,
			dataType:"jsonp",
			success:function(obj){
	    	    let tianqi2=obj.data;
                updata(tianqi2);		    
	        }
		})
	}		
	//在搜索框内输入内容，可以搜索当前城市的天气情况
	$(".search input").focus(function(){
		$(".search > p").html("搜索");
	})
	//点击搜索时，获取input中输入的的内容
	$(".search > p").click(function(city){	
		
		let text=$(".search input").val();
		ajaxs(text);
		text=$(".search input").val("");		
	})
	
	//单击地址，转至搜索页
	$(".banner >p >span").click(function(){
		$("main").css({"display":"none"});
		$(".citys").css({"display":"block"});
	})
	$(".search p").click(function(){
		$("main").css({"display":"block"});
		$(".citys").css({"display":"none"});
	})
}
//})
