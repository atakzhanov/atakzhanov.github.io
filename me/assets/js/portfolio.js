const translations = {
  ru: {
    title: "Александр Такжанов | Project Manager",
    description:
      "Александр Такжанов - Project Manager и руководитель группы разработки с DevOps-бэкграундом: поставка по Scrum, планирование, риски, согласование со стейкхолдерами.",
    menu: {
      experience: "Опыт",
      projects: "Проекты",
      skills: "Навыки",
      education: "Образование",
      resume: "Резюме",
      contact: "Контакты",
    },
    hero: {
      kicker: "Управление проектами - Delivery - Разработка",
      name: "Александр Такжанов",
      role: "Project Manager - Team Lead",
      lead:
        "Веду команды разработки от старта проекта до поставки: планирование, приоритеты, риски и договорённости с бизнесом, с опорой на сильный технический бэкграунд.",
      location: "Сербия",
      availability: "Удалённо или с релокацией; любой формат занятости",
    },
    metrics: {
      experience: "лет в IT",
      team: "человек в команде",
      lead: "года руководства разработкой",
      devops: "технический бэкграунд",
    },
    profile: {
      title: "Профиль",
      body:
        "Руководитель группы разработки с техническим бэкграундом в DevOps. Два года вёл команду из 12–18 человек и довёл корпоративную платформу от старта разработки до приёмки заказчиком в согласованный срок.",
      target:
        "Желаемая роль: Project Manager или Delivery Manager в команде разработки, где я отвечаю за планирование, предсказуемость поставки и согласование со стейкхолдерами.",
    },
    experience: {
      title: "Опыт",
      e0h: "Project Manager - Next Genium",
      e0b: "Геймдев-студия, разработка игр для ПК и консолей. Детали проекта под NDA.",
      e0date: "11.2026 - н.в. · частичная занятость",
      e1h: "Руководитель группы разработки",
      e1company: "АО «Консалт Плюс»",
      e1date: "04.2024 - 03.2026",
      e1b:
        "Корпоративная MDM-платформа, разработанная с нуля для крупного заказчика под NDA: модульный монолит с микросервисами и асинхронным обменом через Kafka.",
      e2h: "DevOps-инженер - АО «Консалт Плюс»",
      e2b:
        "CI/CD на GitLab CI, автоматизация развёртывания через Ansible и Docker Compose, PostgreSQL с резервным копированием, мониторинг на Prometheus, Grafana, Loki, Jaeger и Zabbix.",
      e2date: "08.2023 - 03.2024",
      e3h: "DevOps-инженер - фриланс",
      e3b:
        "Краткосрочные проекты: настройка CI/CD, контейнеризация на Docker, окружения на серверах Linux и Windows (IIS).",
      e3date: "10.2022 - 07.2023",
      e4h: "DevOps-инженер - Сбер",
      e4b:
        "CI/CD и регулярная доставка релизов высоконагруженной корпоративной системы «Сенат», администрирование Linux/Windows, PostgreSQL и Redis, сквозной мониторинг.",
      e4date: "09.2019 - 09.2022",
    },
    impact: {
      title: "Ключевой вклад",
      i1: "Вёл команду разработки из 12–18 человек от старта проекта до приёмки заказчиком; проект сдан в согласованный срок.",
      i2: "Вместе с менеджером проекта и бизнес-аналитиками планировал спринты и релизы: оценки, риски, зависимости, изменения требований. Двухнедельные спринты с релизом по итогам каждого.",
      i3: "Договаривался с бизнесом о реалистичном объёме на квартал на основе фактической velocity команды, в том числе перевёл крупную ML-функциональность в формат пилота.",
      i4: "Участвовал в согласовании требований с заказчиком, проводил демонстрации готового функционала.",
      i5: "Руководил разработкой интеграций с внешними системами: адаптер на Apache Airflow, REST API, Kafka, прямые подключения к БД.",
    },
    projects: {
      title: "Проекты",
      intro:
        "Персональные проекты, которые я полностью сделал сам вместе с AI-агентами: от идеи и требований до работающей версии.",
      names: "StudentShell · Skill RPG · Mangaka Studio · Market Control · Grail",
      link: "Все проекты с описаниями и экранами →",
    },
    skills: {
      title: "Навыки",
      pm: "Управление проектами",
      pmText:
        "Scrum - планирование спринтов и релизов - оценка задач - риски и зависимости - управление изменениями требований - демонстрации заказчику",
      tools: "Инструменты",
      toolsText: "Jira - Confluence - Gantt / роадмапы",
      tech: "Технический бэкграунд",
      techText:
        "CI/CD (GitLab CI, Ansible) - Docker, Docker Swarm, OpenShift - PostgreSQL, SQL - Kafka, Airflow, REST API - микросервисная архитектура - Prometheus, Grafana, Zabbix - Linux, Windows Server",
      languages: "Языки",
      languagesText: "Русский - родной; английский - свободно читаю техническую документацию",
    },
    education: {
      title: "Образование",
      c1: "Coursera, 2026",
      c1Text: "Google - Foundations of Project Management",
      c2: "École 42 (Школа 21), 2025",
      c2Text: "Сертификат 42 Cursus, Advanced Developer (Level 18)",
      c3: "ДГТУ, 2021",
      c3Text: "Бакалавриат, «Автоматизация технологических процессов и производств»",
    },
    resume: {
      title: "Резюме",
      en: "English CV",
      ru: "Русское CV",
    },
    footer: { text: "Александр Такжанов - Project Manager - " },
  },
  en: {
    title: "Aleksandr Takzhanov | Project Manager",
    description:
      "Aleksandr Takzhanov - Project Manager and development team lead with a DevOps background: Scrum delivery, planning, risks and stakeholder alignment.",
    menu: {
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      kicker: "Project management - Delivery - Engineering",
      name: "Aleksandr Takzhanov",
      role: "Project Manager - Team Lead",
      lead:
        "I lead development teams from the start of a project to delivery: planning, priorities, risks and agreements with the business, backed by a strong engineering background.",
      location: "Serbia",
      availability: "Remote or relocation; any employment type",
    },
    metrics: {
      experience: "years in IT",
      team: "people in the team I led",
      lead: "years leading development",
      devops: "engineering background",
    },
    profile: {
      title: "Profile",
      body:
        "Development team lead with a DevOps background. For two years I led a team of 12–18 people and took a corporate platform from the start of development to client acceptance on the agreed schedule.",
      target:
        "Target role: Project Manager or Delivery Manager in a development team, where I can own planning, delivery predictability and stakeholder alignment.",
    },
    experience: {
      title: "Experience",
      e0h: "Project Manager - Next Genium",
      e0b: "Game development studio building titles for PC and consoles. Project details under NDA.",
      e0date: "Nov 2026 - present · part-time",
      e1h: "Development Team Lead",
      e1company: "Consult Plus JSC",
      e1date: "Apr 2024 - Mar 2026",
      e1b:
        "Corporate MDM platform built from scratch for a large client under NDA: modular monolith with microservices and asynchronous messaging via Kafka.",
      e2h: "DevOps Engineer - Consult Plus JSC",
      e2b:
        "CI/CD on GitLab CI, deployment automation with Ansible and Docker Compose, PostgreSQL with backups, monitoring with Prometheus, Grafana, Loki, Jaeger and Zabbix.",
      e2date: "Aug 2023 - Mar 2024",
      e3h: "DevOps Engineer - Freelance",
      e3b:
        "Short-term projects: CI/CD setup, containerization with Docker, environments on Linux and Windows (IIS) servers.",
      e3date: "Oct 2022 - Jul 2023",
      e4h: "DevOps Engineer - Sber",
      e4b:
        "CI/CD and regular release delivery for the high-load Senat corporate system, Linux/Windows, PostgreSQL and Redis administration, end-to-end monitoring.",
      e4date: "Sep 2019 - Sep 2022",
    },
    impact: {
      title: "Selected impact",
      i1: "Led a development team of 12–18 people from project start to client acceptance; the project was delivered on the agreed schedule.",
      i2: "Planned sprints and releases with the project manager and business analysts: estimates, risks, dependencies and requirement changes. Two-week sprints with a release at the end of each.",
      i3: "Negotiated realistic quarterly scope with the business using the team's actual velocity, including moving a large ML feature into a pilot.",
      i4: "Took part in agreeing requirements with the client and ran demos of delivered features.",
      i5: "Led development of integrations with external systems: Apache Airflow adapter, REST API, Kafka, direct database connections.",
    },
    projects: {
      title: "Projects",
      intro:
        "Personal projects I built end to end myself together with AI agents: from idea and requirements to a working version.",
      names: "StudentShell · Skill RPG · Mangaka Studio · Market Control · Grail",
      link: "All projects with descriptions and screens →",
    },
    skills: {
      title: "Skills",
      pm: "Project management",
      pmText:
        "Scrum - Sprint and release planning - Estimation - Risks and dependencies - Requirements change management - Client demos",
      tools: "Tools",
      toolsText: "Jira - Confluence - Gantt / roadmaps",
      tech: "Technical background",
      techText:
        "CI/CD (GitLab CI, Ansible) - Docker, Docker Swarm, OpenShift - PostgreSQL, SQL - Kafka, Airflow, REST API - Microservice architecture - Prometheus, Grafana, Zabbix - Linux, Windows Server",
      languages: "Languages",
      languagesText: "Russian - native; English - fluent reading of technical documentation",
    },
    education: {
      title: "Education",
      c1: "Coursera, 2026",
      c1Text: "Google - Foundations of Project Management",
      c2: "École 42 (School 21), 2025",
      c2Text: "42 Cursus certificate, Advanced Developer (Level 18)",
      c3: "DSTU, 2021",
      c3Text: "Bachelor's degree, Automation of Technological Processes and Production",
    },
    resume: {
      title: "Resume",
      en: "English CV",
      ru: "Russian CV",
    },
    footer: { text: "Aleksandr Takzhanov - Project Manager - " },
  },
};

const RELEASE_DEFAULT_LANG = "ru";
const DEV_DEFAULT_LANG = "ru";
const isDev =
  location.protocol === "file:" ||
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1";
const defaultLang = isDev ? DEV_DEFAULT_LANG : RELEASE_DEFAULT_LANG;
const allowedLangs = ["ru", "en"];

function byPath(obj, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

function getSavedLang() {
  try {
    return localStorage.getItem("portfolio-lang");
  } catch {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch {
    // Storage can be unavailable for local file URLs.
  }
}

function updateUrlLang(lang) {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  } catch {
    // Some browsers do not allow history changes for local file URLs.
  }
}

function applyLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = dict.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", dict.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = byPath(dict, key);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang-btn") === lang);
  });

  saveLang(lang);
  updateUrlLang(lang);
}

const urlLang = new URL(window.location.href).searchParams.get("lang");
const savedLang = getSavedLang();
const initialLang = allowedLangs.includes(urlLang)
  ? urlLang
  : allowedLangs.includes(savedLang)
  ? savedLang
  : defaultLang;

applyLang(initialLang);

document.querySelectorAll("[data-lang-btn]").forEach((button) => {
  button.addEventListener("click", () => applyLang(button.getAttribute("data-lang-btn")));
});

document.getElementById("year").textContent = new Date().getFullYear();
