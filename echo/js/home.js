var server = "http://musicapi.duapp.com/api.php";
//http://musicapi.duapp.com/api.php?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit=1
function getPlayList(limit,callback){
	
	if(isCache()){
		
		var list = JSON.parse(localStorage.data)
		
		callback(list);	
		
		console.log("访问缓存")
		
	}else{
		$.ajax({
			type:'get',
			url: server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+limit,
			async:true,
			success:function(data){
	//			console.log(data.playlists);
				console.log("访问网络");
				
				localStorage.time = new Date().getTime();//缓存时的时间
				
				var data = JSON.stringify(data.playlists); //把数据转换成字符串

				localStorage.data = data;//然后用缓存它
		 		
		 		data = JSON.parse(localStorage.data)//将缓存转成json对象
				
				callback(data); //传入回调函数内执行
				
				
			}
		});		
	};

	
	function isCache(){

		if(!localStorage.data){
			return false;
		};
		console.log(localStorage.time)
		//如果访问的时间和缓存的时间间隔10min 那么就返回false----重新访问网络
		if( new Date().getTime()-localStorage.time>10*60*1000 ){
			return false;
		};
		return true;
	}
	
};


getPlayList(9,function(data){
	
	//console.log(data);
	var $songlist=$(".songlist");
	
	var template=$("#templateItem").html();
	
	for(var i=0;i<data.length;i++){
		
		var $template=$(template);//创建成一个JQ对象,这样才能使用JQ的方法
		
		$template.find("a").attr("href","#detail?id="+data[i].id)
		$template.find("div").html(data[i].playCount);
		$template.find("img").attr("src",data[i].coverImgUrl);
		$template.find("p").html(data[i].name);
		
		$template.appendTo($songlist);//把结果插入到songlist里
		
	}
	

});

//banner
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 2000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
  })
