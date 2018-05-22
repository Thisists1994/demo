console.log("我是详情页")
    //获取路径参数
var parms = getUrlParms()

console.log("ID:" + parms.id)

//$('#prve').click(function(){
//	router('tab');
//})

function getPlayList(id, callback) {
    $.ajax({
        type: "get",
        url: "https://api.imjad.cn/cloudmusic?type=playlist&id=" + id,
        success: function(data) {
            callback(data.playlist); //传入回调函数
        }
    })
}

getPlayList(parms.id, function(data) {
    console.log(data)
    var $musiclist = $('#musiclist');
    var musicItem = $("#musicItem").html();

    for (var i = 0; i < data.tracks.length; i++) {

        var $musicItem = $(musicItem);
        //console.log($musicItem);

        //详情页头部
        $('.detail img').attr("src", data.coverImgUrl);
        $('.detail h3').html(data.name);
        //详情页歌单
        $musicItem.find('span').html(i + 1);
        $musicItem.find('.musicName').html(data.tracks[i].name);
        $musicItem.find('.singer').html(data.tracks[i].ar[0].name);
        //i标签里是否收藏
        if (isCollected(data.tracks[i].id)) {
            $musicItem.find('i').removeClass().addClass('yes');
        } else {
            $musicItem.find('i').removeClass().addClass('no');
        }
        //		console.log(musicItem)
        $musicItem.appendTo($musiclist);

        var music = data.tracks[i];


        //this.data.music=music
        $musicItem.data("music", music)

        //给i赋值属性
        $musicItem.find('i').data("music", music)

    };

});


$("#musiclist").on('click', 'li', function() {

    console.log($(this).data("music"))

    musicControler.play($(this).data("music")) //调用音乐播放方法	
});


//点击i 后 判断是否已有缓存,再判断点击后删除缓存or存储新的,根据是否为true来改变背景图片
$('#musiclist').on('click', 'i', function(ev) {
    var list;
    ev.stopPropagation(); //阻止冒泡

    var music = $(this).data('music');

    console.log(music)

    if (localStorage.getItem("collection")) {
        console.log('已经存在')
        list = JSON.parse(localStorage.getItem("collection"));

        //当前音乐是否被收藏
        if (isCollected(music.id)) {
            console.log(1111)
                //修改对象数据并且在最后(下面)保存到缓存中
            list[music.id].isCollection = false;
            //修改背景图
            $(this).removeClass().addClass('no');

        } else {
            console.log(222)
            list[music.id] = { isCollection: true };
            $(this).removeClass().addClass('yes');
        }
    } else {
        list = {};
        list[music.id] = { isCollection: true };



        localStorage.setItem("collection", JSON.stringify(list))

        $(this).removeClass().addClass('yes');
        //		localStorage.getItem("collection")
        console.log('第一次缓存')
    }
    //更新缓存信息
    localStorage.setItem("collection", JSON.stringify(list))
    return false;

})







function isCollected(id) {
    console.log(id);
    console.log(localStorage.getItem("collection"));

    if (localStorage.getItem("collection")) {
        var list = JSON.parse(localStorage.getItem("collection"))
    } else {
        return false;
    }

    if (list[id] && list[id].isCollection) {
        return true;
    } else {
        return false;
    }
};