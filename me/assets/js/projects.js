// Renders the personal projects page from PROJECTS_I18N (projects-data.js).
const ALLOWED_LANGS = ["ru", "en"];
const STORAGE_KEY = "portfolio-lang"; // shared with the main resume page

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  });
  children.forEach((child) => child && node.appendChild(child));
  return node;
}

function byPath(obj, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

function renderSteps(dict) {
  const list = document.getElementById("approach-steps");
  list.replaceChildren(
    ...dict.approach.steps.map(([title, text]) =>
      el("li", {}, [el("b", { text: title }), document.createTextNode(text)])
    )
  );
}

function renderIcon(project) {
  if (project.icon) {
    return el("img", { class: "pp-icon", src: IMG + project.icon, alt: "", loading: "lazy" });
  }
  return el("div", { class: "pp-icon", "aria-hidden": "true", text: project.name[0] });
}

function renderGallery(project, dict) {
  if (!project.shots.length) return null;
  const items = project.shots.map(([file, caption]) => ({
    src: IMG + file,
    alt: `${project.name}: ${caption}`,
    caption: `${project.name} — ${caption}`,
  }));
  const figures = project.shots.map(([file, caption], i) => {
    const thumb = el("button", { type: "button", class: "pp-thumb", "aria-label": items[i].alt }, [
      el("img", { src: IMG + file, alt: "", loading: "lazy" }),
    ]);
    thumb.addEventListener("click", () => Lightbox.open(items, i));
    const figure = el("figure", {}, [thumb, el("figcaption", { text: caption })]);
    // Landscape screenshots (desktop apps) get a wider tile than phone screens.
    thumb.querySelector("img").addEventListener("load", (event) => {
      const img = event.target;
      if (img.naturalWidth > img.naturalHeight) figure.classList.add("wide");
    });
    return figure;
  });
  return el("div", { class: "pp-gallery" }, [
    el("p", { class: "pp-gallery-note", text: dict.labels.shotsNote }),
    ...figures,
  ]);
}

function renderList(title, items) {
  return el("div", {}, [el("h3", { text: title }), el("ul", {}, items.map((t) => el("li", { text: t })))]);
}

function renderProject(project, dict) {
  const [status, ...rest] = project.meta;
  return el("article", { class: "pp-card", id: project.id }, [
    el("div", { class: "pp-card-head" }, [
      renderIcon(project),
      el("div", {}, [el("h2", { text: project.name }), el("p", { class: "pp-tagline", text: project.tagline })]),
    ]),
    el("ul", { class: "pp-meta" }, [
      el("li", { class: "status", text: status }),
      ...rest.map((m) => el("li", { text: m })),
    ]),
    el("div", { class: "pp-body" }, [
      renderList(dict.labels.built, project.built),
      renderList(dict.labels.decisions, project.decisions),
    ]),
    renderGallery(project, dict),
  ]);
}

function applyLang(lang) {
  const dict = PROJECTS_I18N[lang];
  document.documentElement.lang = lang;
  document.title = dict.title;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = byPath(dict, node.getAttribute("data-i18n"));
    if (typeof value === "string") node.textContent = value;
  });
  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang-btn") === lang);
  });
  document.querySelector(".pp-back").setAttribute("href", `../?lang=${lang}`);

  renderSteps(dict);
  document.getElementById("project-list").replaceChildren(...dict.projects.map((p) => renderProject(p, dict)));

  try {
    localStorage.setItem(STORAGE_KEY, lang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  } catch {
    // Storage or history can be unavailable (e.g. file URLs).
  }
}

function initialLang() {
  const fromUrl = new URL(window.location.href).searchParams.get("lang");
  if (ALLOWED_LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (ALLOWED_LANGS.includes(saved)) return saved;
  } catch {
    // ignore
  }
  return "ru";
}

applyLang(initialLang());
document.querySelectorAll("[data-lang-btn]").forEach((button) => {
  button.addEventListener("click", () => applyLang(button.getAttribute("data-lang-btn")));
});
