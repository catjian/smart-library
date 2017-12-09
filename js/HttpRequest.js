/**
 * Created by zhang_jian on 2017/11/27.
 */


document.write("<script language=\"javascript\" src=\"js/jquery.min.js\"><\/script>");
// var BaseUrl = 'http://192.168.100.188:8080';
var BaseUrl = 'http://47.104.8.66:8080';


function getByClass(classnames){
    var classElements = [],allElements = document.getElementsByTagName('*');
    for (var i=0; i< allElements.length; i++ ) {
        if (allElements[i].className == classnames) {
            classElements[classElements.length] = allElements[i];
        }
    }
    return classElements;
}

function getById(idname){
    var classElements = [],allElements = document.getElementsByTagName('*');
    for (var i=0; i< allElements.length; i++ ) {
        if (allElements[i].id == idname) {
            classElements[classElements.length] = allElements[i];
        }
    }
    return classElements;
}

var http = {};

http.quest = function (option, callback) {
    var url = option.url;
    var method = option.method;
    var data = option.data;
    var timeout = option.timeout || 1000*30;

    var xhr = new XMLHttpRequest();
    (timeout > 0) && (xhr.timeout = timeout);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 400) {
                var result = xhr.responseText;
                try {result = JSON.parse(xhr.responseText);} catch (e) {}
                callback && callback(null, result);
            } else {
                callback && callback('status: ' + xhr.status);
            }
        }
    }.bind(this);
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type","application/json");
    if(typeof data === 'object'){
        try{
            data = JSON.stringify(data);
        }catch(e){}
    }
    xhr.send(data);
    xhr.ontimeout = function () {
        callback && callback('timeout');
        console.log('%c连%c接%c超%c时', 'color:red', 'color:orange', 'color:purple', 'color:green');
    };

};

http.get = function (url, callback) {
    var option = url.url ? url : { url: url };
    option.method = 'get';
    option.timeout = 1000*30;
    this.quest(option, callback);
};

http.post = function (option, callback) {
    option.method = 'post';
    option.timeout = 1000*30;
    this.quest(option, callback);
};