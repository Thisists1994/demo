var musicControler = {

    server: "http://musicapi.duapp.com/api.php",

    play: function(music) {

        var $state = $('#music_state');
        //$state.html("加载中")

        $.ajax({
            type: "get",
            url: this.server + "?type=url&id=" + music.id,
            async: true,//异步
            success: function(data) {
                console.log(data); //.data[0].url
                //$state.html("加载成功")
                var audio = $('#audio').get(0) //将JQ对象转为JS对象使用 .play()方法
                audio.src = data.data[0].url;
                audio.play();

                $('#btn').removeClass('pause').addClass('play');
                $('#music_name').html(music.name)
                $('#music_state').html(music.ar[0].name)
                $('#box2').find('img').attr("src", music.al.picUrl);

            }
        })

    }

};
$('#btn').click(function() {

    var audio = $('#audio').get(0)
    if ($(this).hasClass('play')) {
        $(this).removeClass('play').addClass('pause');
        audio.pause();
    } else {
        $(this).removeClass('pause').addClass('play');
        audio.play();
    }

});