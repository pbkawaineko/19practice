// ==UserScript==
// @name         Merge Check
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       nekochan
// @match        https://github/*
// @grant        none
// ==/UserScript==
//間違ってGitHubにMergeするのを防ぐために、masterにMergeしようとしてたら背景色を変えてくれる拡張機能です！

(function () {
    'use strict';

    setInterval(function tako (){
    document.body.style.backgroundColor = "#ffffff";
    var target = document.getElementsByClassName("commit-ref css-truncate user-select-contain expandable base-ref");
    if(target[0] != null) {
        var ta = document.createElement("textarea");
        ta.value = target[0].innerText;
        if(ta.value == "master") {
//            alert(ta.value+"にマージしようとしています！");
            document.body.style.backgroundColor = "#ddddff";
        }
    }
    },1000);




})();



javascript:window.onload = function level(){
    var target = document.getElementsByClassName("commit-ref css-truncate user-select-contain expandable base-ref");
    
    if(target[0] != null) {
        var ta = document.createElement("textarea"); 
        ta.value = target[0].innerText;
        if(ta.value == "master") {
            alert(ta.value+"にマージしようとしています！");
            document.body.style.backgroundColor = "#80c0ff";
            //ta.parentElement.removeChild(ta);
        };
    };
};

javascript: function level(){
    var target = document.getElementsByClassName("commit-ref css-truncate user-select-contain expandable base-ref");
    
    if(target[0] != null) {
        var ta = document.createElement("textarea"); 
        ta.value = target[0].innerText;
        if(ta.value == "master") {
            alert(ta.value+"にマージしようとしています！");
            document.body.style.backgroundColor = "#80c0ff";
            //ta.parentElement.removeChild(ta);
        };
    };
    
};
level();

(function check() {
    var intervalID= setInterval(neko, 2000);
      alert("tako");
}
    function neko() {
    alert("neko");
     document.body.style.backgroundColor = "#ddddff";
    var target = document.getElementsByClassName("commit-ref css-truncate user-select-contain expandable base-ref");
    alert(target[0]);
    if(target[0] != null) {
        var ta = document.createElement("textarea");
        ta.value = target[0].innerText;
        if(ta.value == "master") {
            alert(ta.value+"にマージしようとしています！");
            document.body.style.backgroundColor = "#ddddff";
        }
    }
}
)();




javascript:function level(){ 
    var URL = location.href; 
    var title = document.getElementById("productTitle"); 
    var price = document.getElementById("priceblock_ourprice"); 
    var ta = document.createElement("textarea"); 
    var message= "商品名："+title.innerText+"\n単価："+price.innerText+"\nURL："+URL; 
    ta.value = message; 
    document.body.appendChild(ta); 
    ta.select(); 
    document.execCommand("copy"); 
    ta.parentElement.removeChild(ta); 
    alert('クリップボードにコピーしました。'); 
    }; 
    level();

javascript:function level(){ 
    var URL = location.href; 
    var title = document.getElementById("productTitle"); 
    var price = document.getElementById("priceblock_ourprice"); 
    var ta = document.createElement("textarea"); 
    var message= "商品名："+title.innerText+"\n単価："+price.innerText+"\nURL："+URL; 
    ta.value = message; 
    document.body.appendChild(ta); 
    ta.select(); 
    document.execCommand("copy"); 
    ta.parentElement.removeChild(ta); 
    alert('クリップボードにコピーしました。'); 
    }; 
    level();