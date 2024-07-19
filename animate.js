const cat = document.querySelector('.content');
let count_sprite = 0;
function playAnim() {
    cat.style.backgroundPosition = count_sprite !== 0 ? count_sprite * 100 + '%' : '';
    count_sprite += 1;
    console.log(1)
    if (count_sprite === 4) {
        count_sprite = 0;
    }
    
}
cat.addEventListener('click', () => {
    cat.style.top = '-2%';
    setTimeout(() => cat.style.top = '0', 100)
})
setInterval(playAnim, 300);