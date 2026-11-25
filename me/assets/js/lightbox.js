// Image viewer for project galleries: opens a thumbnail in an overlay and
// pages through the other images of the same gallery (buttons, arrow keys, swipe).
const Lightbox = (() => {
  let overlay;
  let imgEl;
  let captionEl;
  let counterEl;
  let items = [];
  let index = 0;
  let touchStartX = null;
  let lastFocus = null;

  function build() {
    overlay = document.createElement("div");
    overlay.className = "lb";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.hidden = true;
    overlay.innerHTML = `
      <button type="button" class="lb-btn lb-close" aria-label="Close">✕</button>
      <button type="button" class="lb-btn lb-prev" aria-label="Previous">‹</button>
      <figure class="lb-figure">
        <img class="lb-img" alt="" />
        <figcaption><span class="lb-caption"></span><span class="lb-counter"></span></figcaption>
      </figure>
      <button type="button" class="lb-btn lb-next" aria-label="Next">›</button>`;
    document.body.appendChild(overlay);

    imgEl = overlay.querySelector(".lb-img");
    captionEl = overlay.querySelector(".lb-caption");
    counterEl = overlay.querySelector(".lb-counter");

    overlay.querySelector(".lb-close").addEventListener("click", close);
    overlay.querySelector(".lb-prev").addEventListener("click", () => show(index - 1));
    overlay.querySelector(".lb-next").addEventListener("click", () => show(index + 1));
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close();
    });
    overlay.addEventListener("touchstart", (event) => {
      touchStartX = event.touches[0].clientX;
    }, { passive: true });
    overlay.addEventListener("touchend", (event) => {
      if (touchStartX === null) return;
      const dx = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
    });
    document.addEventListener("keydown", (event) => {
      if (overlay.hidden) return;
      if (event.key === "Escape") close();
      else if (event.key === "ArrowLeft") show(index - 1);
      else if (event.key === "ArrowRight") show(index + 1);
    });
  }

  function show(i) {
    index = (i + items.length) % items.length;
    const item = items[index];
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    captionEl.textContent = item.caption;
    counterEl.textContent = items.length > 1 ? `${index + 1} / ${items.length}` : "";
    overlay.classList.toggle("lb-single", items.length < 2);
  }

  function open(galleryItems, startIndex) {
    if (!overlay) build();
    items = galleryItems;
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("lb-open");
    show(startIndex);
    overlay.querySelector(".lb-close").focus();
  }

  function close() {
    overlay.hidden = true;
    document.body.classList.remove("lb-open");
    imgEl.removeAttribute("src");
    if (lastFocus) lastFocus.focus();
  }

  return { open };
})();
