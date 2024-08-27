let box = document.querySelector(".creations");
let image = document.querySelector(".image");

box.addEventListener("mousemove", function(){
    image.style.display = "block";
    image.style.animation = "rotate .5s ease-in-out forwards";
    image.style.transition = "display .5s ease-in-out;"
})
box.addEventListener("mouseleave", function(){
    image.style.animation = "rotate2 .5s ease-in-out forwards";
    image.style.transition = "display .5s ease-in-out;"
    image.style.display = "none";
})