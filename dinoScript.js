let human = document.querySelector('.human');
let left = 0;
window.addEventListener('keydown', (event)=>{
    // console.log(event.key)
    if(event.key === "ArrowUp"){
        human.classList.add("manRun");
        setTimeout(()=>{
            human.classList.remove("manRun");
        },800)
    }
    if(event.key === "ArrowRight" && left < 100){
        left += 3;
        human.style.left = `${left}%`;
    }
    if(event.key === "ArrowLeft" && left > 0){
        left -= 3;
        human.style.left = `${left}%`;
    }
});

setInterval(()=>{
    // hx = parseInt(getComputedStyle(human).left);
    hx = getComputedStyle(human).left;
    console.log("Man "+hx);
    hy = getComputedStyle(human).top;
    dx = parseInt(getComputedStyle(human).right);
    console.log("dino"+dx);
    // console.log(hx - dx);
},100);