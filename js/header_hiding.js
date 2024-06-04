let oldScrollTopPosition = 0;
let scroll = 0;
let headerTop = document.querySelector('.header').style;

window.addEventListener('wheel', function(event){
    console.log(event.deltaY);
    if(event.deltaY < 0) {
        headerTop.marginTop = '0px';
    } else {
        headerTop.marginTop = '-150px';
    }
})

