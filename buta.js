javascript:function level(){
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