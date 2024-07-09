let btn_caress = document.querySelector(".btn-caress")
let btn_feed = document.querySelector(".btn-feed")
let indicator_hearts = document.querySelector(".indicator-hearts")
let number_hearts = document.querySelector(".number-hearts")
let count_hearts = 0
btn_caress.addEventListener('click', function(){
    if(count_hearts!=100){
    count_hearts+=5
    number_hearts.textContent = count_hearts
    console.log(count_hearts);}
    else{
        
    }
}
)
btn_feed.addEventListener('click', function(){
    if(count_hearts!=100){
    count_hearts+=10
    number_hearts.textContent = count_hearts
    }else{

    }

})
function taking_hearts(){
    if(count_hearts>0){
    count_hearts-=1
    number_hearts.textContent = count_hearts}
    else{

    }
}
let timer = setInterval(taking_hearts, 1000)