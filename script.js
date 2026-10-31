
// ===================================
// رسالة إلى M ❤️
// Developed by Youssef Amr
// ===================================

// العناصر الأساسية
const openEnvelope = document.getElementById("openEnvelope");

const hiddenSections = [
  ...document.querySelectorAll(".hidden-section")
];

const music = document.getElementById("backgroundMusic");

const musicToggle = document.getElementById("musicToggle");

const musicLabel = document.getElementById("musicLabel");

const surpriseButton = document.getElementById("surpriseButton");

const secretMessage = document.getElementById("secretMessage");

const answerFeedback = document.getElementById("answerFeedback");

let opened = false;


// ===================================
// فتح الظرف 💌
// ===================================

function revealSite() {

  if (opened) return;

  opened = true;

  openEnvelope.classList.add("opened");

  openEnvelope.querySelector(
    ".envelope-hint"
  ).textContent = "وصلتكِ رسالة من يوسف ❤️";

  // إظهار أقسام الموقع تدريجياً
  setTimeout(() => {

    hiddenSections.forEach((section, index) => {

      setTimeout(() => {

        section.classList.add("visible");

      }, index * 180);

    });

    // الانتقال إلى الرسالة
    document.getElementById("letter").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 850);

  // تشغيل الموسيقى بعد الضغط على الظرف
  music.play()
    .then(updateMusicButton)
    .catch(() => {

      musicLabel.textContent =
        "اضغطي لتشغيل الموسيقى";

    });

  // ظهور القلوب
  burstHearts(
    window.innerWidth / 2,
    window.innerHeight / 2
  );

}

openEnvelope.addEventListener(
  "click",
  revealSite
);


// ===================================
// التحكم في الموسيقى 🎵
// ===================================

function updateMusicButton() {

  const playing = !music.paused;

  musicLabel.textContent = playing
    ? "إيقاف الموسيقى"
    : "تشغيل الموسيقى";

}

musicToggle.addEventListener("click", async () => {

  if (music.paused) {

    try {

      await music.play();

    } catch (error) {

      musicLabel.textContent =
        "أضيفي ملف music.mp3";

    }

  } else {

    music.pause();

  }

  updateMusicButton();

});

music.addEventListener("play", updateMusicButton);

music.addEventListener("pause", updateMusicButton);


// ===================================
// المفاجأة السرية 🎁
// ===================================

surpriseButton.addEventListener("click", () => {

  secretMessage.hidden = false;

  surpriseButton.textContent =
    "المفاجأة أصبحت لكِ ❤️";

  surpriseButton.disabled = true;

  burstHearts(
    window.innerWidth / 2,
    window.innerHeight / 2
  );

});


// ===================================
// السؤال النهائي 💗
// ===================================

document.getElementById("answerOne")
  .addEventListener("click", () => {

    answerFeedback.textContent =
      "أنتِ أجمل صدفة في حياتي ❤️";

    burstHearts(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

  });


document.getElementById("answerTwo")
  .addEventListener("click", () => {

    answerFeedback.textContent =
      "سأظل أتمنى لكِ كل السعادة 🌷";

  });


// ===================================
// إعادة قراءة الرسالة ↻
// ===================================

document.getElementById("replayButton")
  .addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    answerFeedback.textContent = "";

    secretMessage.hidden = true;

    surpriseButton.disabled = false;

    surpriseButton.textContent =
      "اكشفي المفاجأة 💌";

  });


// ===================================
// ظهور القلوب عند الضغط ❤️
// ===================================

function burstHearts(x, y) {

  const symbols = [
    "♥",
    "♡",
    "💗",
    "💕"
  ];

  for (let i = 0; i < 12; i++) {

    const heart = document.createElement("span");

    heart.className = "heart-particle";

    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left =
      `${x + (Math.random() - 0.5) * 180}px`;

    heart.style.top =
      `${y + (Math.random() - 0.5) * 60}px`;

    heart.style.fontSize =
      `${14 + Math.random() * 18}px`;

    heart.style.color = [
      "#d95e91",
      "#ef9fbe",
      "#c783e8"
    ][i % 3];

    document.body.appendChild(heart);

    heart.addEventListener(
      "animationend",
      () => heart.remove()
    );

  }

}


// ===================================
// قلوب عند الضغط على الشاشة
// ===================================

document.addEventListener("click", (event) => {

  if (event.target.closest("button")) return;

  const heart = document.createElement("span");

  heart.className = "heart-particle";

  heart.textContent = "♡";

  heart.style.left = `${event.clientX}px`;

  heart.style.top = `${event.clientY}px`;

  heart.style.color = "#dc6f9c";

  heart.style.fontSize = "22px";

  document.body.appendChild(heart);

  heart.addEventListener(
    "animationend",
    () => heart.remove()
  );

});


// ===================================
// النجوم واللمعان ✨
// ===================================

const sparkleLayer =
  document.getElementById("sparkles");

for (let i = 0; i < 24; i++) {

  const sparkle = document.createElement("span");

  sparkle.className = "sparkle";

  sparkle.style.left =
    `${Math.random() * 100}%`;

  sparkle.style.top =
    `${Math.random() * 100}%`;

  sparkle.style.animationDelay =
    `${Math.random() * 3}s`;

  sparkleLayer.appendChild(sparkle);

}


// ===================================
// نهاية المشروع ❤️
// Youssef Amr
// ===================================
