const projects = [
  {
    tag: "Machine Learning | NLP",
    title: "Email Spam Classifier",
    subtitle: "Intelligent Text Classification Pipeline",
    description:
      "Developed a machine learning model to classify emails as spam or non-spam using natural language processing techniques and structured data preprocessing pipelines.",
    contributions: [
      "Performed text preprocessing including tokenization, vectorization, and feature extraction",
      "Trained and evaluated classification models using Scikit-learn",
      "Applied performance metrics such as accuracy, precision, and recall for validation",
      "Optimized model performance through data cleaning and feature engineering"
    ],
    technologies: ["Python", "Scikit-learn", "NLP", "Pandas"],
    impact: "Achieved reliable and consistent spam detection performance on test datasets.",
    github: "https://github.com/Winnie758",
    demo: "#"
  },
  {
    tag: "Data Science | ML",
    title: "Smart Water Optimization System for Tomato Farming",
    subtitle: "Sustainable Irrigation Intelligence",
    description:
      "Designed a data-driven irrigation optimization system that leverages environmental and soil data to improve water usage efficiency and agricultural productivity.",
    contributions: [
      "Analyzed environmental and soil datasets to identify key irrigation factors",
      "Built predictive models to determine optimal watering schedules",
      "Applied data analysis and visualization techniques for actionable insights",
      "Focused on sustainability and resource optimization in agriculture"
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "NumPy", "Pandas"],
    impact: "Generated insights that improve water efficiency and support sustainable farming practices.",
    github: "https://github.com/Winnie758",
    demo: "#"
  },
  {
    tag: "Hackathon",
    title: "Hackathon Innovation Project – AI Python Solution",
    subtitle: "Rapid Prototyping Under Constraints",
    description:
      "Collaborated in a fast-paced hackathon environment to design and deploy an AI-powered solution, delivering a functional prototype within strict time constraints.",
    contributions: [
      "Contributed to end-to-end development of a Python-based intelligent system",
      "Integrated APIs and implemented core application logic under time pressure",
      "Collaborated effectively within a team to ideate, build, and present the solution",
      "Delivered a working demo aligned with problem requirements"
    ],
    technologies: ["Python", "APIs", "Problem Solving", "Team Collaboration"],
    impact: "Successfully developed and presented a functional solution within a competitive setting.",
    github: "https://github.com/Winnie758",
    demo: "#"
  }
];

const academicsByYear = {
  year1: [
    "Introduction to Computer Science",
    "Introduction to Philosophy and Critical Thinking",
    "Discrete Mathematics",
    "Algebra",
    "Geometry and Linear Algebra",
    "Calculus I",
    "Gender, HIV/AIDS and Substance Use",
    "Calculus II",
    "Mechanics I",
    "Probability and Statistics I",
    "Computer Programming",
    "Linear Algebra I"
  ],
  year2: [
    "Data Structures and Algorithms",
    "Probability and Statistics II",
    "Mechanics II",
    "Linear Algebra II",
    "Computational Mathematics I",
    "Calculus III",
    "Communication Skills: Africa’s Contribution to Mathematics and Film",
    "Vector Analysis",
    "Real Analysis",
    "Ordinary Differential Equations",
    "Calculus II",
    "Communication Skills: African Technology and Literature"
  ],
  year3: [
    "Design and Analysis of Algorithms",
    "Complex Analysis I",
    "Ordinary Differential Equations II",
    "Fluid Dynamics I",
    "Numerical Analysis I",
    "Computational Mathematics II",
    "Communication Skills: Traditional Africa",
    "Partial Differential Equations I",
    "Stochastic Processes",
    "Applied Mathematical Modelling I",
    "Numerical Analysis II",
    "Linear Programming and Optimization",
    "Data Analytics I",
    "Communication Skills: The Arts of Africa"
  ],
  year4: [
    "Machine Learning",
    "Functional Analysis",
    "Partial Differential Equations II",
    "Mathematical Biology",
    "Advanced Optimization",
    "Research Project I",
    "Industrial/Institutional Attachment",
    "Fourier Series and Transform",
    "Data Analytics II",
    "Environmental Systems Modelling",
    "Applied Mathematical Modelling II",
    "Simulation and Probabilistic Modelling",
    "Research Project II",
    "Entrepreneurship Skills",
    "Communication Skills: Critical Thinking and Communication Skills"
  ]
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeokqvza";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const projectsGrid = document.getElementById("projects-grid-core");
const acadYear1 = document.getElementById("acad-year-1");
const acadYear2 = document.getElementById("acad-year-2");
const acadYear3 = document.getElementById("acad-year-3");
const acadYear4 = document.getElementById("acad-year-4");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const siteHeader = document.getElementById("site-header");
const heroRole = document.getElementById("hero-role");
const countrySelect = document.getElementById("country-select");
const regionSelect = document.getElementById("region-select");
const regionStatus = document.getElementById("region-status");
const githubReposList = document.getElementById("github-repos-list");
const ghPublicRepos = document.getElementById("gh-public-repos");
const ghFollowers = document.getElementById("gh-followers");
const ghTotalStars = document.getElementById("gh-total-stars");

const heroRoles = [
  "Data Analyst",
  "Mathematical Modeller",
  "Web Developer",
  "Machine Learning Enthusiast"
];

function initNavigation() {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initHeaderScroll() {
  const update = () => {
    if (!siteHeader) {
      return;
    }
    siteHeader.classList.toggle("scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initHeroRoleTyping() {
  if (!heroRole) {
    return;
  }

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    const word = heroRoles[wordIndex];
    heroRole.textContent = word.slice(0, charIndex);

    if (!deleting) {
      charIndex += 1;
      if (charIndex > word.length) {
        deleting = true;
        setTimeout(type, 1100);
        return;
      }
    } else {
      charIndex -= 1;
      if (charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % heroRoles.length;
        charIndex = 0;
      }
    }

    const speed = deleting ? 32 : 58;
    setTimeout(type, speed);
  };

  type();
}

function renderProjects() {
  if (!projectsGrid) {
    return;
  }
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <div class="project-head">
          <span class="project-tag">${project.tag}</span>
          <h3>${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
        </div>
        <p>${project.description}</p>
        <div class="project-contrib">
          <h4>Key Contributions</h4>
          <ul>
            ${project.contributions.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="project-tags">
          ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
        <p class="project-impact"><strong>Impact:</strong> ${project.impact}</p>
      </article>
    `
    )
    .join("");
}

function renderAcademics() {
  const fill = (el, items) => {
    if (!el) return;
    el.innerHTML = items.map((x) => `<li>${x}</li>`).join("");
  };
  fill(acadYear1, academicsByYear.year1);
  fill(acadYear2, academicsByYear.year2);
  fill(acadYear3, academicsByYear.year3);
  fill(acadYear4, academicsByYear.year4);

  const cards = Array.from(document.querySelectorAll(".acad-card"));
  cards.forEach((card) => {
    const btn = card.querySelector(".acad-year-btn");
    const content = card.querySelector(".acad-year-content");
    if (!btn || !content) return;
    btn.addEventListener("click", () => {
      const willOpen = btn.getAttribute("aria-expanded") !== "true";
      cards.forEach((c) => {
        const b = c.querySelector(".acad-year-btn");
        const ct = c.querySelector(".acad-year-content");
        if (!b || !ct) return;
        b.setAttribute("aria-expanded", "false");
        ct.style.maxHeight = "0px";
      });
      if (willOpen) {
        btn.setAttribute("aria-expanded", "true");
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });
}

function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll(".counter");
  const animateCounter = (counter) => {
    const target = Number(counter.dataset.target);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 80));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = String(target);
        clearInterval(timer);
      } else {
        counter.textContent = String(current);
      }
    }, 20);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.55 }
  );

  counters.forEach((c) => observer.observe(c));
}

function initSkillBars() {
  const bars = document.querySelectorAll(".bar div");
  const activeAnimations = new WeakMap();

  const animateBar = (bar) => {
    const running = activeAnimations.get(bar);
    if (running) {
      cancelAnimationFrame(running);
    }
    bar.style.width = "0%";
    const target = Number(bar.dataset.width || 0);
    let current = 0;
    const duration = 560;
    const start = performance.now();
    bar.classList.add("is-animating");

    const step = (time) => {
      const progress = Math.min(1, (time - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      current = target * eased;
      bar.style.width = `${current}%`;
      if (progress < 1) {
        const frame = requestAnimationFrame(step);
        activeAnimations.set(bar, frame);
      } else {
        bar.classList.remove("is-animating");
        activeAnimations.delete(bar);
      }
    };

    const frame = requestAnimationFrame(step);
    activeAnimations.set(bar, frame);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateBar(entry.target);
        } else {
          entry.target.classList.remove("is-animating");
          entry.target.style.width = "0%";
          const running = activeAnimations.get(entry.target);
          if (running) {
            cancelAnimationFrame(running);
            activeAnimations.delete(entry.target);
          }
        }
      });
    },
    { threshold: 0.18 }
  );

  bars.forEach((bar) => {
    bar.style.width = "0%";
  });
  bars.forEach((bar) => observer.observe(bar));
}

function initCompetencyFlipCards() {
  const cards = document.querySelectorAll(".competency-flip-card");
  cards.forEach((card) => {
    const toggleCard = () => {
      const pressed = card.getAttribute("aria-pressed") === "true";
      card.setAttribute("aria-pressed", String(!pressed));
      card.classList.toggle("is-flipped", !pressed);
    };

    card.addEventListener("click", toggleCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCard();
      }
    });
  });
}

async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name");
  if (!response.ok) {
    throw new Error("Failed to load countries.");
  }
  const countries = await response.json();
  return countries
    .map((entry) => entry?.name?.common)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

async function fetchRegionsByCountry(country) {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ country })
  });

  if (!response.ok) {
    throw new Error("Failed to load regions.");
  }

  const payload = await response.json();
  const states = payload?.data?.states;
  if (!Array.isArray(states)) {
    return [];
  }

  return states
    .map((state) => state?.name)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function setRegionSelectState({ disabled, statusMessage, options = [] }) {
  if (!regionSelect || !regionStatus) {
    return;
  }

  regionSelect.disabled = disabled;
  regionSelect.classList.toggle("active-select", !disabled);
  regionSelect.innerHTML = options.length
    ? `<option value="">Select region...</option>${options.map((option) => `<option value="${option}">${option}</option>`).join("")}`
    : `<option value="">${disabled ? "Not applicable" : "Select region..."}</option>`;
  regionStatus.textContent = statusMessage;
}

async function initLocationDropdowns() {
  if (!countrySelect || !regionSelect || !regionStatus) {
    return;
  }

  countrySelect.innerHTML = `<option value="">Loading countries...</option>`;
  setRegionSelectState({
    disabled: true,
    statusMessage: "Select a country to load subdivisions."
  });

  try {
    const countries = await fetchCountries();
    countrySelect.innerHTML = `
      <option value="">Select a country...</option>
      ${countries.map((country) => `<option value="${country}">${country}</option>`).join("")}
    `;
  } catch (error) {
    countrySelect.innerHTML = `<option value="">Unable to load countries</option>`;
    regionStatus.textContent = "Country list could not be loaded. Check your internet and refresh.";
    return;
  }

  countrySelect.addEventListener("change", async () => {
    const selectedCountry = countrySelect.value;
    if (!selectedCountry) {
      setRegionSelectState({
        disabled: true,
        statusMessage: "Select a country to load subdivisions."
      });
      return;
    }

    regionSelect.disabled = true;
    regionSelect.classList.remove("active-select");
    regionSelect.innerHTML = `<option value="">Loading regions...</option>`;
    regionStatus.textContent = "Loading subdivisions...";

    try {
      const regions = await fetchRegionsByCountry(selectedCountry);
      if (!regions.length) {
        setRegionSelectState({
          disabled: true,
          statusMessage: "Not applicable for this country."
        });
        return;
      }

      setRegionSelectState({
        disabled: false,
        statusMessage: `${regions.length} subdivisions available.`,
        options: regions
      });
    } catch (error) {
      setRegionSelectState({
        disabled: true,
        statusMessage: "Could not load subdivisions. Please continue with country only."
      });
    }
  });
}

async function initGithubShowcase() {
  if (!githubReposList || !ghPublicRepos || !ghFollowers || !ghTotalStars) {
    return;
  }

  const username = "Winnie758";
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub fetch failed");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();
    const topRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
      .slice(0, 6);

    const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

    ghPublicRepos.textContent = String(user.public_repos ?? "--");
    ghFollowers.textContent = String(user.followers ?? "--");
    ghTotalStars.textContent = String(totalStars);

    githubReposList.innerHTML = topRepos.length
      ? topRepos
          .map(
            (repo) => `
          <article class="spatial-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || "Geospatial / full-stack repository from active ongoing work."}</p>
            <div class="github-meta">
              <span>${repo.language || "Code"}</span>
              <span>${repo.stargazers_count} stars</span>
              <span>${repo.forks_count} forks</span>
            </div>
          </article>
        `
          )
          .join("")
      : `
        <article class="spatial-card">
          <h3>Repository data unavailable</h3>
          <p>GitHub API returned no repositories at this time.</p>
        </article>
      `;
  } catch (error) {
    ghPublicRepos.textContent = "--";
    ghFollowers.textContent = "--";
    ghTotalStars.textContent = "--";
    githubReposList.innerHTML = `
      <article class="spatial-card">
        <h3>Unable to fetch GitHub right now</h3>
        <p>Live repository details could not be loaded. Please try again later.</p>
      </article>
    `;
  }
}

function validateForm(data) {
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (!data.name || data.name.trim().length < 2) {
    return "Please enter a valid name.";
  }
  if (!emailOk) {
    return "Please enter a valid email address.";
  }
  if (!data.country || data.country.trim().length < 2) {
    return "Please provide your country/location.";
  }
  if (!data.message || data.message.trim().length < 10) {
    return "Message should be at least 10 characters.";
  }
  return "";
}

function initContactForm() {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.textContent = "";
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    const validationMessage = validateForm(data);

    if (validationMessage) {
      formStatus.textContent = validationMessage;
      return;
    }

    formStatus.textContent = "Sending message...";
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...data,
          to: "mwethyamutisya.22@gmail.com"
        })
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      contactForm.reset();
      formStatus.textContent = "Message sent successfully. Thank you for reaching out.";
    } catch (error) {
      formStatus.textContent =
        "Could not send via API right now. Please email mwethyamutisya.22@gmail.com directly.";
    }
  });
}

function initThreeBackground() {
  if (typeof THREE === "undefined") {
    return;
  }
  const root = document.getElementById("three-bg");
  if (!root) {
    return;
  }
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
  renderer.setSize(window.innerWidth, window.innerHeight);
  root.append(renderer.domElement);

  const geometry = new THREE.IcosahedronGeometry(2.2, 1);
  const material = new THREE.MeshStandardMaterial({
    color: 0x7c5cff,
    emissive: 0x2de2e6,
    emissiveIntensity: 0.18,
    metalness: 0.35,
    roughness: 0.32,
    wireframe: true
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const pointLight = new THREE.PointLight(0x9f8bff, 1.3);
  pointLight.position.set(3, 4, 5);
  scene.add(pointLight);
  scene.add(new THREE.AmbientLight(0xffffff, 0.22));

  camera.position.z = 6;

  function animate() {
    mesh.rotation.x += 0.003;
    mesh.rotation.y += 0.004;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

function initParticlesBackground() {
  const canvas = document.createElement("canvas");
  canvas.id = "particles-bg";
  document.body.append(canvas);
  const ctx = canvas.getContext("2d");
  const nodes = [];
  const pulses = [];
  const total = 52;
  const maxDist = 190;
  let heroClipHeight = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const dashboardSection = document.querySelector(".dashboard");
    heroClipHeight = dashboardSection
      ? Math.round(dashboardSection.getBoundingClientRect().height)
      : Math.round(document.getElementById("home")?.getBoundingClientRect().height || 0);
  }

  function makeParticle() {
    return {
      x: Math.random() * canvas.width,
      y: heroClipHeight + Math.random() * Math.max(120, canvas.height - heroClipHeight),
      z: Math.random() * 0.9 + 0.2,
      r: Math.random() * 1.35 + 0.8,
      vx: (Math.random() - 0.5) * 0.06,
      vy: (Math.random() - 0.5) * 0.06
    };
  }

  function lerpColor(t) {
    return {
      r: Math.round(79 + (99 - 79) * t),
      g: Math.round(209 + (210 - 209) * t),
      b: Math.round(197 + (255 - 197) * t)
    };
  }

  function rgba(c, a) {
    return `rgba(${c.r}, ${c.g}, ${c.b}, ${a})`;
  }

  function connect(p1, p2, phase) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < maxDist) {
      const alpha = Math.max(0.045, 0.17 - dist / 1500);
      const weight = Math.max(0.5, 1.15 - dist / 240);
      const tint = lerpColor((Math.sin(phase + p1.z * 2) + 1) * 0.5);
      ctx.strokeStyle = rgba(tint, alpha);
      ctx.lineWidth = weight;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      if (Math.random() < 0.001 && pulses.length < 50) {
        pulses.push({
          from: { x: p1.x, y: p1.y },
          to: { x: p2.x, y: p2.y },
          t: 0,
          speed: 0.012 + Math.random() * 0.01
        });
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const phase = performance.now() * 0.00015;
    const meshPoints = [];
    ctx.save();
    ctx.beginPath();
    const excludedHeight = heroClipHeight;
    ctx.rect(0, excludedHeight, canvas.width, Math.max(0, canvas.height - excludedHeight));
    ctx.clip();

    const bg = ctx.createLinearGradient(0, excludedHeight, 0, canvas.height);
    bg.addColorStop(0, "rgba(8, 20, 48, 0.20)");
    bg.addColorStop(1, "rgba(5, 58, 80, 0.22)");
    ctx.fillStyle = bg;
    ctx.fillRect(0, excludedHeight, canvas.width, canvas.height - excludedHeight);

    nodes.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) {
        p.vx *= -1;
      }
      if (p.y < 0 || p.y > canvas.height) {
        p.vy *= -1;
      }
      if (p.y < heroClipHeight) {
        p.y = heroClipHeight + Math.random() * 6;
      }
      const swayedX = p.x + Math.sin(phase + i * 0.73) * (1.8 + p.z);
      const swayedY = p.y + Math.cos(phase * 0.85 + i * 0.61) * (1.4 + p.z * 0.8);
      meshPoints.push({ x: swayedX, y: swayedY, r: p.r, z: p.z });
    });

    meshPoints.forEach((point, i) => {
      ctx.beginPath();
      const tint = lerpColor((Math.sin(phase + i * 0.11) + 1) * 0.5);
      ctx.shadowBlur = 8;
      ctx.shadowColor = rgba(tint, 0.45);
      ctx.fillStyle = rgba(tint, 0.22);
      ctx.strokeStyle = "rgba(235, 248, 255, 0.9)";
      ctx.lineWidth = 0.95;
      ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;
      let linked = 0;
      for (let j = i + 1; j < meshPoints.length && linked < 6; j += 1) {
        const dx = point.x - meshPoints[j].x;
        const dy = point.y - meshPoints[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          connect(point, meshPoints[j], phase);
          linked += 1;
        }
      }
    });

    for (let i = pulses.length - 1; i >= 0; i -= 1) {
      const pulse = pulses[i];
      pulse.t += pulse.speed;
      if (pulse.t >= 1) {
        pulses.splice(i, 1);
        continue;
      }
      const x = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.t;
      const y = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.t;
      ctx.beginPath();
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(145, 233, 255, 0.7)";
      ctx.fillStyle = "rgba(173, 238, 255, 0.85)";
      ctx.arc(x, y, 1.35, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    const centerMask = ctx.createRadialGradient(
      canvas.width * 0.5,
      excludedHeight + (canvas.height - excludedHeight) * 0.5,
      60,
      canvas.width * 0.5,
      excludedHeight + (canvas.height - excludedHeight) * 0.5,
      Math.max(260, canvas.width * 0.32)
    );
    centerMask.addColorStop(0, "rgba(7, 17, 40, 0.28)");
    centerMask.addColorStop(1, "rgba(7, 17, 40, 0)");
    ctx.fillStyle = centerMask;
    ctx.fillRect(0, excludedHeight, canvas.width, canvas.height - excludedHeight);

    ctx.restore();
    requestAnimationFrame(draw);
  }

  resize();
  for (let i = 0; i < total; i += 1) {
    nodes.push(makeParticle());
  }
  window.addEventListener("resize", () => {
    resize();
    nodes.length = 0;
    for (let i = 0; i < total; i += 1) {
      nodes.push(makeParticle());
    }
  });
  draw();
}

function initCardTilt() {
  const cards = document.querySelectorAll(".domain-card, .project-card, .skill-card, .cert-card, .vol-card");
  cards.forEach((card) => {
    card.classList.add("tilt-card");

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;
      const rotateY = px * 8;
      const rotateX = -py * 8;
      card.style.transform = `translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    };

    const reset = () => {
      card.style.transform = "";
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", reset);
    card.addEventListener("blur", reset, true);
  });
}

function init() {
  initNavigation();
  initHeaderScroll();
  initHeroRoleTyping();
  renderProjects();
  renderAcademics();
  initRevealAnimations();
  initCounters();
  initSkillBars();
  initCompetencyFlipCards();
  initLocationDropdowns();
  initContactForm();
  initParticlesBackground();
  initThreeBackground();
  initCardTilt();
}

init();
