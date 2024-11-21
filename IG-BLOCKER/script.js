document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");
    const closeButton = document.getElementById("close");
  
    let countdown = 30; // 30 seconds block
    const timer = setInterval(() => {
      countdown--;
      timerElement.textContent = `00:${countdown < 10 ? "0" : ""}${countdown}`;
      if (countdown <= 0) {
        clearInterval(timer);
        timerElement.textContent = "00:00";
      }
    }, 1000);
  
    closeButton.addEventListener("click", () => {
      alert("Stay focused!");
    });
  });
  