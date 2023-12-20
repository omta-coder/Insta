var container = document.querySelector("#container");
var like = document.querySelector("#container i");

container.addEventListener("dblclick",function(){
    like.style.transform = `translate(-50%,-50%) scale(2)`;
    like.style.opacity = 0.8;

    setTimeout(function(){
        like.style.opacity=0
        like.style.color="transparent" 
    },1000)

    setTimeout(function(){
        like.style.transform=`translate(-50%,-50%) scale(0)`;
        like.style.color="transparent" 
    },2000)
})