/* global STAFF, DONATE_URL, getStaffById */

function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("toast--show");
  window.clearTimeout(toast._t);
  toast._t = window.setTimeout(() => el.classList.remove("toast--show"), 2400);
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function safeSetText(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value ?? "";
}

function clamp01(n) {
  const x = Number(n);
  if (Number.isNaN(x)) return 0;
  return Math.max(0, Math.min(100, x));
}

function renderStatBars(container, staff) {
  if (!container) return;
  container.innerHTML = "";

  const s = staff.stats || {};
  const bars = [
    { k: "Overall", v: s.overall },
    { k: "Pace", v: s.pacerating },
    { k: "Shooting", v: s.shooting },
    { k: "Passing", v: s.passing },
    { k: "Defending", v: s.defending },
    { k: "Stamina", v: s.stamina },
  ];

  bars.forEach(({ k, v }) => {
    const card = document.createElement("div");
    card.className = "statBar";
    const pct = clamp01(v);
    card.innerHTML = `
      <div class="statBar__top">
        <div class="statBar__label">${k}</div>
        <div class="statBar__value">${v ?? "—"}</div>
      </div>
      <div class="statBar__track">
        <div class="statBar__fill" style="width:${pct}%"></div>
      </div>
    `;
    container.appendChild(card);

    // Trigger transition reliably
    requestAnimationFrame(() => {
      const fill = card.querySelector(".statBar__fill");
      if (fill) fill.style.width = `${pct}%`;
    });
  });
}

function renderFacts(container, staff) {
  if (!container) return;
  container.innerHTML = "";

  // Position card (kept as a wide fact so it matches the original vibe)
  const pos = staff.stats?.position ?? "—";
  const posCard = document.createElement("div");
  posCard.className = "factCard factCard--wide";
  posCard.innerHTML = `<div class="factCard__k">Position</div><div class="factCard__v">${pos}</div>`;
  container.appendChild(posCard);

  (staff.facts || []).forEach((f) => {
    const card = document.createElement("div");
    card.className = "factCard factCard--wide";
    card.innerHTML = `<div class="factCard__k">${f.label}</div><div class="factCard__v">${f.value}</div>`;
    container.appendChild(card);
  });
}

function initProfile() {
  // Donation links
  const donateTop = document.getElementById("donateTop");
  const donateProfile = document.getElementById("donateProfile");
  if (donateTop) donateTop.href = DONATE_URL;
  if (donateProfile) donateProfile.href = DONATE_URL;

  const id = getParam("id");
  const staff = typeof getStaffById === "function" && id ? getStaffById(id) : (STAFF?.[0] || null);

  if (!staff) {
    toast("Couldn’t load that profile. Try going back to cards.");
    return;
  }

  safeSetText("name", staff.name);
  safeSetText("tagline", staff.tagline);

  const pill = document.getElementById("rolePill");
  if (pill) pill.textContent = `${staff.role} • ${staff.club}`;

  // Video
  const v = document.getElementById("profileVideo");
  if (v) {
    v.innerHTML = "";
    const src = document.createElement("source");
    src.src = staff.video;
    src.type = "video/mp4";
    v.appendChild(src);
    v.muted = true;
    v.loop = true;
    v.autoplay = true;
    v.playsInline = true;
    v.play().catch(() => {});
  }

  const badge = document.getElementById("videoBadge");
  if (badge) badge.textContent = "Highlight Reel";

  renderStatBars(document.getElementById("statBars"), staff);
  renderFacts(document.getElementById("facts"), staff);

  safeSetText("challengeText", staff.challenge);

  const copyBtn = document.getElementById("copyProfileLink");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast("Profile link copied!");
      } catch {
        toast("Couldn’t copy. Try copying the address bar.");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initProfile);
