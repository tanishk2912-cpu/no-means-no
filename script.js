const openBtn = document.getElementById("openHeart");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicToggle");

const messageCard = document.getElementById("messageCard");
const finalCard = document.getElementById("finalCard");
const photoSection = document.getElementById("photoSection");

const messageText = document.getElementById("messageText");
const typingText = document.getElementById("typingText");

const messages = [
  "Even in a crowded room, You are my favorite thought ever, the one I always want to keep 💗",
  "You make my ordinary moments special whenever we meet ✨",
  "My heart feels calm and happy with you 💞",
  "I know that we are not together now but still I am making this website for you, I don't know why. 💌",
  "I know Valentine's Day is over and I'm late in giving you this gift, but today is a much more important day than yesterday. Because it's the person, not the day, that matters to me",
  "I know we can never be together, but I still want to feel the joy of being with you for as long as possible",
  "And I don't know why I am saying so much when you are my ex, despite that I am making all this for you",
  "But i think you're still MINE, My Tindasur 😈 ",
  "I hate you so much and Fuck you aunty"
];

let index = 0;
let startX = 0;
let isDragging = false;

/* Open Heart */
openBtn.onclick = () => {
  document.getElementById("valentineSection").classList.remove("hidden");
  messageCard.classList.remove("hidden");
  finalCard.classList.remove("hidden");
  photoSection.classList.remove("hidden");
  music.play();
  startTyping();
};

/* Music toggle */
musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🔇";
  }
};

/* ---- SWIPE LOGIC (MOBILE + LAPTOP) ---- */

// Touch
messageCard.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

messageCard.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - startX;
  handleSwipe(diff);
});

// Mouse (Laptop)
messageCard.addEventListener("mousedown", e => {
  isDragging = true;
  startX = e.clientX;
});

window.addEventListener("mouseup", e => {
  if (!isDragging) return;
  isDragging = false;
  const diff = e.clientX - startX;
  handleSwipe(diff);
});

// Swipe handler
function handleSwipe(diff) {
  if (Math.abs(diff) < 40) return;

  index = diff < 0
    ? (index + 1) % messages.length
    : (index - 1 + messages.length) % messages.length;

  messageText.textContent = messages[index];
}

/* Typewriter */
function startTyping() {
  const text = "No matter where life takes us, a piece of my heart stays with you 💖.  scroll down";
  let i = 0;
  typingText.textContent = "";

  const interval = setInterval(() => {
    typingText.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 45);
}
// ---- PHOTO SWIPE ----
const photoDisplay = document.getElementById("photoDisplay");

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg"
];

let photoIndex = 0;
let photoStartX = 0;
let photoDragging = false;

// Touch
photoDisplay.addEventListener("touchstart", e => {
  photoStartX = e.touches[0].clientX;
});

photoDisplay.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - photoStartX;
  handlePhotoSwipe(diff);
});

// Mouse
photoDisplay.addEventListener("mousedown", e => {
  photoDragging = true;
  photoStartX = e.clientX;
});

window.addEventListener("mouseup", e => {
  if (!photoDragging) return;
  photoDragging = false;
  const diff = e.clientX - photoStartX;
  handlePhotoSwipe(diff);
});

function handlePhotoSwipe(diff) {
  if (Math.abs(diff) < 40) return;

  photoIndex = diff < 0
    ? (photoIndex + 1) % photos.length
    : (photoIndex - 1 + photos.length) % photos.length;

  photoDisplay.src = photos[photoIndex];
}
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const valentineResponse = document.getElementById("valentineResponse");

function moveNoButton() {
  const card = noBtn.closest(".card");
  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth;
  const maxY = cardRect.height - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // prevents click
  moveNoButton();
});

// Disable clicking No completely
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Yes button
yesBtn.addEventListener("click", () => {
  valentineResponse.textContent = "YAYYY 💖 Best decision ever 😌💕";
});











