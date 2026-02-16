/* global getStaffById, DONATE_URL */

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

function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function setDonateLinks() {
  ["#donateTop", "#donateProfile"].forEach((sel) => {
    const el = $(sel);
    if (el) el.setAttribute("href", DONATE_URL);
  });
}

function factItem(label, value) {
  const div = document.createElement("div");
  div.className = "fact";
  div.innerHTML = `
    <div class="fact__label">${escapeHtml(label)}</div>
    <div class="fact__value">${escapeHtml(value)}</div>
  `;
  return div;
}

function renderStats(stats) {
  const wrap = document.createElement("div");
  wrap.className = "ratings";

  const top = document.createElement("div");
  top.className = "ratings__top";
  top.innerHTML = `
    <div class="ratings__overall">
      <div class="ratings__overallNum">${stats.overall}</div>
      <div class="ratings__overallLabel">OVR</div>
    </div>
    <div class="ratings__pos">${escapeHtml(stats.position)}</div>
  `;
  wrap.appendChild(top);

  const rows = [
    ["PACE", stats.pacerating],
    ["SHOOT", stats.shooting],
    ["PASS", stats.passing],
    ["DEF", stats.defending],
    ["STAM", stats.stamina],
  ];

  const grid = document.createElement("div");
  grid.className = "ratings__grid";
  rows.forEach(([k, v]) => {
    const item = document.createElement("div");
    item.className = "rating";
    item.innerHTML = `
      <div class="rating__k">${k}</div>
      <div class="rating__v">${v}</div>
      <div class="rating__bar"><span style="width:${Math.max(0, Math.min(100, v))}%"></span></div>
    `;
    grid.appendChild(item);
  });
  wrap.appendChild(grid);

  return wrap;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function init() {
  setDonateLinks();

  const id = getParam("id") || "";
  const staff = getStaffById(id);

  document.title = `${staff.name} • Player Profile`;
  $("#name").textContent = staff.name;
  $("#tagline").textContent = staff.tagline;
  $("#rolePill").textContent = staff.role;
  $("#challengeText").textContent = staff.challenge;

  const facts = $("#facts");
  facts.innerHTML = "";
  facts.appendChild(renderStats(staff.stats));
  staff.facts.forEach((f) => facts.appendChild(factItem(f.label, f.value)));

  const video = $("#profileVideo");
  video.src = staff.video;
  video.addEventListener("canplay", () => {
    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  });

  const copy = $("#copyProfileLink");
  if (copy) {
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast("Profile link copied 📋");
      } catch {
        toast("Couldn’t copy link — you can copy from the address bar.");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
