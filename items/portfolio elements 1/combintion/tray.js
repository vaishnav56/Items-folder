let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        // let cardInHeight = card.clientHeight;
        // let cardInWidth = card.clientWidth;
    
        // console.log("inner height:" + cardInHeight);
        // console.log("inner width:" + cardInWidth);
    
        let rect = card.getBoundingClientRect();
        let x = (e.clientX / 1.5 - rect.left) / 16; //x position within the element.
        let y = (e.clientY /2.5 - rect.top) / 16; //y position within the element.
        // let z = (e.clientX / 10 - rect.left) / 25; //z position within the element.
    
        card.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)  ";
      });

      let currentRotationX = 0;
  let currentRotationY = 0;
  card.addEventListener("mouseout", () => {
    card.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)  `;
  });
});
