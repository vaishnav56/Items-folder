let overlay = document.querySelectorAll(".overlay");

overlay.forEach((overlay) => {
  overlay.addEventListener("mousemove", (e) => {
    // let overlayInHeight = overlay.clientHeight;
    // let overlayInWidth = overlay.clientWidth;

    // console.log("inner height:" + overlayInHeight);
    // console.log("inner width:" + overlayInWidth);

    let rect = overlay.getBoundingClientRect();
    let x = (e.clientX / 1.5 -rect.left) / 30; //x position within the element.
    let y = (e.clientY /2.5 - rect.top) / 40; //y position within the element.
    // let z = (e.clientX / 10 - rect.left) / 25; //z position within the element.

    overlay.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)  ";
  });

  let currentRotationX = 0;
  let currentRotationY = 0;
  overlay.addEventListener("mouseout", () => {
    overlay.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)  `;
  });
});

var text= document.querySelector("#Second-text");
var text= document.querySelector("#Second-text");
// let page2 = document.querySelector(".page2");

setTimeout( function(){
    text.innerHTML="Analytics Engineer"
}, 8000);
setTimeout( function(){
    text.innerHTML="AI Engineer"
}, 16000);
setTimeout( function(){
    text.innerHTML="Machine Learning Engineer"
    text.style.fontSize = "25px"
}, 24);
