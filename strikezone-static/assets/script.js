// Intersection Observer for reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Marquee: make the ticker seamless by duplicating its content
(function () {
  const inner = document.querySelector('.marquee__inner');
  if (!inner) return;
  // Clone content exactly once to produce A + A sequence
  const original = inner.innerHTML;
  inner.innerHTML = original + original;
  // Ensure inline width fits two copies for smooth -50% animation
  // Let browser compute; no explicit width needed due to inline-flex
})();

// Replace 'Contact' nav/menu labels with 'Hire Me' wherever they link to contact.html
(function () {
  const links = document.querySelectorAll('a[href="contact.html"]');
  links.forEach((a) => {
    // Replace textual links
    if (a.textContent.trim().toLowerCase() === 'contact') {
      a.textContent = 'Hire Me';
    }
    // Replace navbar CTA button label
    if (a.classList.contains('btn-primary') || a.closest('header')) {
      // Only if the label looks like a CTA (e.g., Book Free Trial)
      if (a.textContent.trim().length <= 20 || /book|trial|contact/i.test(a.textContent)) {
        a.textContent = 'Hire Me';
      }
    }
  });
})();

// Simple tilt effect for cards
function makeTilt(el) {
  const inner = el.querySelector(".tilt-inner");
  if (!inner) return;
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1
    const rx = (py - 0.5) * -12; // tilt X
    const ry = (px - 0.5) * 12; // tilt Y
    inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  el.addEventListener("mouseleave", () => {
    inner.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

document.querySelectorAll(".tilt").forEach((el) => makeTilt(el));

// Mobile menu toggle
const toggleBtn = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");
if (toggleBtn && mobileMenu) {
  toggleBtn.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("hidden") === false;
    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Hero background video: pick one locally and rotate
const heroVideo = document.getElementById("hero-video");
if (heroVideo) {
  const videos = [
    "assets/video/mixkit-intense-semi-pro-boxing-match-40957-full-hd.mp4",
    "assets/video/mixkit-kickbox-fighter-resting-in-the-ring-40961-full-hd.mp4",
    "assets/video/mixkit-slow-motion-video-of-a-boxing-fight-40966-full-hd.mp4",
    "assets/video/mixkit-close-up-to-a-boxing-match-40958-full-hd.mp4",
  ];
  let idx = Math.floor(Math.random() * videos.length);
  function setSrc(i) {
    heroVideo.pause();
    heroVideo.setAttribute("src", videos[i]);
    heroVideo.currentTime = 0;
    const play = () => heroVideo.play().catch(() => {});
    if (heroVideo.readyState >= 2) play(); else heroVideo.addEventListener("loadeddata", play, { once: true });
  }
  setSrc(idx);
  // Rotate every 4s
  setInterval(() => {
    idx = (idx + 1) % videos.length;
    setSrc(idx);
  }, 4000);
}

// Contact: copy email button
const copyBtn = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("KlesLwR@gmail.com");
      if (copyStatus) {
        copyStatus.classList.remove("hidden");
        setTimeout(() => copyStatus.classList.add("hidden"), 1500);
      }
    } catch {}
  });
}

// Splash intro: fade out and show only once per session
const splash = document.getElementById("splash");
if (splash) {
  const hideSplash = () => {
    splash.classList.add("splash-hidden");
    splash.addEventListener("transitionend", () => splash.remove(), { once: true });
  };
  const alreadyShown = sessionStorage.getItem("splashShown");
  if (alreadyShown) {
    // Hide immediately if already seen this session
    requestAnimationFrame(hideSplash);
  } else {
    // Brief show then hide
    setTimeout(() => {
      hideSplash();
      sessionStorage.setItem("splashShown", "1");
    }, 3000);
  }
}

// Classes: fake reservation flow
const reserveButtons = document.querySelectorAll('[data-reserve="true"]');
if (reserveButtons.length) {
  reserveButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Build overlay
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/80';
      overlay.innerHTML = `
        <div class="mx-6 w-full max-w-md rounded-xl border border-white/10 bg-zinc-900/90 p-6 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
          <div class="heading text-3xl text-white">Reserved!</div>
          <p class="mt-3 text-zinc-300">Your spot request has been received. We’ll confirm by email shortly.</p>
          <p class="mt-2 text-zinc-400 text-sm">Returning to Home in <span id="rz-count">5</span>…</p>
          <div class="mt-5 flex items-center justify-center gap-3">
            <a href="index.html" class="rounded-full bg-[#e50914] px-5 py-2 text-white">Go Now</a>
            <button id="rz-cancel" class="rounded-full border border-white/20 px-5 py-2 text-white/90">Stay</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      // Countdown then redirect
      let secs = 5;
      const span = overlay.querySelector('#rz-count');
      const cancelBtn = overlay.querySelector('#rz-cancel');
      const timer = setInterval(() => {
        secs -= 1;
        if (span) span.textContent = String(secs);
        if (secs <= 0) {
          clearInterval(timer);
          window.location.href = 'index.html';
        }
      }, 1000);

      cancelBtn?.addEventListener('click', () => {
        clearInterval(timer);
        overlay.remove();
      });
    });
  });
}

// Navbar: More dropdown (desktop)
const moreToggle = document.getElementById('more-toggle');
const moreMenu = document.getElementById('more-menu');
const moreContainer = document.getElementById('more-container');
if (moreToggle && moreMenu && moreContainer) {
  moreToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    moreMenu.classList.toggle('hidden');
  });
  document.addEventListener('click', (e) => {
    if (!moreContainer.contains(e.target)) {
      moreMenu.classList.add('hidden');
    }
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') moreMenu.classList.add('hidden');
  });
}
