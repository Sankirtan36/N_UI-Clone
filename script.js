document.getElementById('right-slider').addEventListener("click",function(){
    const slider=document.getElementById('slide-banner')
    slider.scrollLeft+=220;
})
document.getElementById('left-slider').addEventListener("click",function(){
    const slider=document.getElementById('slide-banner')
    slider.scrollLeft-=220;
})