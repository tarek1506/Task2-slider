let list=document.querySelector('.slider .list');
let items=document.querySelectorAll('.slider .list .item');
let dots=document.querySelectorAll('.slider .dots li')
let prev=document.getElementById("prev")
let next=document.getElementById("next")



let active=0
let lengthItems=items.length

next.onclick=function(){
    if(active+1>lengthItems){
        active=0
    }else{
        active+=1
    }
    
    realoadSlider();
}
prev.onclick=function(){
    if(active-1<0){
        active=lengthItems
    }else{
        active-=1
    }
    
    realoadSlider();
}

let refreshSlider=setInterval(()=>{next.click()},3000)

items.forEach((img,key)=>{
    img.addEventListener('mouseover',function(){
        clearInterval(refreshSlider)
        console.log("refresh",refreshSlider);
        
    })
    img.addEventListener('mouseout',function(){
        refreshSlider=setInterval(()=>{next.click()},3000)
    })
})



function realoadSlider(){
    let checkLeft=items[active].offsetLeft
    list.style.left=-checkLeft+'px'
    let lastActiveDot=document.querySelector('.slider .dots li.active');
    console.log(lastActiveDot,dots)
    lastActiveDot.classList.remove('active')
    dots[active].classList.add('active')
    clearInterval(refreshSlider)
    refreshSlider=setInterval(()=>{next.click()},3000)
}

dots.forEach((li,key)=>{
    li.addEventListener('click',function(){
        active=key;
        realoadSlider();
    })
})
