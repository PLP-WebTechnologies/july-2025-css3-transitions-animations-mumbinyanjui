/* ======================
   Part 2: Functions, Scope, Parameters, Return Values
   ====================== */

// Example: function with parameters + return
function calculateArea(width, height) {
  return width * height; // returns value
}

// Example of local vs global scope
let globalMessage = "Hello from Global Scope!";

function showMessage() {
  let localMessage = "Hello from Local Scope!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible only here
}

showMessage();
// console.log(localMessage); ❌ This would cause error (not accessible)

/* ======================
   Part 3: JS + CSS Animations
   ====================== */

const box = document.querySelector(".animated-box");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

// Function to add animation class
function animateBox() {
  box.classList.add("move");
}

// Function to reset animation
function resetBox() {
  box.classList.remove("move");
}

// Attach event listeners
animateBtn.addEventListener("click", animateBox);
resetBtn.addEventListener("click", resetBox);

/* Modal Example */
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("showModal");
const closeModalBtn = document.getElementById("closeModal");

// Show modal
showModalBtn.addEventListener("click", function() {
  modal.style.display = "flex";
});

// Close modal
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Extra: close modal when clicking outside content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
