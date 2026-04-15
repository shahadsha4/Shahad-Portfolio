/* =========================================
   SCRIPT.JS — Core Portfolio Logic
   Three.js 3D, Matrix Rain, Animations,
   GitHub API, Projects, DNA Viz
   ========================================= */

// ============ LOADING SCREEN & AUDIO ============
window.addEventListener('load', () => {
  const bar = document.querySelector('.loading-bar-fill');
  const status = document.getElementById('loading-status');
  const initContainer = document.getElementById('init-button-container');
  const initBtn = document.getElementById('btn-initialize');
  
  // Animate bar to 100% just in case window load was too fast
  if (bar) bar.style.width = '100%';
  
  setTimeout(() => {
    if (status) {
      status.textContent = 'SYSTEM READY. ACCESS RESTRICTED.';
      status.style.color = 'var(--neon-pink)';
    }
    if (initContainer) initContainer.style.display = 'block';
  }, 1000);

  if (initBtn) {
    initBtn.addEventListener('click', () => {
      // 1. Play Hacker Greeting
      playHackerGreeting();
      
      // 2. Clear Screen
      const ls = document.getElementById('loading-screen');
      if (ls) {
        ls.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
        ls.style.opacity = '0';
        setTimeout(() => ls.remove(), 1200);
      }
      
      // 3. Initialize everything else
      startSystem();
    });
  }
});

// Hacker Voice Greeting (Scary/Robotic)
function playHackerGreeting() {
  const msg = "A-C-C-E-S-S G-R-A-N-T-E-D. Hello. I am the secret agent of Shahad. Welcome to the core system. You are now being tracked.";
  const synth = window.speechSynthesis;
  if (!synth) return;
  
  const utter = new SpeechSynthesisUtterance(msg);
  const voices = synth.getVoices();
  
  // Try to find a robotic or deep male voice
  const preferred = voices.find(v => 
    (v.name.includes('Zarvox') || v.name.includes('Robotic') || v.name.includes('Cello') || v.name.includes('David') || v.name.includes('Male')) && v.lang.includes('en')
  ) || voices.find(v => v.lang.startsWith('en')) || voices[0];
  
  if (preferred) utter.voice = preferred;
  utter.pitch = 0.1; // Extremely low for a scary/deep hacker voice
  utter.rate = 0.8;  // Slower, more deliberate speed
  utter.volume = 1;
  
  synth.speak(utter);
}

function startSystem() {
  initMatrix();
  initThreeJS();
  initDNACanvas();
  initAnimations();
  initScrollReveal();
  initSkillBars();
  initCountUp();
  initProjects();
  initGitHub();
  initNavScroll();
  initCustomCursor();
  initContactForm();
  initScrollProgress();
  initNetworkBars();
  initSimulation();
  recruiterInit();
}

// ============ CUSTOM CURSOR ============
function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();
  document.querySelectorAll('a,button,input,textarea,.skill-tag,.chat-suggestion').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
      ring.style.borderColor = 'rgba(0,240,255,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.borderColor = 'rgba(0,240,255,0.5)';
    });
  });
}

// ============ SCROLL PROGRESS ============
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  });
}

// ============ NAV SCROLL EFFECT ============
function initNavScroll() {
  const nav = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-links a');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger && hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none';
    // Active nav
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    links.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
  });
}

// ============ MATRIX RAIN ============
function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコ';
  const fontSize = 14;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = Array(cols).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(2,12,27,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px Share Tech Mono';
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = Math.random() > 0.95 ? '#fff' : '#00ff41';
      ctx.globalAlpha = Math.random() * 0.5 + 0.3;
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    ctx.globalAlpha = 1;
  }
  setInterval(drawMatrix, 50);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ============ THREE.JS 3D HERO ============
function initThreeJS() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
  camera.position.set(0, 0, 5);

  // Ambient & point lights
  scene.add(new THREE.AmbientLight(0x0a1628, 1));
  const blueLight = new THREE.PointLight(0x00f0ff, 3, 20);
  blueLight.position.set(3, 3, 3);
  scene.add(blueLight);
  const purpleLight = new THREE.PointLight(0xbf00ff, 2, 20);
  purpleLight.position.set(-3, -2, 2);
  scene.add(purpleLight);

  // === EARTH GLOBE ===
  const globeGeo = new THREE.SphereGeometry(1.4, 64, 64);
  const globeMat = new THREE.MeshPhongMaterial({
    color: 0x0a1e3c,
    emissive: 0x001a33,
    wireframe: false,
    transparent: true,
    opacity: 0.9,
  });
  const globe = new THREE.Mesh(globeGeo, globeMat);
  scene.add(globe);

  // Wireframe overlay
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.08 });
  const wireGlobe = new THREE.Mesh(new THREE.SphereGeometry(1.41, 32, 32), wireMat);
  scene.add(wireGlobe);

  // Outer glow ring
  const ringGeo = new THREE.TorusGeometry(1.7, 0.01, 8, 100);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.5 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);

  const ring2Geo = new THREE.TorusGeometry(2.0, 0.005, 8, 100);
  const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xbf00ff, transparent: true, opacity: 0.3 });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.x = Math.PI / 4;
  ring2.rotation.y = Math.PI / 6;
  scene.add(ring2);

  // Network nodes on globe
  const nodePositions = [];
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00ff41 });
  for (let i = 0; i < 30; i++) {
    const lat = (Math.random() - 0.5) * Math.PI;
    const lon = Math.random() * Math.PI * 2;
    const x = 1.42 * Math.cos(lat) * Math.cos(lon);
    const y = 1.42 * Math.sin(lat);
    const z = 1.42 * Math.cos(lat) * Math.sin(lon);
    const nodeGeo = new THREE.SphereGeometry(0.025, 8, 8);
    const node = new THREE.Mesh(nodeGeo, nodeMat);
    node.position.set(x, y, z);
    scene.add(node);
    nodePositions.push(new THREE.Vector3(x, y, z));
  }

  // Connect nodes with lines
  const lineMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.25 });
  for (let i = 0; i < nodePositions.length; i++) {
    for (let j = i + 1; j < nodePositions.length; j++) {
      if (nodePositions[i].distanceTo(nodePositions[j]) < 1.2) {
        const lineGeo = new THREE.BufferGeometry().setFromPoints([nodePositions[i], nodePositions[j]]);
        scene.add(new THREE.Line(lineGeo, lineMat));
      }
    }
  }

  // Floating particles
  const pGeo = new THREE.BufferGeometry();
  const pCount = 500;
  const pPositions = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount * 3; i++) pPositions[i] = (Math.random() - 0.5) * 20;
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  const pMat = new THREE.PointsMaterial({ color: 0x00f0ff, size: 0.03, transparent: true, opacity: 0.6 });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // Shield icon (dodecahedron)
  const shieldGeo = new THREE.DodecahedronGeometry(0.4, 0);
  const shieldMat = new THREE.MeshPhongMaterial({
    color: 0xbf00ff,
    emissive: 0x400060,
    wireframe: false,
    transparent: true,
    opacity: 0.7,
  });
  const shield = new THREE.Mesh(shieldGeo, shieldMat);
  shield.position.set(2.5, 1, -1);
  scene.add(shield);
  const shieldWire = new THREE.Mesh(shieldGeo.clone(), new THREE.MeshBasicMaterial({ color: 0xbf00ff, wireframe: true, transparent: true, opacity: 0.4 }));
  shieldWire.position.copy(shield.position);
  scene.add(shieldWire);

  // Mouse move parallax
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
  });

  // Animate
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.005;
    globe.rotation.y = t * 0.3;
    wireGlobe.rotation.y = t * 0.3;
    ring.rotation.z = t * 0.2;
    ring2.rotation.y = t * 0.15;
    shield.rotation.x = Math.sin(t) * 0.3;
    shield.rotation.y = t * 0.5;
    shieldWire.rotation.copy(shield.rotation);
    particles.rotation.y = t * 0.05;
    blueLight.position.x = Math.sin(t) * 4;
    blueLight.position.z = Math.cos(t) * 4;

    // Parallax
    scene.rotation.y += (mouseX * 0.3 - scene.rotation.y) * 0.02;
    scene.rotation.x += (-mouseY * 0.15 - scene.rotation.x) * 0.02;

    renderer.render(scene, camera);
  }
  animate();
}

// ============ DNA SKILL CANVAS ============
function initDNACanvas() {
  const canvas = document.getElementById('dna-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = 300;

  const skills = ['HTML', 'CSS', 'JS', 'Network', 'Security', 'Web Dev', 'Debug', 'Linux'];
  const colors = ['#00f0ff', '#bf00ff', '#00ff41', '#00f0ff', '#bf00ff', '#00ff41', '#00f0ff', '#bf00ff'];
  let t = 0;

  function drawDNA() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const amplitude = 80;
    const freq = 0.04;
    const nodeCount = 20;

    for (let i = 0; i < nodeCount; i++) {
      const x = (canvas.width / nodeCount) * i + (canvas.width / nodeCount) / 2;
      const y1 = canvas.height / 2 + Math.sin(i * freq * 50 + t) * amplitude;
      const y2 = canvas.height / 2 - Math.sin(i * freq * 50 + t) * amplitude;

      // Connect strands
      ctx.beginPath();
      ctx.moveTo(x, y1);
      ctx.lineTo(x, y2);
      ctx.strokeStyle = 'rgba(0,240,255,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Top strand node
      const color = colors[i % colors.length];
      ctx.beginPath();
      ctx.arc(x, y1, 7, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.shadowBlur = 15;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Bottom strand node
      ctx.beginPath();
      ctx.arc(x, y2, 7, 0, Math.PI * 2);
      ctx.fillStyle = colors[(i + 4) % colors.length];
      ctx.shadowBlur = 15;
      ctx.shadowColor = colors[(i + 4) % colors.length];
      ctx.fill();
      ctx.shadowBlur = 0;

      // Skill label
      if (i % 3 === 0 && i < skills.length * 3) {
        const skillIdx = Math.floor(i / 3) % skills.length;
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = '11px Share Tech Mono';
        ctx.textAlign = 'center';
        ctx.fillText(skills[skillIdx], x, y1 - 15);
      }
    }

    // Draw strand curves
    for (let strand = 0; strand < 2; strand++) {
      ctx.beginPath();
      for (let i = 0; i <= canvas.width; i += 2) {
        const progress = (i / canvas.width) * nodeCount * freq * 50;
        const y = canvas.height / 2 + (strand === 0 ? 1 : -1) * Math.sin(progress + t) * amplitude;
        i === 0 ? ctx.moveTo(i, y) : ctx.lineTo(i, y);
      }
      ctx.strokeStyle = strand === 0 ? 'rgba(0,240,255,0.5)' : 'rgba(191,0,255,0.5)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = strand === 0 ? '#00f0ff' : '#bf00ff';
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    t += 0.02;
    requestAnimationFrame(drawDNA);
  }
  drawDNA();

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
  });
}

// ============ TYPING ANIMATION ============
function initAnimations() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const words = [
    'ICT Professional',
    'Web Developer',
    'Networking Student',
    'Cybersecurity Enthusiast',
    'Bug Hunter',
    'System Engineer'
  ];
  let wi = 0, ci = 0, isDeleting = false;

  function type() {
    const word = words[wi];
    if (!isDeleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { isDeleting = true; setTimeout(type, 2000); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { isDeleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, isDeleting ? 60 : 90);
  }
  type();
}

// ============ SCROLL REVEAL ============
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          if (entry.target.querySelector('.skill-bar-fill')) animateSkillBars(entry.target);
        }, i * 100);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  elements.forEach(el => io.observe(el));
}

// ============ SKILL BARS ============
function initSkillBars() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars(document);
        io.disconnect();
      }
    });
  }, { threshold: 0.2 });
  const skillsSection = document.getElementById('skills');
  if (skillsSection) io.observe(skillsSection);
}

function animateSkillBars(root) {
  (root === document ? document : root).querySelectorAll('.skill-bar-fill').forEach(bar => {
    const width = bar.getAttribute('data-width');
    if (width) setTimeout(() => bar.style.width = width, 200);
  });
}

// ============ COUNT UP ============
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute('data-count');
        let current = 0;
        const step = Math.ceil(target / 40);
        const ticker = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + (target > 10 ? '+' : '');
          if (current >= target) clearInterval(ticker);
        }, 40);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

// ============ PROJECTS DATA ============
const PROJECTS = [
  {
    id: '001',
    name: 'Cyber Command Dashboard',
    desc: 'Real-time cybersecurity monitoring dashboard with live threat detection, network visualization, and alert management.',
    color: 'pb-blue',
    icon: '🛡️',
    tech: ['HTML', 'CSS', 'JavaScript', 'Chart.js']
  },
  {
    id: '002',
    name: 'Network Topology Mapper',
    desc: 'Interactive tool for mapping and visualizing network topologies with VLAN support and device identification.',
    color: 'pb-green',
    icon: '🌐',
    tech: ['JavaScript', 'Canvas API', 'Networking']
  },
  {
    id: '003',
    name: 'Secure Portfolio CMS',
    desc: 'Content management system with role-based access control, encryption, and audit logging for secure data management.',
    color: 'pb-purple',
    icon: '🔐',
    tech: ['HTML', 'CSS', 'JS', 'LocalStorage']
  },
  {
    id: '004',
    name: 'Vulnerability Scanner UI',
    desc: 'Educational frontend tool simulating basic network vulnerability assessments with visual reporting.',
    color: 'pb-blue',
    icon: '🔍',
    tech: ['HTML', 'JavaScript', 'CSS']
  },
  {
    id: '005',
    name: 'E-Commerce Web Platform',
    desc: 'Fully responsive e-commerce website with product catalog, shopping cart, and contact integration.',
    color: 'pb-green',
    icon: '🛒',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: '006',
    name: 'Student Learning Portal',
    desc: 'Dynamic educational web portal with course listings, progress tracking, and interactive quizzes.',
    color: 'pb-purple',
    icon: '📚',
    tech: ['HTML', 'CSS', 'JS', 'JSON']
  }
];

function initProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => `
    <div class="project-card reveal">
      <div class="project-banner ${p.color}">
        <div class="project-banner-bg ${p.color}"></div>
        <span class="project-banner-icon">${p.icon}</span>
        <div class="project-scan-line"></div>
      </div>
      <div class="project-body">
        <div class="project-number">PROJECT_${p.id}</div>
        <div class="project-name">${p.name}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  // Re-observe new elements
  initScrollReveal();
}

// ============ GITHUB API ============
const GITHUB_USERNAME = 'safeek-shahad'; // Update with real username

async function initGitHub() {
  const grid = document.getElementById('github-repos');
  const profileLink = document.getElementById('github-profile-link');
  if (!grid) return;

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
    const repos = await res.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      showDemoRepos(grid);
      return;
    }

    if (profileLink) profileLink.href = `https://github.com/${GITHUB_USERNAME}`;
    grid.innerHTML = repos.map(r => `
      <a href="${r.html_url}" target="_blank" class="repo-card">
        <div class="repo-name">⚡ ${r.name}</div>
        <div class="repo-desc">${r.description || 'No description available.'}</div>
        <div class="repo-meta">
          <span>⭐ ${r.stargazers_count}</span>
          <span>🍴 ${r.forks_count}</span>
          ${r.language ? `<span>🔵 ${r.language}</span>` : ''}
        </div>
      </a>
    `).join('');
  } catch (e) {
    showDemoRepos(grid);
  }
}

function showDemoRepos(grid) {
  const demoRepos = [
    { name: 'cyber-portfolio', desc: 'My personal cybersecurity-themed developer portfolio.', stars: 12, forks: 3, lang: 'JavaScript' },
    { name: 'network-tools', desc: 'Collection of network diagnostic and visualization tools.', stars: 8, forks: 1, lang: 'JavaScript' },
    { name: 'web-projects', desc: 'Responsive web development projects and experiments.', stars: 5, forks: 2, lang: 'HTML' },
    { name: 'security-scripts', desc: 'Educational cybersecurity scripts and tools.', stars: 15, forks: 4, lang: 'JavaScript' },
    { name: 'html-css-templates', desc: 'Modern HTML/CSS templates for web projects.', stars: 20, forks: 7, lang: 'CSS' },
    { name: 'js-algorithms', desc: 'JavaScript algorithm and data structure practice.', stars: 6, forks: 1, lang: 'JavaScript' }
  ];
  grid.innerHTML = demoRepos.map(r => `
    <a href="https://github.com/" target="_blank" class="repo-card">
      <div class="repo-name">⚡ ${r.name}</div>
      <div class="repo-desc">${r.desc}</div>
      <div class="repo-meta">
        <span>⭐ ${r.stars}</span>
        <span>🍴 ${r.forks}</span>
        <span>🔵 ${r.lang}</span>
      </div>
    </a>
  `).join('');
}

// ============ CONTACT FORM ============
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('contact-submit');
    btn.textContent = 'TRANSMITTING...';
    btn.disabled = true;
    status.style.color = 'var(--neon-blue)';
    status.textContent = '⏳ Encrypting message...';

    setTimeout(() => {
      status.style.color = 'var(--neon-green)';
      status.textContent = '✅ Message transmitted successfully! You\'ll hear back soon.';
      btn.textContent = '▶ TRANSMIT MESSAGE';
      btn.disabled = false;
      form.reset();
    }, 2000);
  });
}

// ============ NETWORK BARS ============
function initNetworkBars() {
  const container = document.getElementById('network-bars');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const bar = document.createElement('div');
    bar.className = 'net-bar';
    bar.style.animationDelay = (i * 0.1) + 's';
    bar.style.animationDuration = (0.5 + Math.random() * 1.5) + 's';
    bar.style.height = (10 + Math.random() * 70) + '%';
    container.appendChild(bar);
  }
  setInterval(() => {
    container.querySelectorAll('.net-bar').forEach(bar => {
      bar.style.height = (10 + Math.random() * 70) + '%';
    });
  }, 800);
}

// ============ HACKING SIMULATION ============
let simInterval = null;
let simStopped = false;
let activeSimTab = 'pentest';

document.querySelectorAll('.sim-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sim-tab').forEach(t => {
      t.style.background = 'transparent';
      t.style.color = 'var(--text-muted)';
    });
    tab.style.background = 'rgba(0,240,255,0.1)';
    tab.style.color = 'var(--neon-blue)';
    activeSimTab = tab.dataset.sim;
    document.getElementById('sim-output').innerHTML = '';
  });
});

const simData = {
  pentest: [
    '<span style="color:#00ff41">[*] Initializing PENTEST module...</span>',
    '<span style="color:#00f0ff">[*] Target: 192.168.1.0/24</span>',
    '<span style="color:#ff0">[*] Starting network discovery...</span>',
    '<span style="color:#00ff41">[+] Host discovered: 192.168.1.1 (Router)</span>',
    '<span style="color:#00ff41">[+] Host discovered: 192.168.1.5 (Workstation)</span>',
    '<span style="color:#00ff41">[+] Host discovered: 192.168.1.12 (Server)</span>',
    '<span style="color:#00f0ff">[*] Running port scan on 192.168.1.12...</span>',
    '<span style="color:#00ff41">[+] Port 22/TCP OPEN — SSH</span>',
    '<span style="color:#00ff41">[+] Port 80/TCP OPEN — HTTP</span>',
    '<span style="color:#00ff41">[+] Port 443/TCP OPEN — HTTPS</span>',
    '<span style="color:#ff0">[!] Port 3306/TCP OPEN — MySQL (exposed!)</span>',
    '<span style="color:#00f0ff">[*] Checking for known vulnerabilities...</span>',
    '<span style="color:#ff6b6b">[!] CVE-2024-1234 detected on port 3306</span>',
    '<span style="color:#00ff41">[*] Generating vulnerability report...</span>',
    '<span style="color:#00ff41">[✓] Assessment complete. 1 critical vulnerability found.</span>',
  ],
  crack: [
    '<span style="color:#00ff41">[*] Password Analysis Simulation (EDUCATIONAL)</span>',
    '<span style="color:#ff0">[*] Target hash: 5f4dcc3b5aa765d61d8327deb882cf99</span>',
    '<span style="color:#00f0ff">[*] Hash type: MD5 detected</span>',
    '<span style="color:#00ff41">[*] Loading dictionary wordlist... 14M entries</span>',
    '<span style="color:#00f0ff">[*] Attempt 1/1000: admin → No match</span>',
    '<span style="color:#00f0ff">[*] Attempt 2/1000: password → MATCH FOUND!</span>',
    '<span style="color:#ff6b6b">[!] WEAK PASSWORD DETECTED: "password"</span>',
    '<span style="color:#ff6b6b">[!] This demonstrates why strong passwords matter.</span>',
    '<span style="color:#00ff41">[*] Recommendation: Use 16+ char passwords with symbols.</span>',
    '<span style="color:#00ff41">[*] Recommendation: Enable MFA on all accounts.</span>',
    '<span style="color:#00ff41">[✓] Password audit complete.</span>',
  ],
  monitor: [
    '<span style="color:#00ff41">[*] Security Monitoring System ACTIVE</span>',
    '<span style="color:#00f0ff">[*] Analyzing network traffic on eth0...</span>',
    '<span style="color:#00ff41">[✓] TLS 1.3 connections: 247 active</span>',
    '<span style="color:#00ff41">[✓] Firewall: 99.8% packets allowed</span>',
    '<span style="color:#ff0">[!] Suspicious traffic from 42.30.15.9 — flagged</span>',
    '<span style="color:#00f0ff">[*] Geo-IP Lookup: 42.30.15.9 → Unknown Region</span>',
    '<span style="color:#ff6b6b">[!] Blocking IP: 42.30.15.9 — Added to blocklist</span>',
    '<span style="color:#00ff41">[✓] IDS rules updated</span>',
    '<span style="color:#00f0ff">[*] System integrity check...</span>',
    '<span style="color:#00ff41">[✓] All system files: VERIFIED</span>',
    '<span style="color:#00ff41">[✓] No malware signatures detected</span>',
    '<span style="color:#00ff41">[✓] Security posture: STRONG</span>',
  ]
};

function initSimulation() {
  document.getElementById('sim-output').innerHTML = '<span style="color:#555">// Select a simulation and click RUN</span>';
}

function runSimulation() {
  if (simInterval) clearInterval(simInterval);
  simStopped = false;
  const output = document.getElementById('sim-output');
  output.innerHTML = '';
  const lines = simData[activeSimTab] || simData.pentest;
  let i = 0;
  simInterval = setInterval(() => {
    if (simStopped || i >= lines.length) { clearInterval(simInterval); return; }
    output.innerHTML += lines[i] + '<br>';
    output.scrollTop = output.scrollHeight;
    i++;
  }, 400);
}

function stopSimulation() {
  simStopped = true;
  if (simInterval) clearInterval(simInterval);
  const output = document.getElementById('sim-output');
  output.innerHTML += '<br><span style="color:#ff6b6b">[!] Simulation terminated by user.</span>';
}

// ============ RECRUITER BOT ============
const recruiterAnswers = {
  strengths: "💪 Safeek's key strengths include: strong problem-solving ability, dedication to continuous learning, hands-on experience in web development and IT troubleshooting, and excellent communication skills in English, Sinhala, and Tamil. He adapts quickly and delivers reliable technical solutions.",
  hire: "🎯 Safeek brings a rare combination of web development skills, networking knowledge, and cybersecurity awareness. He is self-driven, holds recognized qualifications (OTHM Level 3), and is currently advancing in Networking & Cybersecurity. He is eager to contribute, learn fast, and add real value from day one.",
  cyber: "🛡️ Safeek's cybersecurity skills include: network security fundamentals, understanding of firewalls, IDS/IPS systems, TCP/IP protocols, basic ethical hacking concepts, vulnerability assessment principles, and secure web development practices. Currently deepening expertise through a Degree programme.",
  goals: "🚀 Safeek aims to become a certified cybersecurity professional, specializing in network security and ethical hacking. He aspires to work for top-tier technology companies, particularly in the UAE/Dubai tech industry, and contribute to securing digital infrastructure globally.",
  dubai: "🌆 Dubai's thriving technology sector, world-class infrastructure, and multicultural environment make it the perfect destination for ambitious IT professionals. Safeek is eager to bring his skills to the UAE market where innovation and cybersecurity expertise are in high demand.",
  web: "🌐 Safeek is proficient in HTML5, CSS3, and JavaScript — building fully responsive, modern websites. He has experience with responsive design principles, cross-browser compatibility, interactive UI development, and web application maintenance and troubleshooting."
};

function recruiterInit() {
  // Already initialized in HTML
}

function recruiterAsk(topic) {
  const messages = document.getElementById('recruiter-messages');
  if (!messages) return;
  const questions = {
    strengths: 'What are your strengths?',
    hire: 'Why should a company hire you?',
    cyber: 'Tell me about your cybersecurity skills.',
    goals: 'What are your career goals?',
    dubai: 'Why do you want to work in Dubai?',
    web: 'Describe your web development skills.'
  };
  const qDiv = document.createElement('div');
  qDiv.className = 'chat-msg user';
  qDiv.innerHTML = `<div class="msg-bubble user-bubble">${questions[topic]}</div>`;
  messages.appendChild(qDiv);
  setTimeout(() => {
    const aDiv = document.createElement('div');
    aDiv.className = 'chat-msg';
    aDiv.innerHTML = `
      <div class="chatbot-avatar-icon" style="width:32px;height:32px;font-size:0.9rem;flex-shrink:0;">🤖</div>
      <div class="msg-bubble bot-bubble">${recruiterAnswers[topic]}</div>
    `;
    messages.appendChild(aDiv);
    messages.scrollTop = messages.scrollHeight;
  }, 600);
  messages.scrollTop = messages.scrollHeight;
}
