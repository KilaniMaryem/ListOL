var els=document.querySelectorAll('li');
for (var i=0;i<els.length;i++){
    var el=els[i];
    var func=function(){
        this.style.color='#'+(Math.floor(Math.random()*0xFFFFFF)).toString(16);
    }
    el.addEventListener('click',func);

}