(function($){
	var imgs_=new IScroll("#imgs",{"click":true});
	setTimeout(function(){
		imgs_.refresh();
	},200)	

	

	

	//图片渲染
	
		$.getJSON("../json/s_02_imgs.json",function(date){
			var imgs_json=date.date_json;
			var imgs_str="";
			console.log(typeof imgs_json);

			$.each(imgs_json,function(i,val){
				imgs_str+='<img src="'+val.url+'">';
			})
			$(".json_imgss").append(imgs_str);
			console.log(typeof imgs_str);
		})
	





	//点击导航栏   对应的导航条出现

	var nav_li=$('#nav').find("li");
	nav_li.on("click",function(){
		var top_=new IScroll("#top",{"click":true});
		   
		    setTimeout(function(){
				 top_.refresh();
			},200)	
		var number="";
		
		$(".mark").css("top","0");
		if($(this).attr("class")=="n_left"){
			$(this).find("span").addClass("span_transfrom");
			number="one";
			getNav(number);
		}else if($(this).attr("class")=="n_right"){
			$(this).find("span").addClass("span_transfrom");
			number="two";
			getNav(number);
		}

		console.log(number);
	})

	$("#mark").on("click",function(){
		$(".mark").css("top","-100%");
		nav_li.find("span").removeClass("span_transfrom");
	})






	//导航栏内容的渲染
	function getNav(num){
		var nav_json=null;
		var str="";
		console.log(num);
		$.getJSON("../json/s_02_men.json",function(date){
			if(num=="one"){
				nav_json=date.date_jiudian;
			}else if(num=="two"){
				nav_json=date.date_shaixuan;
			}else{
				return false
			}
			

			for(var i=0;i<nav_json.length;i++){
				str+="<section><h3>"+nav_json[i].h3+"</h3><div>";
				//console.log(nav_json[i].h3);
				var spans=nav_json[i].jiudian;
				for(var k=0; k<spans.length;k++){
					str+="<span>"+spans[k].span+"</span>";
				}
				str+="</div></section>";
			}
			console.log(str);
			$(".nav_json").html(str);
			
		})

		
	}









































































































	
	//图片的渲染------------原生----

	/*function getJson(){
		var xhr=null,
			date=null;
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject("Microsoft","XMLHttp");
		}

		xhr.open("get","../json/s_02_imgs.json",true);
		xhr.send();

		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					date=JSON.parse(xhr.responseText).date_json;
				}
			}
			console.log(date);
		}

		return date;
	}

	//getJson();

	console.log(getJson());*/






})(jQuery);