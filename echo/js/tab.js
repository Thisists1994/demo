function load(m) { //m为传入的模块名
    m = m || 'home';
    router(m, $('.container'));
};

load('home');

$(function() {

    $('#m1').click(function() {
        load('home');
    });

    $('#m2').click(function() {
        console.log('歌单')
        load('songlist');
    });

    $('#m3').click(function() {
        load('oder');
    });

    $('#m4').click(function() {
        load('hot');
    });

})