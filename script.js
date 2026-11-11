
// ===================================
// PASSWORD
// ===================================

const correctPassword = "love";

const passwordScreen = document.getElementById("passwordScreen");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");

document.body.classList.add("locked");

passwordForm.addEventListener("submit", function(event) {

  event.preventDefault();

  if (passwordInput.value === correctPassword) {

    passwordError.textContent = "";

    passwordScreen.classList.add("unlocked");

    document.body.classList.remove("locked");

    setTimeout(function() {
      passwordScreen.style.display = "none";
    }, 750);

    createSparkles();

  } else {

    passwordError.textContent = "كلمة المرور غير صحيحة، حاولي مرة أخرى ❤️";

    passwordInput.value = "";
    passwordInput.focus();

  }

});


// ===================================
// OPEN ENVELOPE
// ===================================

const openEnvelope = document.getElementById("openEnvelope");

const hiddenSections = document.querySelectorAll(".hidden-section");

let envelopeOpened = false;

openEnvelope.addEventListener("click", function() {

  if (envelopeOpened) return;

  envelopeOpened = true;

  openEnvelope.classList.add("opened");

  setTimeout(function() {

    hiddenSections.forEach(function(section, index) {

      setTimeout(function() {

        section.classList.add("visible");

      }, index * 250);

    });

    document.getElementById("letter").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 1100);

  createHearts();

});


// ===================================
// MUSIC
// ===================================

const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const backgroundMusic = document.getElementById("backgroundMusic");

let musicPlaying = false;

musicToggle.addEventListener("click", function() {

  if (!musicPlaying) {

    backgroundMusic.play()
      .then(function() {

        musicPlaying = true;
        musicLabel.textContent = "إيقاف الموسيقى";

      })
      .catch(function() {

        musicLabel.textContent = "تعذّر تشغيل الموسيقى";

      });

  } else {

    backgroundMusic.pause();

    musicPlaying = false;

    musicLabel.textContent = "تشغيل الموسيقى";

  }

});


// ===================================
// SURPRISE
// ===================================

const surpriseButton = document.getElementById("surpriseButton");
const secretMessage = document.getElementById("secretMessage");

surpriseButton.addEventListener("click", function() {

  secretMessage.hidden = false;

  surpriseButton.textContent = "المفاجأة ظهرت ❤️";

  surpriseButton.disabled = true;

  createHearts();

});


// ===================================
// FINAL ANSWERS
// ===================================

const answerOne = document.getElementById("answerOne");
const answerTwo = document.getElementById("answerTwo");
const answerFeedback = document.getElementById("answerFeedback");

answerOne.addEventListener("click", function() {

  answerFeedback.textContent =
    "سعيد أن الرسالة أعجبتكِ، أتمنى لكِ كل السعادة ❤️";

  createHearts();

});

answerTwo.addEventListener("click", function() {

  answerFeedback.textContent =
    "خذي وقتكِ، فكل شيء جميل يأتي بهدوء 🌷";

});


// ===================================
// REPLAY
// ===================================

const replayButton = document.getElementById("replayButton");

replayButton.addEventListener("click", function() {

  envelopeOpened = false;

  openEnvelope.classList.remove("opened");

  hiddenSections.forEach(function(section) {

    section.classList.remove("visible");

  });

  secretMessage.hidden = true;

  surpriseButton.disabled = false;
  surpriseButton.textContent = "اكشفي المفاجأة 💌";

  answerFeedback.textContent = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ===================================
// HEART EFFECT
// ===================================

function createHearts() {

  const hearts = ["❤️", "💗", "💕", "💖", "🌸"];

  for (let i = 0; i < 18; i++) {

    const heart = document.createElement("span");

    heart.className = "heart-particle";

    heart.textContent =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = (60 + Math.random() * 30) + "vh";

    heart.style.fontSize =
      (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(function() {
      heart.remove();
    }, 1300);

  }

}


// ===================================
// SPARKLES EFFECT
// ===================================

function createSparkles() {

  const sparkleContainer = document.getElementById("sparkles");

  for (let i = 0; i < 35; i++) {

    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.animationDelay =
      Math.random() * 3 + "s";

    sparkleContainer.appendChild(sparkle);

  }

}


// ===================================
// CLICK HEARTS
// ===================================

document.addEventListener("click", function(event) {

  if (
    event.target.closest("button") ||
    event.target.closest("a")
  ) {

    const heart = document.createElement("span");

    heart.className = "heart-particle";
    heart.textContent = "💗";

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(function() {
      heart.remove();
    }, 1300);

  }

});
