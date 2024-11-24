document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("counterDisplay");
    const decrementBtn = document.getElementById("decrementBtn");
  
    let count = parseInt(counterDisplay.textContent, 10); // Sync with the current counter value
  
    // Decrement Button Logic
    decrementBtn.addEventListener("click", () => {
      count--;
      updateDisplay();
    });
  
    // Update the counter display
    const updateDisplay = () => {
      counterDisplay.textContent = count;
    };
  });
  