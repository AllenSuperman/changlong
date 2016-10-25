(function($){

	//页面的iscoll效果的实现
	var main_iscroll=new IScroll("#main",{"click":true});
	setTimeout(function(){
		main_iscroll.refresh();
		console.log(000);
	},200);
	
	//轮播效果的实现
	 var mySwiper = new Swiper ('.swiper-container', {
	  		autoplay:1000,
	  		speed:500,
		    loop: true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    paginationClickable:"true"
	  })

	//热门推荐的数据渲染
	function hort(){
		
		var json=getJson("../json/s_01_hort.json"),
		    str="";
		for(var i=0; i<json.length;i++){
			str+="<a href='#'>"+
					"<dl>"+
						"<dt><img src='"+json[i].url+"''></dt>"+
						"<dd>'"+json[i].h2+"'</dd>"+
					 "</dl>"+
				  "</a>"
		}
		$("#h_dls").append(str);
		console.log(str);
	}
	hort();




	// 珠海 广州一系列的数据渲染
	function  zg(url){
		var json=getJson(url),
		    str="";
		    zgJson(json,str);
	}
	zg("../json/s_01_zg.json");

	// 点击珠海出现珠海的数据  点击广州出现广州的数据

	$("#tab span").on("click",function(){
		if($(this).index()==0){
			zg("../json/s_01_zg.json");
			$(this).addClass("tab_active").siblings().removeClass("tab_active");
		}else{
			zg("../json/s_01_zgg.json");
			$(this).addClass("tab_active").siblings().removeClass("tab_active");
		}
	})

	//获取数据的  getJson()
	function getJson(url){
		var data="";
			$.ajax({
				type:"get",
				url:url,
				async:false,
				success:function(data1){
					data=data1.data;
				}
			})
			return data;

	}


	//渲染珠海 广州数据的渲染分装

	function zgJson(data,str){
		for(var i=0;i<data.length;i++){
		   		str+="<dl>"+
						"<dt><img src="+data[i].url+" alt=''></dt>"+
						"<dd>"+
							"<p>"+
								"<span>'"+data[i].span_01+"'</span>"+
								"<a href='#'>'"+data[i].a_01+"'</a>"+
								"<a href='#'>'"+data[i].a_02+"'</a>"+
							"</p>"+
							"<p><a href='#'></a><span>'"+data[i].span_01+"'</span></p>"+
						"</dd>"+
					"</dl>";
		   }
		   $("#zg_dls").html(str);
	}

})(Zepto)