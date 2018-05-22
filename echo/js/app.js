// 获取路径参数
function getUrlParms() {

    var url = window.location.href;
    //console.log(url)
    var arr = url.split("?") //file:///D:/ts/mouth4/week3/day01/WYyun/index.html?a=1&b=2&c=3
        // 区分左边 和右边a=1&b=2&c=3
        // console.log(arr)

    var p = arr[1]; //a=1&b=2&c=3
    // console.log(p);

    var params = {};

    // 用&作为间隔符去分开p 存入parr
    var parr = p.split('&');
    // console.log(parr)//["a=1", "b=2", "c=3"]

    // 循环遍历parr数组 然后把数组里每个item 用=作为间隔分开 存入kv
    for (var i = 0; i < parr.length; i++) {

        var kv = parr[i].split('=');
        // console.log(kv);//["a", "1"],["b", "2"],["c", "3"]

        // 因为params是个对象 对象里面放变量要用[ ] 而不是直接用.语法
        params[kv[0]] = kv[1]

    };
    //console.log(params);//Object {a: "1", b: "2", c: "3"}
    return (params);
}

// getUrlParms();


// 获取url模块
function getMo() {

    var url = window.location.href;
    //console.log(url)

    var arr = url.split("#")
        // 区分左边 和右边a=1&b=2&c=3
        // console.log(arr)

    if (arr.length == 1) {
        return false;
    } else {
        var p = arr[1]; //a=1&b=2&c=3
        // console.log(p);

        p = p.split("?")

        return p[0];
        // console.log(p[0]) 
    }

}

//console.log(getMo());	

//  加载模板函数	
function router(m, contener) {	//
    contener = contener || $('#box')
    $.ajax({
        url: "views/" + m + ".html",
        success: function(data) {
            contener.html(data)
        }
    });

    routerJs(m)
};

function routerJs(m) {
    $.ajax({
        url: "js/" + m + ".js"
    })
}

$(function() {

    //var m = getMo();

    if (!localStorage.count) {
        localStorage.count = 0
    }

    localStorage.count++;

    //	console.log(localStorage.count)

    if (localStorage.count == 1) {
        router('hello');
    } else {
        router('tab');
        router('audio', $('#box2'))
    }

})

$('#box').on('click', '.header li', function() {



})