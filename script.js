function goNext() {
  document.getElementById("slide1").style.display = "none";
  document.getElementById("slide2").style.display = "flex";
}

/* Falling hearts */
const container = document.querySelector(".falling-container");

function createFall() {
  const element = document.createElement("div");
  element.classList.add("fall");

  const icons = ["❤️", "🌸", "💖", "🌷"];
  element.innerText = icons[Math.floor(Math.random() * icons.length)];

  element.style.left = Math.random() * 100 + "vw";
  element.style.animationDuration = (5 + Math.random() * 5) + "s";
  element.style.fontSize = (15 + Math.random() * 20) + "px";

  container.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 10000);
}

setInterval(createFall, 500);

/* Random scrapbook rotation */
const frames = document.querySelectorAll(".circle-frame");
frames.forEach(frame => {
  const randomDeg = (Math.random() * 10 - 5);
  frame.style.transform = `rotate(${randomDeg}deg)`;
});

/* Modal */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

frames.forEach(frame => {
  frame.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.querySelector("img").src;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
