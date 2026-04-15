/* =========================================
   TERMINAL.JS — Hacker Terminal System
   Interactive command-line interface
   ========================================= */

const TERMINAL_DATA = {
  help: {
    output: `
<span class="t-blue">╔══════════════════════════════════════════╗</span>
<span class="t-blue">║</span>  <span class="t-white">SAFEEK@CYBERNODE — COMMAND REFERENCE</span>    <span class="t-blue">║</span>
<span class="t-blue">╚══════════════════════════════════════════╝</span>

  <span class="t-blue">about</span>       — Display agent profile
  <span class="t-blue">skills</span>      — List technical & professional skills
  <span class="t-blue">projects</span>    — Show project vault
  <span class="t-blue">education</span>   — Display education timeline
  <span class="t-blue">experience</span>  — Work experience record
  <span class="t-blue">certs</span>       — Certifications & credentials
  <span class="t-blue">contact</span>     — Contact information
  <span class="t-blue">github</span>      — GitHub profile link
  <span class="t-blue">linkedin</span>    — LinkedIn profile link
  <span class="t-blue">languages</span>   — Spoken languages
  <span class="t-blue">goals</span>       — Career objectives
  <span class="t-blue">whoami</span>      — Current user identity
  <span class="t-blue">ping</span>        — Test system connection
  <span class="t-blue">scan</span>        — Run security scan
  <span class="t-blue">nmap</span>        — Network map simulation
  <span class="t-blue">clear</span>       — Clear terminal
  <span class="t-blue">matrix</span>      — Toggle matrix animation
  <span class="t-blue">hack</span>        — Initiate hacking sequence 😈
  <span class="t-blue">date</span>        — Display current timestamp
  <span class="t-blue">banner</span>      — Display ASCII banner
  <span class="t-blue">help</span>        — Show this menu

<span class="t-muted">─────────────────────────────────────────</span>
<span class="t-muted">TIP: Press ↑ / ↓ to cycle command history</span>`
  },

  about: {
    output: `
<span class="t-blue">┌─ AGENT PROFILE ──────────────────────────┐</span>

  <span class="t-white">Name:</span>       <span class="t-blue">Safeek Mohammed Shahad</span>
  <span class="t-white">Handle:</span>     <span class="t-blue">safeek@cybernode</span>
  <span class="t-white">Location:</span>   Katugastota, Kandy, Sri Lanka 🇱🇰
  <span class="t-white">Role:</span>       ICT Professional | Web Developer
  <span class="t-white">Status:</span>     <span style="color:#00ff41">● ONLINE — Open to Opportunities</span>

  <span class="t-white">Bio:</span>
  Dedicated ICT professional with strong knowledge
  in information technology, networking, and
  cybersecurity. Currently pursuing a Degree in
  Networking & Cybersecurity while holding an
  OTHM Level 3 Diploma in IT.

  Experienced in building websites, troubleshooting
  systems, and delivering real-world tech solutions.

<span class="t-blue">└──────────────────────────────────────────┘</span>`
  },

  skills: {
    output: `
<span class="t-blue">┌─ SKILL MATRIX ───────────────────────────┐</span>

<span class="t-purple">[ TECHNICAL SKILLS ]</span>

  Web Development    <span class="t-blue">████████░░</span>  85%
  HTML / CSS         <span class="t-blue">█████████░</span>  90%
  JavaScript         <span class="t-blue">████████░░</span>  78%
  Networking         <span class="t-blue">████████░░</span>  80%
  Cybersecurity      <span class="t-blue">███████░░░</span>  75%
  Troubleshooting    <span class="t-blue">█████████░</span>  88%
  Bug Fixing         <span class="t-blue">████████░░</span>  85%

<span class="t-purple">[ PROFESSIONAL SKILLS ]</span>

  Communication      <span style="color:#00ff41">█████████░</span>  90%
  Problem Solving    <span style="color:#00ff41">█████████░</span>  92%
  Leadership         <span style="color:#00ff41">████████░░</span>  80%
  Creativity         <span style="color:#00ff41">█████████░</span>  88%
  Teamwork           <span style="color:#00ff41">█████████░</span>  90%
  Time Management    <span style="color:#00ff41">████████░░</span>  85%

<span class="t-blue">└──────────────────────────────────────────┘</span>`
  },

  projects: {
    output: `
<span class="t-blue">┌─ PROJECT VAULT ──────────────────────────┐</span>

  <span class="t-blue">#001</span> <span class="t-white">Cyber Command Dashboard</span>
       Real-time security monitoring UI
       <span class="t-muted">[ HTML | CSS | JS | Chart.js ]</span>

  <span class="t-blue">#002</span> <span class="t-white">Network Topology Mapper</span>
       Interactive network visualization tool
       <span class="t-muted">[ JavaScript | Canvas API ]</span>

  <span class="t-blue">#003</span> <span class="t-white">Secure Portfolio CMS</span>
       Role-based content management system
       <span class="t-muted">[ HTML | JS | LocalStorage ]</span>

  <span class="t-blue">#004</span> <span class="t-white">Vulnerability Scanner UI</span>
       Educational network assessment tool
       <span class="t-muted">[ HTML | JavaScript | CSS ]</span>

  <span class="t-blue">#005</span> <span class="t-white">E-Commerce Web Platform</span>
       Responsive online store
       <span class="t-muted">[ HTML | CSS | JavaScript ]</span>

  <span class="t-blue">#006</span> <span class="t-white">Student Learning Portal</span>
       Dynamic educational web portal
       <span class="t-muted">[ HTML | CSS | JS | JSON ]</span>

<span class="t-blue">└──────────────────────────────────────────┘</span>`
  },

  education: {
    output: `
<span class="t-blue">┌─ EDUCATION LOG ──────────────────────────┐</span>

  <span style="color:#00ff41">● [CURRENT]</span>
    <span class="t-white">Degree in Networking & Cybersecurity</span>
    Currently enrolled & studying

  <span class="t-blue">● [2023]</span>
    <span class="t-white">OTHM Level 3 Diploma in IT</span>
    UK RQF Level 3 — CERTIFIED ✓

  <span class="t-blue">● [COMPLETED]</span>
    <span class="t-white">GCE Advanced Level — Commerce Stream</span>
    Passed ✓

  <span class="t-blue">● [COMPLETED]</span>
    <span class="t-white">GCE Ordinary Level — English Medium</span>
    Passed ✓

<span class="t-blue">└──────────────────────────────────────────┘</span>`
  },

  experience: {
    output: `
<span class="t-blue">┌─ WORK EXPERIENCE ────────────────────────┐</span>

  <span class="t-white">Role:</span>     Part-Time Web Developer
  <span class="t-white">Type:</span>     Freelance / On-Site
  <span class="t-white">Status:</span>   <span style="color:#00ff41">ONGOING</span>

  <span class="t-purple">Responsibilities:</span>
    ▸ Building dynamic, responsive websites
    ▸ Identifying & fixing frontend/backend bugs
    ▸ Maintaining & updating web applications
    ▸ Troubleshooting technical IT systems
    ▸ Delivering client-specific digital solutions

<span class="t-blue">└──────────────────────────────────────────┘</span>`
  },

  certs: {
    output: `
<span class="t-blue">┌─ CERTIFICATIONS ─────────────────────────┐</span>

  <span class="t-white">🏆 OTHM Level 3 Diploma in IT</span>
     Issuer: OTHM Qualifications, UK
     Level:  UK RQF Level 3 Equivalent
     Status: <span style="color:#00ff41">VERIFIED ✓</span>

  <span class="t-white">🎖️ NVQ Level 3 — ICT</span>
     Issuer: TVEC, Sri Lanka
     Level:  National Vocational Qualification 3
     Status: <span style="color:#00ff41">VERIFIED ✓</span>

  <span class="t-white">🛡️ Networking & Cybersecurity Degree</span>
     Status: <span style="color:#ffcc00">IN PROGRESS ⏳</span>

<span class="t-blue">└──────────────────────────────────────────┘</span>`
  },

  contact: {
    output: `
<span class="t-blue">┌─ CONTACT CHANNELS ───────────────────────┐</span>

  <span class="t-white">📧 Email:</span>     shahadsha1000@gmail.com
  <span class="t-white">📱 Phone:</span>     +94 75 638 6914
  <span class="t-white">📍 Location:</span>  Katugastota, Kandy, Sri Lanka
  <span class="t-white">💼 LinkedIn:</span>  linkedin.com/in/safeek-shahad
  <span class="t-white">⚡ GitHub:</span>   github.com/safeek-shahad

  <span style="color:#00ff41">● Available for Full-Time Opportunities</span>
  <span style="color:#00ff41">● Open to Remote & UAE/Dubai Roles</span>
  <span style="color:#00ff41">● Accepting Freelance Projects</span>

<span class="t-blue">└──────────────────────────────────────────┘</span>`
  },

  github: {
    output: `
<span class="t-blue">┌─ GITHUB ─────────────────────────────────┐</span>

  <span class="t-white">Profile:</span>  <span class="t-blue">github.com/safeek-shahad</span>
  
  <span class="t-purple">Recent Repositories:</span>
    ⚡ cyber-portfolio       ⭐ 12
    ⚡ network-tools         ⭐ 8
    ⚡ web-projects          ⭐ 5
    ⚡ security-scripts      ⭐ 15
    ⚡ html-css-templates    ⭐ 20
    ⚡ js-algorithms         ⭐ 6

  <span class="t-muted">→ Opening GitHub profile...</span>

<span class="t-blue">└──────────────────────────────────────────┘</span>`,
    action: () => window.open('https://github.com/', '_blank')
  },

  linkedin: {
    output: `
<span class="t-blue">┌─ LINKEDIN ────────────────────────────────┐</span>

  <span class="t-white">Profile:</span>  Safeek Mohammed Shahad
  <span class="t-white">URL:</span>      <span class="t-blue">linkedin.com/in/safeek-shahad</span>
  <span class="t-white">Status:</span>   <span style="color:#00ff41">Open to Connect</span>

  <span class="t-purple">Looking for opportunities in:</span>
    ▸ IT Support & Networking
    ▸ Cybersecurity Operations
    ▸ Web Development
    ▸ UAE / Dubai Market

  <span class="t-muted">→ Opening LinkedIn profile...</span>

<span class="t-blue">└──────────────────────────────────────────┘</span>`,
    action: () => window.open('https://linkedin.com/', '_blank')
  },

  languages: {
    output: `
<span class="t-blue">┌─ LINGUISTIC MODULES ─────────────────────┐</span>

  🇬🇧 <span class="t-white">English</span>   — Proficient (Professional Level)
  🇱🇰 <span class="t-white">Sinhala</span>   — Native Speaker
  🇮🇳 <span class="t-white">Tamil</span>     — Conversational

<span class="t-blue">└──────────────────────────────────────────┘</span>`
  },

  goals: {
    output: `
<span class="t-blue">┌─ MISSION OBJECTIVES ─────────────────────┐</span>

  <span class="t-purple">SHORT TERM:</span>
    ▸ Complete Networking & Cybersecurity Degree
    ▸ Obtain CompTIA Security+ certification
    ▸ Build advanced web applications

  <span class="t-purple">LONG TERM:</span>
    ▸ Become a certified cybersecurity professional
    ▸ Specialize in ethical hacking & penetration testing
    ▸ Work for top-tier tech companies in the UAE/Dubai
    ▸ Contribute to securing critical digital infrastructure

  <span style="color:#00ff41">STATUS: Mission Active — Progress: ██████░░░░ 60%</span>

<span class="t-blue">└──────────────────────────────────────────┘</span>`
  },

  whoami: {
    output: `
  safeek@cybernode
  <span class="t-muted">uid=1337(safeek) gid=1337(ict-pro)</span>
  <span class="t-muted">groups=1337(ict-pro),100(web-dev),200(cyber-sec)</span>
  <span class="t-blue">Role: ICT Professional | Web Dev | Cyber Student</span>`
  },

  ping: {
    output: `
  PING cybernode.local (127.0.0.1) 56 bytes of data.
  <span style="color:#00ff41">64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.042 ms</span>
  <span style="color:#00ff41">64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.038 ms</span>
  <span style="color:#00ff41">64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.041 ms</span>
  <span style="color:#00ff41">64 bytes from 127.0.0.1: icmp_seq=4 ttl=64 time=0.039 ms</span>

  --- cybernode.local ping statistics ---
  4 packets transmitted, 4 received, <span style="color:#00ff41">0% packet loss</span>
  rtt min/avg/max = 0.038/0.040/0.042 ms`
  },

  scan: {
    output: `
  <span class="t-blue">[*] Initiating system security scan...</span>
  <span class="t-blue">[*] Scanning localhost for vulnerabilities...</span>

  <span style="color:#00ff41">[✓] Firewall: ACTIVE</span>
  <span style="color:#00ff41">[✓] Encryption: AES-256 ENABLED</span>
  <span style="color:#00ff41">[✓] Malware: NO THREATS DETECTED</span>
  <span style="color:#00ff41">[✓] System Integrity: VERIFIED</span>
  <span style="color:#00ff41">[✓] Open Ports: SECURED</span>
  <span style="color:#ffcc00">[!] Tip: Always keep systems patched!</span>

  <span class="t-blue">SCAN COMPLETE — Security Status: STRONG 🛡️</span>`
  },

  nmap: {
    output: `
  <span class="t-blue">Nmap 7.94 — Simulation Mode</span>
  Starting scan on localhost (127.0.0.1)...

  PORT      STATE    SERVICE    VERSION
  <span style="color:#00ff41">22/tcp    open     ssh        OpenSSH 8.9</span>
  <span style="color:#00ff41">80/tcp    open     http       nginx 1.23</span>
  <span style="color:#00ff41">443/tcp   open     https      nginx 1.23</span>
  <span style="color:#ffcc00">3000/tcp  open     dev-server Node.js</span>

  <span class="t-muted">Nmap done: 1 IP address (1 host up) in 1.42s</span>
  <span class="t-blue">[Educational simulation — no real scan performed]</span>`
  },

  date: {
    output: null,
    dynamic: () => {
      const now = new Date();
      return `  <span class="t-blue">SYSTEM TIME:</span> ${now.toUTCString()}
  <span class="t-blue">TIMEZONE:</span>   Asia/Colombo (UTC+5:30)
  <span class="t-blue">UNIX EPOCH:</span> ${Math.floor(Date.now() / 1000)}`;
    }
  },

  banner: {
    output: `
<span class="t-blue">
  ███████╗███╗   ███╗███████╗
  ██╔════╝████╗ ████║██╔════╝
  ███████╗██╔████╔██║███████╗
  ╚════██║██║╚██╔╝██║╚════██║
  ███████║██║ ╚═╝ ██║███████║
  ╚══════╝╚═╝     ╚═╝╚══════╝</span>
  
  <span class="t-white">Safeek Mohammed Shahad</span>
  <span class="t-purple">ICT Professional | Web Dev | Cyber Student</span>
  <span class="t-muted">Type 'help' to begin.</span>`
  },

  hack: {
    output: null,
    animated: true
  }
};

// ============ TERMINAL ENGINE ============
(function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const body = document.getElementById('terminal-body');
  if (!input || !output) return;

  let history = [];
  let historyIndex = -1;

  // Show welcome banner on load
  setTimeout(() => {
    appendOutput(TERMINAL_DATA.banner.output);
    appendOutput(`\n<span class="t-muted">Type <span class="t-blue">help</span> to see all available commands.</span>\n`);
  }, 500);

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      if (!cmd) return;
      appendCommand(cmd);
      history.unshift(cmd);
      historyIndex = -1;
      input.value = '';
      processCommand(cmd);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) historyIndex++;
      input.value = history[historyIndex] || '';
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) historyIndex--;
      else historyIndex = -1;
      input.value = historyIndex >= 0 ? history[historyIndex] : '';
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      autocomplete(input.value);
    }
  });

  // Focus input on body click
  body.addEventListener('click', () => input.focus());

  function appendCommand(cmd) {
    const line = document.createElement('div');
    line.innerHTML = `<span style="color:var(--neon-green)">safeek@cybernode:~$</span> <span style="color:white">${escapeHtml(cmd)}</span>`;
    line.style.fontFamily = 'var(--font-mono)';
    line.style.fontSize = '0.8rem';
    line.style.marginBottom = '4px';
    output.appendChild(line);
    scrollTerminal();
  }

  function appendOutput(html, delay = 0) {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'terminal-output';
      div.innerHTML = html;
      output.appendChild(div);
      scrollTerminal();
    }, delay);
  }

  function scrollTerminal() {
    setTimeout(() => body.scrollTop = body.scrollHeight, 50);
  }

  function escapeHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function autocomplete(val) {
    if (!val) return;
    const cmds = Object.keys(TERMINAL_DATA);
    const match = cmds.find(c => c.startsWith(val.toLowerCase()));
    if (match) input.value = match;
  }

  function processCommand(cmd) {
    const parts = cmd.split(' ');
    const base = parts[0];

    if (base === 'clear') {
      output.innerHTML = '';
      return;
    }

    if (base === 'matrix') {
      const canvas = document.getElementById('matrix-canvas');
      if (canvas) {
        const current = parseFloat(canvas.style.opacity || '0.12');
        canvas.style.opacity = current > 0.1 ? '0' : '0.12';
        appendOutput(`  <span class="t-blue">Matrix animation ${current > 0.1 ? 'disabled' : 'enabled'}</span>`);
      }
      return;
    }

    if (base === 'hack') {
      runHackSequence();
      return;
    }

    const data = TERMINAL_DATA[base];
    if (data) {
      if (typeof data.dynamic === 'function') {
        appendOutput(data.dynamic());
      } else {
        appendOutput(data.output);
      }
      if (data.action) setTimeout(data.action, 1000);
    } else {
      appendOutput(`  <span style="color:#ff6b6b">bash: ${escapeHtml(base)}: command not found</span>
  <span class="t-muted">Type <span class="t-blue">help</span> for a list of commands.</span>`);
    }
  }

  function runHackSequence() {
    const steps = [
      { text: '<span style="color:#ff6b6b">[!!!] INITIATING ELITE HACK SEQUENCE [!!!]</span>', delay: 0 },
      { text: '<span class="t-blue">[*] Bypassing firewall...</span>', delay: 400 },
      { text: '<span style="color:#00ff41">[+] Firewall bypassed — Access level: GOD MODE</span>', delay: 900 },
      { text: '<span class="t-blue">[*] Injecting payload...</span>', delay: 1300 },
      { text: '<span style="color:#00ff41">[+] Payload deployed successfully</span>', delay: 1800 },
      { text: '<span class="t-blue">[*] Decrypting NSA mainframe...</span>', delay: 2200 },
      { text: '<span style="color:#ffcc00">[!] Decryption 25%... 50%... 75%... 100%</span>', delay: 3000 },
      { text: '<span style="color:#00ff41">[+] ACCESS GRANTED to: The Internet™</span>', delay: 3600 },
      { text: '<span class="t-blue">[*] Downloading: all_the_memes.zip (42 TB)...</span>', delay: 4000 },
      { text: '<span style="color:#00ff41">[+] Download complete.</span>', delay: 4800 },
      { text: '<span style="color:#00ff41">[✓] World domination: 87% complete</span>', delay: 5200 },
      { text: '<span style="color:#ff6b6b">[!] JUST KIDDING — This is just a portfolio 😄</span>', delay: 5800 },
      { text: '<span class="t-purple">[*] But seriously — Safeek knows his stuff. Hire him! 🚀</span>', delay: 6400 },
    ];
    steps.forEach(s => appendOutput(s.text, s.delay));
  }
})();
