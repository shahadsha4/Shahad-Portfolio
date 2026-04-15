/* =========================================
   VOICE.JS — AI Voice Assistant
   Web Speech API: Recognition + Synthesis
   ========================================= */

let isListening = false;
let recognition = null;
let synth = window.speechSynthesis;

// ============ VOICE DATA ============
const VOICE_KB = {
  skills: {
    triggers: ['skill', 'skills', 'technologies', 'what can you do', 'abilities', 'programming', 'technical'],
    response: `Safeek's technical skills include web development with HTML, CSS, and JavaScript, networking fundamentals including TCP/IP and firewall configuration, cybersecurity basics such as network security and ethical hacking concepts, and system troubleshooting and bug fixing.`
  },
  projects: {
    triggers: ['project', 'projects', 'built', 'created', 'made', 'work'],
    response: `Safeek has built several projects including a Cyber Command Dashboard for real-time security monitoring, a Network Topology Mapper, a Secure Portfolio CMS, a Vulnerability Scanner UI, an E-Commerce Web Platform, and a Student Learning Portal.`
  },
  education: {
    triggers: ['education', 'study', 'degree', 'qualification', 'diploma', 'university'],
    response: `Safeek is currently studying a Degree in Networking and Cybersecurity. He also holds an OTHM Level 3 Diploma in Information Technology, which is equivalent to the UK RQF Level 3. He has also completed his GCE Advanced Level in Commerce and GCE Ordinary Level in English medium.`
  },
  contact: {
    triggers: ['contact', 'email', 'phone', 'reach', 'hire', 'get in touch'],
    response: `You can contact Safeek at shahadsha1000@gmail.com or by phone at plus 94 75 638 6914. He is located in Katugastota, Kandy, Sri Lanka, and is open to full-time opportunities, especially in Dubai and the UAE.`
  },
  experience: {
    triggers: ['experience', 'job', 'work', 'employment'],
    response: `Safeek has experience as a part-time web developer, where he builds dynamic websites, fixes bugs, maintains web applications, and troubleshoots technical systems for clients.`
  },
  about: {
    triggers: ['about', 'who', 'introduce', 'yourself', 'tell me about'],
    response: `Safeek Mohammed Shahad is a dedicated ICT professional from Katugastota, Kandy, Sri Lanka. He is a web developer and networking and cybersecurity student with strong knowledge in information technology and practical experience in building and troubleshooting web applications.`
  },
  goals: {
    triggers: ['goal', 'goals', 'future', 'plan', 'ambition', 'aspire'],
    response: `Safeek's career goal is to become a certified cybersecurity professional, specializing in ethical hacking and penetration testing. He aims to work for a top-tier technology company, particularly in Dubai or the UAE, and contribute to securing critical digital infrastructure.`
  },
  certifications: {
    triggers: ['cert', 'certification', 'certified', 'credential'],
    response: `Safeek holds two verified certifications: the OTHM Level 3 Diploma in Information Technology from the UK, and the NVQ Level 3 in ICT from Sri Lanka. He is also currently working toward his Networking and Cybersecurity Degree.`
  },
  languages: {
    triggers: ['language', 'speak', 'english', 'sinhala', 'tamil'],
    response: `Safeek speaks three languages fluently: English at a professional level, Sinhala as a native speaker, and Tamil conversationally.`
  },
  location: {
    triggers: ['location', 'where', 'country', 'sri lanka', 'kandy'],
    response: `Safeek is based in Katugastota, Kandy, Sri Lanka. He is open to relocating, especially to Dubai and the UAE, for the right career opportunity.`
  },
  help: {
    triggers: ['help', 'what can you answer', 'commands', 'options'],
    response: `You can ask me about Safeek's skills, projects, education, work experience, certifications, career goals, contact information, languages, or location. Just speak naturally and I will answer!`
  }
};

// ============ MATCH VOICE INTENT ============
function matchVoiceIntent(transcript) {
  const lower = transcript.toLowerCase().trim();
  for (const [key, data] of Object.entries(VOICE_KB)) {
    if (data.triggers.some(t => lower.includes(t))) {
      return data.response;
    }
  }
  return `I didn't quite catch that. You can ask me about Safeek's skills, projects, education, experience, or contact information. Please try again.`;
}

// ============ SPEAK RESPONSE ============
function speak(text) {
  if (!synth) return;
  synth.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1.0;
  utter.pitch = 1.0;
  utter.volume = 1.0;

  // Prefer a clear English voice
  const voices = synth.getVoices();
  const preferred = voices.find(v =>
    v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Female'))
  ) || voices.find(v => v.lang.startsWith('en')) || voices[0];
  if (preferred) utter.voice = preferred;

  showVoiceToast('🔊 ' + text.slice(0, 60) + (text.length > 60 ? '...' : ''));
  synth.speak(utter);
  utter.onend = () => hideVoiceToast();
}

// ============ TOGGLE VOICE ============
function toggleVoice() {
  if (isListening) {
    stopListening();
  } else {
    startListening();
  }
}

// ============ START LISTENING ============
function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showVoiceToast('❌ Voice not supported in this browser. Try Chrome.');
    setTimeout(hideVoiceToast, 3000);
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.continuous = false;

  recognition.onstart = () => {
    isListening = true;
    const fab = document.getElementById('voice-fab');
    if (fab) fab.classList.add('listening');
    showVoiceToast('🎤 Listening... Speak now!');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    showVoiceToast('📝 Heard: "' + transcript + '"');
    setTimeout(() => {
      const response = matchVoiceIntent(transcript);
      speak(response);
    }, 500);
  };

  recognition.onerror = (event) => {
    let msg = '❌ Voice error.';
    if (event.error === 'no-speech') msg = '🎤 No speech detected. Try again!';
    else if (event.error === 'not-allowed') msg = '❌ Mic permission denied. Please enable it.';
    else if (event.error === 'network') msg = '❌ Network error. Check connection.';
    showVoiceToast(msg);
    setTimeout(hideVoiceToast, 3000);
    stopListening();
  };

  recognition.onend = () => {
    stopListening();
  };

  try {
    recognition.start();
  } catch (e) {
    showVoiceToast('❌ Could not start voice recognition.');
    setTimeout(hideVoiceToast, 3000);
  }
}

// ============ STOP LISTENING ============
function stopListening() {
  isListening = false;
  const fab = document.getElementById('voice-fab');
  if (fab) fab.classList.remove('listening');
  if (recognition) {
    try { recognition.stop(); } catch (e) {}
    recognition = null;
  }
  setTimeout(hideVoiceToast, 2000);
}

// ============ TOAST MESSAGES ============
function showVoiceToast(msg) {
  const toast = document.getElementById('voice-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
}

function hideVoiceToast() {
  const toast = document.getElementById('voice-toast');
  if (toast) toast.classList.remove('show');
}

// ============ VOICE COMMANDS GUIDE ============
// Recognized phrases:
// "Tell me about skills" → skills overview
// "What projects have you done?" → projects list
// "Show education" → education timeline
// "How can I contact you?" → contact info
// "What are your goals?" → career goals
// "What languages do you speak?" → language info
// "Tell me about yourself" → about section
// "What certifications do you have?" → certifications
// "Where are you located?" → location info
// "What experience do you have?" → work experience
