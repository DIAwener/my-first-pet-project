let btn_caress = document.querySelector(".btn-caress")
let btn_feed = document.querySelector(".btn-feed")
let indicator_hearts = document.querySelector(".indicator-hearts")
let number_hearts = document.querySelector(".number-hearts")
let bar = document.querySelector(".bar")
let p = document.createElement("p")
let body = document.querySelector("body")
let count_hearts = 0
let length = 0
let width = ""
const food = document.querySelector('.food');

btn_caress.addEventListener('click', function () {
    if (count_hearts + 4 < 100) {
        count_hearts += 5
        number_hearts.textContent = count_hearts
        length += 5
        width = length + "%"
        bar.style.height = width
        if (count_hearts < 30) {
            bar.style.background = 'red';
        }
        if (count_hearts < 60 && count_hearts > 30) {
            bar.style.background = 'yellow';
        }
        if (count_hearts > 61) {
            bar.style.background = 'green';
        } 
    } 
}
)
btn_feed.addEventListener('click', function () {
    if (count_hearts + 9 < 100) {
        count_hearts += 10
        number_hearts.textContent = count_hearts
        length += 10
        width = length + "%"
        bar.style.height = width
        if (count_hearts < 30) {
            bar.style.background = 'red';
        }
        if (count_hearts < 60 && count_hearts > 30) {
            bar.style.background = 'yellow';
        }
        if (count_hearts > 61) {
            bar.style.background = 'green';
        } 
    } 

})
function taking_hearts() {
    if (count_hearts > 0) {
        count_hearts -= 1
        number_hearts.textContent = count_hearts
        length -= 1
        width = length + "%"
        bar.style.height = width
        if (count_hearts === 0) {
            food.style.display = 'inline-block';
        } else {
            food.style.display = 'none';
        }
        if(count_hearts<30){
            bar.style.background = 'red';
        }
        if (count_hearts < 60 && count_hearts > 30) {
            bar.style.background = 'yellow';
        }
        if (count_hearts > 61) {
            bar.style.background = 'green';
        }
    }
}
let timer = setInterval(taking_hearts, 1000)