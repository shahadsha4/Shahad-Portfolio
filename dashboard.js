/* =========================================
   DASHBOARD.JS — Live Cybersecurity Dashboard
   Attack Map, Charts, Logs, Network Viz
   ========================================= */

// ============ INIT ALL DASHBOARD ============
document.addEventListener('DOMContentLoaded', () => {
  initLogFeed();
  initAttackMap();
  initNetChart();
});

// ============ LIVE LOG FEED ============
const LOG_ENTRIES = [
  { type: 'info',    text: '[INFO] System boot complete — All modules loaded' },
  { type: 'ok',      text: '[OK] Firewall rules applied: 4,291 active rules' },
  { type: 'ok',      text: '[OK] SSL/TLS certificates validated' },
  { type: 'warn',    text: '[WARN] Unusual traffic spike on port 8080' },
  { type: 'info',    text: '[INFO] IDS engine: 0 active threats detected' },
  { type: 'ok',      text: '[OK] VPN tunnel established: 256-bit AES' },
  { type: 'block',   text: '[BLOCK] Suspicious IP 103.12.44.9 → Blacklisted' },
  { type: 'info',    text: '[INFO] Packet capture: 14,832 packets analyzed' },
  { type: 'ok',      text: '[OK] Brute-force attempt mitigated: 5 IPs blocked' },
  { type: 'warn',    text: '[WARN] Login attempt from unknown geolocation: RU' },
  { type: 'ok',      text: '[OK] Antivirus definitions updated to build 20250414' },
  { type: 'info',    text: '[INFO] Network latency: 28ms — Optimal' },
  { type: 'block',   text: '[BLOCK] SQL injection attempt detected & blocked' },
  { type: 'ok',      text: '[OK] System integrity check: All files verified' },
  { type: 'info',    text: '[INFO] Deep packet inspection: Nominal' },
  { type: 'warn',    text: '[WARN] CPU load spike: 78% — Monitoring' },
  { type: 'ok',      text: '[OK] Patch deployment: 3 critical updates applied' },
  { type: 'block',   text: '[BLOCK] XSS payload detected in HTTP header' },
  { type: 'info',    text: '[INFO] Backup completed: 4.2 GB encrypted' },
  { type: 'ok',      text: '[OK] Zero-day vulnerability scan: CLEAN' },
  { type: 'info',    text: '[INFO] DNS query log: 3,841 queries/min' },
  { type: 'warn',    text: '[WARN] Port scan detected from 45.78.22.10' },
  { type: 'block',   text: '[BLOCK] CSRF token mismatch — Request rejected' },
  { type: 'ok',      text: '[OK] OAuth token rotation completed' },
  { type: 'info',    text: '[INFO] Memory usage: 42% — Healthy' },
];

const LOG_COLORS = {
  info:  'rgba(0,240,255,0.7)',
  ok:    'rgba(0,255,65,0.9)',
  warn:  'rgba(255,204,0,0.9)',
  block: 'rgba(255,80,80,0.9)'
};

function initLogFeed() {
  const feed = document.getElementById('log-feed');
  if (!feed) return;

  let idx = 0;
  function addLog() {
    const entry = LOG_ENTRIES[idx % LOG_ENTRIES.length];
    idx++;

    const line = document.createElement('div');
    line.className = 'log-entry';
    line.style.color = LOG_COLORS[entry.type] || '#00f0ff';
    line.textContent = entry.text;
    feed.insertBefore(line, feed.firstChild);

    // Keep max 8 entries
    while (feed.children.length > 8) {
      feed.removeChild(feed.lastChild);
    }
  }

  addLog();
  setInterval(addLog, 1500);
}

// ============ NETWORK ACTIVITY CHART ============
function initNetChart() {
  const canvas = document.getElementById('net-chart');
  if (!canvas || typeof Chart === 'undefined') return;

  const labels = Array.from({ length: 12 }, (_, i) => `-${(11 - i) * 5}s`);
  const data = Array.from({ length: 12 }, () => Math.floor(Math.random() * 80 + 20));

  const chart = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Mbps',
        data,
        borderColor: '#00f0ff',
        backgroundColor: 'rgba(0,240,255,0.08)',
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: '#00f0ff',
        pointBorderColor: '#00f0ff',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      animation: { duration: 600 },
      plugins: { legend: { display: false } },
      scales: {
        x: {
          ticks: { color: 'rgba(0,240,255,0.4)', font: { family: 'Share Tech Mono', size: 9 } },
          grid: { color: 'rgba(0,240,255,0.05)' },
          border: { color: 'rgba(0,240,255,0.1)' }
        },
        y: {
          ticks: { color: 'rgba(0,240,255,0.4)', font: { family: 'Share Tech Mono', size: 9 } },
          grid: { color: 'rgba(0,240,255,0.05)' },
          border: { color: 'rgba(0,240,255,0.1)' },
          min: 0,
          max: 100
        }
      }
    }
  });

  // Update chart every 2 seconds
  setInterval(() => {
    chart.data.datasets[0].data.shift();
    chart.data.datasets[0].data.push(Math.floor(Math.random() * 80 + 20));
    chart.update('none');
  }, 2000);
}

// ============ CYBER ATTACK MAP ============
const ATTACK_LOCATIONS = [
  { from: [51.5, -0.1],   to: [6.9, 79.9],   label: 'London → Kandy',   color: '#ff4040' },
  { from: [40.7, -74.0],  to: [6.9, 79.9],   label: 'New York → Kandy', color: '#ffcc00' },
  { from: [55.7, 37.6],   to: [25.2, 55.3],  label: 'Moscow → Dubai',   color: '#ff4040' },
  { from: [35.7, 139.7],  to: [6.9, 79.9],   label: 'Tokyo → Kandy',    color: '#00ff41' },
  { from: [37.8, -122.4], to: [6.9, 79.9],   label: 'SF → Kandy',       color: '#00f0ff' },
  { from: [22.3, 114.2],  to: [25.2, 55.3],  label: 'HK → Dubai',       color: '#ffcc00' },
  { from: [48.8, 2.3],    to: [6.9, 79.9],   label: 'Paris → Kandy',    color: '#ff4040' },
  { from: [28.6, 77.2],   to: [25.2, 55.3],  label: 'Delhi → Dubai',    color: '#00ff41' },
];

// SVG-based world map projection
function latLngToXY(lat, lng, width, height) {
  const x = (lng + 180) * (width / 360);
  const y = (90 - lat) * (height / 180);
  return [x, y];
}

function initAttackMap() {
  const canvas = document.getElementById('attack-map-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const W = canvas.width;
  const H = canvas.height;

  // Draw basic world outline as grid
  function drawMapBase() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    // Grid overlay
    ctx.strokeStyle = 'rgba(0,240,255,0.04)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += W / 24) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += H / 12) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Draw simplified continent blobs
    const continents = [
      // North America
      [[0.08,0.15],[0.26,0.12],[0.30,0.25],[0.28,0.45],[0.20,0.52],[0.12,0.48],[0.07,0.35]],
      // South America
      [[0.22,0.54],[0.30,0.52],[0.35,0.65],[0.28,0.80],[0.20,0.80],[0.18,0.65]],
      // Europe
      [[0.46,0.10],[0.58,0.10],[0.62,0.20],[0.56,0.30],[0.46,0.28],[0.44,0.18]],
      // Africa
      [[0.47,0.33],[0.58,0.30],[0.62,0.50],[0.56,0.72],[0.46,0.72],[0.42,0.55],[0.44,0.40]],
      // Asia
      [[0.60,0.08],[0.90,0.08],[0.96,0.22],[0.88,0.40],[0.70,0.45],[0.62,0.38],[0.58,0.22]],
      // Australia
      [[0.78,0.60],[0.92,0.58],[0.94,0.72],[0.82,0.78],[0.76,0.70]],
    ];

    continents.forEach(pts => {
      ctx.beginPath();
      ctx.moveTo(pts[0][0] * W, pts[0][1] * H);
      pts.forEach(p => ctx.lineTo(p[0] * W, p[1] * H));
      ctx.closePath();
      ctx.fillStyle = 'rgba(0,240,255,0.05)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,240,255,0.15)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    });
  }

  // Attack particles
  const particles = ATTACK_LOCATIONS.map(loc => ({
    ...loc,
    progress: Math.random(),
    speed: 0.004 + Math.random() * 0.004,
    active: true,
    pulseSize: 0,
    exploding: false
  }));

  function drawAttacks(t) {
    drawMapBase();

    // Labels
    ctx.font = `9px Share Tech Mono`;
    ctx.textAlign = 'center';

    // Key nodes (Kandy + Dubai)
    const nodes = [
      { lat: 6.9, lng: 79.9, label: 'KANDY', color: '#00ff41' },
      { lat: 25.2, lng: 55.3, label: 'DUBAI', color: '#00f0ff' },
    ];
    nodes.forEach(n => {
      const [nx, ny] = latLngToXY(n.lat, n.lng, W, H);
      const pulse = (Math.sin(t * 3) * 0.5 + 0.5) * 8;
      ctx.beginPath();
      ctx.arc(nx, ny, 6 + pulse, 0, Math.PI * 2);
      ctx.strokeStyle = n.color + '44';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(nx, ny, 4, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = n.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = n.color;
      ctx.fillText(n.label, nx, ny - 12);
    });

    particles.forEach(p => {
      const [fx, fy] = latLngToXY(p.from[0], p.from[1], W, H);
      const [tx, ty] = latLngToXY(p.to[0], p.to[1], W, H);

      // Curved path
      const cpx = (fx + tx) / 2;
      const cpy = (fy + ty) / 2 - 40;
      const prog = p.progress;

      // Draw faded trail
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.quadraticCurveTo(cpx, cpy, tx, ty);
      ctx.strokeStyle = p.color + '22';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Particle position along bezier
      const bx = (1 - prog) * (1 - prog) * fx + 2 * (1 - prog) * prog * cpx + prog * prog * tx;
      const by = (1 - prog) * (1 - prog) * fy + 2 * (1 - prog) * prog * cpy + prog * prog * ty;

      ctx.beginPath();
      ctx.arc(bx, by, 3, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Source dot
      ctx.beginPath();
      ctx.arc(fx, fy, 3, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Label
      ctx.fillStyle = p.color + 'AA';
      ctx.fillText(p.label, (fx + tx) / 2, Math.min(fy, ty) - 5);

      p.progress += p.speed;
      if (p.progress >= 1) {
        p.progress = 0;
        p.speed = 0.004 + Math.random() * 0.004;
      }
    });
  }

  let t = 0;
  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawAttacks(t);
    t += 0.016;
    requestAnimationFrame(loop);
  }
  loop();

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
}
