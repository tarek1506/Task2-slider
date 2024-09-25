// var slideIndex=1

// showSlides(slideIndex)

// function plusSlides(n){
//     showSlides(slideIndex +=n)
// }

// function currentSlides(n){
//     showSlides(slideIndex =n)

// }

// function showSlides(n){
//     var i;
//     var slides=document.getElementsByClassName("mySlides");
//     var dots=document.getElementsByClassName('dot')
//     if(n>slides.length){
//         slideIndex
//     }
//     if(n<1){
//         slideIndex=slides.length
//     }
//     for(i=0;i<slides.length;i++){
//         slides[i].style.display='none'
//     }
//     for(i=0;i<dots.length;i++){
//          dots[i].className= dots[i].className.replace("active","");
//         //  dots[i].className="active"
//     }
//     slides[slideIndex-1].style.display="block"
//     dots[slideIndex -1].className +="active"
// }

// var slideIndex=0
// showSlides();
// function showSlides(){
//     var i;
//     var slides=document.getElementsByClassName("mySlides");
//         for(i=0;i<slides.length;i++){
//             slides[i].style.display="none"
//         }
//         slideIndex++;
//         if(slideIndex>slides.length){
//             slideIndex=1
//         }
//         slides[slideIndex-1].style.display="block"
//         setTimeout(showSlides,5000)
// }

// let slide=document.getElementsByClassName("mySlides");
// slide.addEventListener('mouseover',()=>{
//     clearInterval()
// })

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