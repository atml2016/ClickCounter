document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("counterDisplay");
    const incrementBtn = document.getElementById("incrementBtn");
    const resetBtn = document.getElementById("resetBtn");
  
    let count = 0;
  
    // Increment Button Logic
    incrementBtn.addEventListener("click", () => {
      count++;
      updateDisplay();
    });
  
    // Reset Button Logic
    resetBtn.addEventListener("click", () => {
      count = 0;
      updateDisplay();
    });
  
    // Update the counter display
    const updateDisplay = () => {
      counterDisplay.textContent = count;
    };
  });
  