// Flip Card
document.getElementById("flipButton").addEventListener("click", () => {
  document.getElementById("card").classList.toggle("flipped");
});

// Loader
document.getElementById("loadBtn").addEventListener("click", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  setTimeout(() => loader.style.display = "none", 2000);
});

// Modal
const modal = document.getElementById("modal");
document.getElementById("showModal").addEventListener("click", () => {
  modal.classList.add("active");
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("active");
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});
// Optional: Add click effect to glow button
const glowBtn = document.getElementById('glowBtn');
glowBtn.addEventListener('click', () => {
  alert("Glowing Action Triggered!");
});
