/* =========================================
   CHATBOT.JS — AI Assistant Chatbot
   Smart response engine for portfolio queries
   ========================================= */

// ============ TOGGLE CHATBOT ============
function toggleChatbot() {
  const win = document.getElementById('chatbot-window');
  if (!win) return;
  win.classList.toggle('open');
  if (win.classList.contains('open')) {
    document.getElementById('chatbot-input')?.focus();
  }
}

// ============ CHATBOT KNOWLEDGE BASE ============
const CHATBOT_KB = {
  greetings: {
    triggers: ['hello', 'hi', 'hey', 'greetings', 'sup', 'good morning', 'good afternoon', 'good evening'],
    response: `👋 Hello! I'm Safeek's AI cyber assistant. I can tell you about his <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, <strong>experience</strong>, and <strong>contact info</strong>. What would you like to know?`
  },
  name: {
    triggers: ['name', 'who are you', 'who is safeek', 'tell me about yourself', 'introduce'],
    response: `🧑‍💻 <strong>Safeek Mohammed Shahad</strong> is a dedicated ICT Professional and Web Developer from <strong>Katugastota, Kandy, Sri Lanka</strong>. He's currently studying a Degree in <strong>Networking & Cybersecurity</strong> while actively building websites and solving real-world tech challenges.`
  },
  skills: {
    triggers: ['skill', 'skills', 'what can you do', 'abilities', 'tech stack', 'technologies', 'know', 'expertise', 'programming', 'html', 'css', 'javascript'],
    response: `💻 Safeek's technical toolkit includes:<br><br>
🔵 <strong>Web Dev:</strong> HTML5, CSS3, JavaScript, Responsive Design<br>
🟢 <strong>Networking:</strong> TCP/IP, DNS, DHCP, Firewalls, VLANs<br>
🟣 <strong>Cybersecurity:</strong> Network Security, Ethical Hacking Basics, Vulnerability Assessment<br>
🔵 <strong>Tools:</strong> Git, VS Code, Wireshark, Linux CLI<br><br>
Professional: Problem Solving, Leadership, Communication, Teamwork`
  },
  projects: {
    triggers: ['project', 'projects', 'work', 'built', 'created', 'portfolio', 'what have you made', 'what did you build'],
    response: `🚀 Safeek has built several impressive projects:<br><br>
🛡️ <strong>Cyber Command Dashboard</strong> — Real-time security monitoring UI<br>
🌐 <strong>Network Topology Mapper</strong> — Interactive network visualization<br>
🔐 <strong>Secure Portfolio CMS</strong> — Role-based content management<br>
🔍 <strong>Vulnerability Scanner UI</strong> — Educational security tool<br>
🛒 <strong>E-Commerce Platform</strong> — Fully responsive web store<br>
📚 <strong>Student Learning Portal</strong> — Dynamic educational portal`
  },
  education: {
    triggers: ['education', 'study', 'degree', 'qualification', 'diploma', 'university', 'school', 'college', 'othm', 'nvq'],
    response: `🎓 Safeek's educational journey:<br><br>
🟢 <strong>Degree in Networking & Cybersecurity</strong> — Currently studying<br>
🏆 <strong>OTHM Level 3 Diploma in IT</strong> — UK RQF Level 3 (Verified ✓)<br>
📘 GCE Advanced Level — Commerce Stream (Completed)<br>
📗 GCE Ordinary Level — English Medium (Completed)`
  },
  certifications: {
    triggers: ['cert', 'certification', 'certified', 'accreditation', 'credential', 'othm', 'nvq'],
    response: `🏆 Safeek holds the following credentials:<br><br>
🏆 <strong>OTHM Level 3 Diploma in IT</strong> — UK Regulated Qualification (Verified ✓)<br>
🎖️ <strong>NVQ Level 3 in ICT</strong> — National Vocational Qualification (Verified ✓)<br>
🛡️ <strong>Networking & Cybersecurity Degree</strong> — In Progress ⏳`
  },
  experience: {
    triggers: ['experience', 'job', 'work history', 'employment', 'freelance', 'part time', 'part-time', 'worked'],
    response: `💼 Safeek has hands-on professional experience as a <strong>Part-Time Web Developer</strong>:<br><br>
▸ Designing & developing dynamic websites<br>
▸ Identifying & fixing frontend/backend bugs<br>
▸ Maintaining and updating web applications<br>
▸ Troubleshooting complex IT systems<br>
▸ Delivering tailored client solutions`
  },
  contact: {
    triggers: ['contact', 'email', 'phone', 'reach', 'hire', 'how to contact', 'get in touch', 'whatsapp', 'number'],
    response: `📬 You can reach Safeek through:<br><br>
📧 <strong>Email:</strong> shahadsha1000@gmail.com<br>
📱 <strong>Phone/WhatsApp:</strong> +94 75 638 6914<br>
📍 <strong>Location:</strong> Katugastota, Kandy, Sri Lanka<br>
💼 <strong>LinkedIn:</strong> linkedin.com/in/safeek-shahad<br><br>
He's open to full-time, remote, and UAE/Dubai opportunities! 🌆`
  },
  location: {
    triggers: ['location', 'where', 'country', 'sri lanka', 'kandy', 'katugastota'],
    response: `📍 Safeek is based in <strong>Katugastota, Kandy, Sri Lanka</strong> 🇱🇰. He is open to <strong>remote work</strong> and very interested in relocating to the <strong>UAE / Dubai</strong> for the right opportunity!`
  },
  goals: {
    triggers: ['goal', 'goals', 'ambition', 'future', 'plan', 'aspire', 'dream', 'career', 'next'],
    response: `🚀 Safeek's mission objectives:<br><br>
<strong>Short Term:</strong><br>
▸ Complete the Networking & Cybersecurity Degree<br>
▸ Earn CompTIA Security+ certification<br>
▸ Build more advanced web applications<br><br>
<strong>Long Term:</strong><br>
▸ Become a certified cybersecurity professional<br>
▸ Specialize in ethical hacking & penetration testing<br>
▸ Land a role at a top-tier tech company in Dubai 🌆`
  },
  languages: {
    triggers: ['language', 'languages', 'speak', 'english', 'sinhala', 'tamil'],
    response: `🌍 Safeek speaks <strong>3 languages</strong>:<br><br>
🇬🇧 <strong>English</strong> — Proficient (Professional Level)<br>
🇱🇰 <strong>Sinhala</strong> — Native Speaker<br>
🇮🇳 <strong>Tamil</strong> — Conversational`
  },
  dubai: {
    triggers: ['dubai', 'uae', 'emirates', 'relocate', 'gulf', 'middle east', 'abroad'],
    response: `🌆 Safeek is <strong>very interested in opportunities in Dubai/UAE</strong>! With its thriving tech industry, world-class infrastructure, and multicultural environment, Dubai is the perfect destination. His skills in IT, web development, and cybersecurity align perfectly with the UAE's digital transformation goals.`
  },
  github: {
    triggers: ['github', 'git', 'repository', 'repo', 'code', 'open source'],
    response: `⚡ Check out Safeek's code on GitHub: <strong>github.com/safeek-shahad</strong><br><br>Repositories include network tools, web projects, security scripts, and more!`
  },
  cybersecurity: {
    triggers: ['cyber', 'cybersecurity', 'security', 'hack', 'hacking', 'ethical', 'pentest', 'penetration'],
    response: `🛡️ Safeek is actively studying <strong>Cybersecurity</strong> and has knowledge in:<br><br>
▸ Network security fundamentals<br>
▸ Firewall configuration concepts<br>
▸ Basic ethical hacking principles<br>
▸ Vulnerability assessment<br>
▸ Intrusion detection systems<br>
▸ Secure web development practices<br><br>
Currently deepening expertise through his Degree programme.`
  },
  networking: {
    triggers: ['network', 'networking', 'tcp', 'ip', 'dns', 'dhcp', 'router', 'switch', 'vlan'],
    response: `🌐 Safeek has solid <strong>Networking fundamentals</strong> including:<br><br>
▸ TCP/IP model & protocols<br>
▸ DNS, DHCP, HTTP/HTTPS<br>
▸ Router & Switch configuration concepts<br>
▸ VLAN setup<br>
▸ Firewall rules & packet filtering<br>
▸ Network topology design`
  },
  webdev: {
    triggers: ['web', 'website', 'frontend', 'html', 'css', 'javascript', 'responsive', 'develop'],
    response: `🌐 Safeek is an experienced <strong>Web Developer</strong> skilled in:<br><br>
▸ HTML5 — semantic, accessible markup<br>
▸ CSS3 — animations, flexbox, grid, variables<br>
▸ JavaScript — DOM manipulation, APIs, async<br>
▸ Responsive design (mobile-first)<br>
▸ Cross-browser compatibility<br>
▸ Web application maintenance`
  },
  bye: {
    triggers: ['bye', 'goodbye', 'see you', 'later', 'exit', 'close', 'quit'],
    response: `👋 Thanks for chatting! Feel free to come back anytime. Don't forget to check out Safeek's <strong>contact section</strong> if you'd like to connect! 🚀`
  },
  thanks: {
    triggers: ['thanks', 'thank you', 'thx', 'ty', 'appreciate', 'great', 'awesome', 'cool', 'nice'],
    response: `😊 You're welcome! Is there anything else you'd like to know about Safeek's skills, experience, or how to get in touch?`
  },
  joke: {
    triggers: ['joke', 'funny', 'laugh', 'humor'],
    response: `😄 Why do cybersecurity professionals make great comedians?<br><br>Because they always have <strong>backup material</strong>! 🎤<br><br>...OK back to being professional. Ask me about Safeek's skills! 💻`
  }
};

// ============ MATCH INTENT ============
function matchIntent(msg) {
  const lower = msg.toLowerCase().trim();
  for (const [key, data] of Object.entries(CHATBOT_KB)) {
    if (data.triggers.some(t => lower.includes(t))) {
      return data.response;
    }
  }
  return `🤔 I'm not sure about that, but I can tell you about Safeek's <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, <strong>experience</strong>, <strong>contact info</strong>, or <strong>career goals</strong>. Just ask!`;
}

// ============ SEND MESSAGE ============
function chatSend(text) {
  const input = document.getElementById('chatbot-input');
  if (input) input.value = text;
  chatbotSendMessage();
}

function chatbotSendMessage() {
  const input = document.getElementById('chatbot-input');
  const messages = document.getElementById('chatbot-messages');
  if (!input || !messages) return;

  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  // Add user message
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-msg user';
  userDiv.innerHTML = `<div class="msg-bubble user-bubble">${escapeHtml(text)}</div>`;
  messages.appendChild(userDiv);
  messages.scrollTop = messages.scrollHeight;

  // Typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-msg';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = `
    <div class="chatbot-avatar-icon" style="width:30px;height:30px;font-size:0.8rem;flex-shrink:0;">🤖</div>
    <div class="msg-bubble bot-bubble" style="padding:12px 18px;">
      <span style="display:inline-flex;gap:4px;align-items:center;">
        <span class="typing-dot"></span>
        <span class="typing-dot" style="animation-delay:0.2s"></span>
        <span class="typing-dot" style="animation-delay:0.4s"></span>
      </span>
    </div>`;
  // Add typing dots CSS inline if not present
  if (!document.getElementById('typing-dot-style')) {
    const style = document.createElement('style');
    style.id = 'typing-dot-style';
    style.textContent = `.typing-dot{width:6px;height:6px;background:var(--neon-blue);border-radius:50%;animation:typingBounce 1s ease infinite;}.typing-dot{animation:typingBounce 1s ease infinite;}@keyframes typingBounce{0%,80%,100%{transform:translateY(0);}40%{transform:translateY(-6px);}}`;
    document.head.appendChild(style);
  }
  messages.appendChild(typingDiv);
  messages.scrollTop = messages.scrollHeight;

  // Get and show response after delay
  const responseTime = 600 + Math.random() * 600;
  setTimeout(() => {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();

    const response = matchIntent(text);
    const botDiv = document.createElement('div');
    botDiv.className = 'chat-msg';
    botDiv.innerHTML = `
      <div class="chatbot-avatar-icon" style="width:30px;height:30px;font-size:0.8rem;flex-shrink:0;">🤖</div>
      <div class="msg-bubble bot-bubble">${response}</div>`;
    messages.appendChild(botDiv);
    messages.scrollTop = messages.scrollHeight;
  }, responseTime);
}

// Escape HTML for user input
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Enter key to send
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('chatbot-input');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') chatbotSendMessage();
    });
  }
});
