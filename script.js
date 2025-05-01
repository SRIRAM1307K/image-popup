// let img1 = document.getElementById("img1")
// let img2 = document.getElementById("img2")
// let img3 = document.getElementById("img3")
let galleryImages = document.querySelectorAll("img")
let popup = document.getElementById("popup")
let popupImg = document.getElementById("popup-img")

let close = document.getElementById("close")


galleryImages.forEach( img => {
    img.addEventListener("click",function(){
        popupImg.src=img.src
        popupImg.style.display="flex"
        popup.style.display="block"
        console.log("Image Clicked")
    })
})
close.addEventListener("click", function(){
    popup.style.display="none"
})
popup.addEventListener("click", function(e){
    if(e.target === popup){
        console.log(e.target.value)
        popup.style.display="none"
    }
})