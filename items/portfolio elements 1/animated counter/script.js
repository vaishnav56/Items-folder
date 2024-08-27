let nmbr = document.querySelector(".cntr-nmbrs");
// let btn = document.getElementsByTagName("h1");
function startCounter(speed) {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter <= 100) {
        nmbr.innerHTML = counter;
        counter++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  }
  
  // Usage
  // Change the speed parameter to control the speed of the counter (in milliseconds)
  startCounter(300); // Example: Speed of 100 milliseconds