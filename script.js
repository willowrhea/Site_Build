let clicks = 0;
const maxClicks = 5;

const door = document.getElementById("door");

door.addEventListener("click", () => {
  clicks++;

  // Grow the door
  const scale = 1 + clicks * 0.25;
  door.style.transform = `scale(${scale})`;

  // When done, open
  if (clicks >= maxClicks) {
    window.location.href = "https://example.com";  // Replace later
  }
});

