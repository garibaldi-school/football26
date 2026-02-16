/* global STAFF, DONATE_URL */

const STORAGE_KEY = "garibaldi_panini_collected_v1";

function $(sel) {
  return document.querySelector(sel);
}

function toast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("toast--show");
  window.clearTimeout(toast._t);
  toast._t = window.setTimeout(() => el.classList.remove("toast--show"), 2400);
}

function loadCollected() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCollected(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set(ids))));
}

function markCollected(id) {
  const ids = loadCollected();
  if (!ids.includes(id)) {
    ids.push(id);
    saveCollected(ids);
  }
}

function updateCounters() {
  const collected = loadCollected();
  const cEl = $("#collectedCount");
  const tEl = $("#totalCount");
  if (cEl) cEl.textContent = String(collected.length);
  if (tEl) tEl.textContent = String(STAFF.length);
}

function setDonateLinks() {
  ["#donateTop", "#donateHero", "#donateBottom"].forEach((sel) => {
    const el = $(sel);
    if (el) el.setAttribute("href", DONATE_URL);
  });
}

function createCard(staff, collected) {
  const a = document.createElement("a");
  a.className = "card" + (collected ? " card--collected" : "");
  a.href = `profile.html?id=${encodeURIComponent(staff.id)}`;
  a.setAttribute("aria-label", `Open profile for ${staff.name}`);

  const frame = document.createElement("div");
  frame.className = "card__frame";

  const video = document.createElement("video");
  video.className = "card__video";
  video.src = staff.video;
  video.muted = true;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "metadata";

  // Autoplay reliability (some browsers need an explicit play call).
  video.addEventListener("canplay", () => {
    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  });

  const meta = document.createElement("div");
  meta.className = "card__meta";
  meta.innerHTML = `
    <div class="card__name">${escapeHtml(staff.name)}</div>
    <div class="card__role">${escapeHtml(staff.role)}</div>
    <div class="card__club">${escapeHtml(staff.club)}</div>
  `;

  const badge = document.createElement("div");
  badge.className = "card__badge";
  badge.textContent = collected ? "COLLECTED" : "TAP";

  frame.appendChild(video);
  frame.appendChild(badge);
  a.appendChild(frame);
  a.appendChild(meta);

  a.addEventListener("click", () => {
    markCollected(staff.id);
    updateCounters();
  });

  return a;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderGrid() {
  const grid = $("#cardGrid");
  if (!grid) return;

  const collected = new Set(loadCollected());
  grid.innerHTML = "";
  STAFF.forEach((s) => grid.appendChild(createCard(s, collected.has(s.id))));
}

function highlightPack() {
  const grid = $("#cardGrid");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".card"));
  cards.forEach((c) => c.classList.remove("card--spotlight"));

  const picks = shuffle([...cards]).slice(0, Math.min(5, cards.length));
  picks.forEach((c) => c.classList.add("card--spotlight"));

  if (picks[0]) {
    picks[0].scrollIntoView({ behaviour: "smooth", block: "center" });
  }
  toast("Pack opened! 5 random cards highlighted ✨");
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function wireActions() {
  const packBtn = $("#packBtn");
  if (packBtn) packBtn.addEventListener("click", highlightPack);

  const collectAll = $("#collectAll");
  if (collectAll) {
    collectAll.addEventListener("click", () => {
      saveCollected(STAFF.map((s) => s.id));
      renderGrid();
      updateCounters();
      toast("Teacher Mode: all cards marked as collected ✅");
    });
  }

  const copyLinkBtn = $("#copyLink");
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast("Link copied 📋");
      } catch {
        toast("Couldn’t copy link — you can copy from the address bar.");
      }
    });
  }
}

function init() {
  setDonateLinks();
  renderGrid();
  updateCounters();
  wireActions();

  // Try to start the promo video.
  const promo = $("#promoVideo");
  if (promo) {
    const p = promo.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }
}

document.addEventListener("DOMContentLoaded", init);


/* Promo video sound toggle */
(function(){
  const v = document.getElementById('promoVideo');
  const b = document.getElementById('promoSound');
  if(!v || !b) return;
  const setUI = () => {
    const muted = v.muted;
    b.setAttribute('aria-pressed', muted ? 'false' : 'true');
    b.setAttribute('aria-label', muted ? 'Unmute promo video' : 'Mute promo video');
    b.textContent = muted ? '🔇 Unmute' : '🔊 Mute';
  };
  setUI();
  b.addEventListener('click', () => {
    v.muted = !v.muted;
    // some browsers require a play() call after unmuting
    v.play().catch(()=>{});
    setUI();
  });
})();
