// all portfolio content in one place — edit here, nowhere else

export const profile = {
  name: 'Daksha Mudumbai',
  handle: 'ambanibob',
  role: 'security engineer',
  focus: 'security tooling for systems + apps, and ai red-teaming.',
  school: 'northeastern university, khoury college',
  degree: 'b.s. cybersecurity',
  location: 'boston',
  grad: 'may 2028',
}

// TODO (DAKSHA): swap these 2-3 lines for something in your own voice.
// what do you care about outside of security? valorant, basketball, sitcoms?
// make it human, not resume-speak.
export const about = [
  'i\'m a cybersecurity major at northeastern with a focus in applied ML, which means my coursework spans software engineering, machine learning, and security. my coursework allows me to work across the stack — from explainable-ai (XAI) libraries down to low-level rust — and see systems from several angles at once.',
  'what i care about is building security tooling for systems and applications, and ai red-teaming. the ai attack surface is a genuinely new frontier, and i like that it forces you into hard, unsolved problems.',
]

export const stack = {
  'programming': ['python', 'c', 'rust',  'java', 'x86-64 assembly', 'DrRacket'],
  'security': ['wireshark', 'scapy', 'nmap', 'splunk', 'mitre att&ck', 'burp suite'],
  'ml/ai': ['scikit-learn', 'numpy', 'pandas', 'shap', 'lime', 'matplotlib', 'seaborn', 'mlflow'],
  'devops': ['datadog',  'aws (cloudflare, bedrock, connect)', 'docker', 'git/github', 'fastapi'],
  'os': [  'kali linux', 'ubuntu', 'macos'],
}

export const certifications = [
  { name: 'comptia security+', issuer: 'comptia' },
  { name: 'google cybersecurity certificate', issuer: 'google' },
  { name: '(In Progress) HTB: Certified Offensive AI Expert', issuer: 'google, hackthebox'}
]

export const courses = [
  'systems security',
  'foundations of cybersecurity',
  'network fundamentals',
  'mathematics of machine learning',
  'probability and statistics',
  'algorithms',
  'computer systems',
  'object-oriented design',
  'cloud computing',
]

export const interests = [
  'valorant igl: handle theory crafting, strategies, protocols, mid-rounding, and good vibes ',
  'basketball + cricket',
  'sitcoms',
  'tournament commentator (retired)'
]

export const experience = [
  {
    title: 'cybersecurity co-op',
    company: 'mass. executive office of economic development',
    date: 'jun 2026 — present',
    location: 'boston',
    description: 'placeholder for now — i\'ll fill in the details later.',
    tags: ['cybersecurity'],
  },
  {
    title: 'cybersecurity + ai intern',
    company: 'end of an era',
    date: 'jan 2026 — may 2026',
    location: 'remote',
    description: [
      'architected **geo-blocking middleware** from scratch — replaced a disabled stub with a full system: **maxmind ip resolution** at **sub-ms speed**, **5-endpoint admin api**, audit logging, **20 tests**. default blocklist: CN, RU, KP, IR.',
      'designed and shipped **multi-role account switching** — built **RoleContext** from zero, role-aware nav per account type (planner / executor / heir), **feature-flagged mocks** so nothing dirty ever hits production.',
      'owned **asset distribution workflow** end-to-end — multi-beneficiary percentage validation, localStorage fallbacks, **DRY refactor** eliminating duplicated logic across **8 instances**. had a PR reverted for scope creep, learned from it, kept every subsequent PR surgical.',
      'led **smoke-test infrastructure** initiative — coordinated team of interns, built end-to-end **Python test suite** validating auth + core workflows, integrated into **CI/CD pipeline** via GitHub Actions. **caught regressions before prod**, reduced manual QA overhead.'
    ],
    tags: ['rust', 'node.js', 'express', 'react', 'typescript', 'jest'],
  }, 
]

// ─────────────────────────────────────────────────────────────
// DERIVED — do not edit by hand. the home page reads these.
// the FIRST item in `experience` above is always "currently";
// everything after it becomes "prev", newest first. add a new
// box to the TOP of `experience` and the home page updates itself.
// ─────────────────────────────────────────────────────────────
const summarize = (job) => `${job.title} @ ${job.company}`

export const currently = experience.length ? summarize(experience[0]) : ''
export const prev = experience.slice(1).map(summarize)

export const projects = [
  {
    title: 'phishing detection — end to end mlops',
    date: 'nov — dec 2025',
    description:
      'full pipeline. **5 ensemble models**, champion-challenger, mlflow tracking, fastapi + docker, ci/cd to aws, drift monitoring. **90%+ accuracy**.',
    tags: ['fastapi', 'docker', 'mlflow', 'aws', 'etl pipelines', 'python', 'ensemble ml'],
    github: 'https://github.com/DakshaMudumbai/NetworkSecurity',
  },
  {
    title: 'network anomaly detection + xai',
    date: 'jan — jul 2025',
    description:
      'ensemble over **2m+ traffic records**. svm + autoencoders + isolation forest. **+25% vs single-model baselines**. shap/lime so analysts trust the alerts.',
    tags: ['pytorch', 'shap', 'lime'],
    github: 'https://github.com/DakshaMudumbai/Anomaly-Detection-with-XAI',
  },
  {
    title: 'log4shell detection — splunk es',
    date: 'oct 2025',
    description:
      'spl rules hunting **cve-2021-44228**. jndi injection + malicious java class loads. **caught 14 real attack events**. wired up alerting + forensic timelines.',
    tags: ['splunk', 'spl', 'mitre att&ck'],
    github: 'https://github.com/DakshaMudumbai/MITRE-ATTCK-Splunk-Detections',
  },
  {
    title: 'risk assessment — nist sp 800-30',
    date: 'nov 2025',
    description:
      '**t1190 exposure assessment**, inherent vs residual (**high to low** via splunk controls). mapped to **nist 800-53 + iso 27001** with formal compliance deliverables.',
    tags: ['nist 800-30', 'nist 800-53', 'iso 27001', 'splunk'],
  },
]

export const links = {
  github: 'https://github.com/DakshaMudumbai',
  linkedin: 'https://linkedin.com/in/daksha-mudumbai',
  email: 'mudumbaid@gmail.com',
}

export const navItems = [
  { label: '~', path: '/' },
  { label: 'about', path: '/about' },
  { label: 'work', path: '/work' },
  { label: 'projects', path: '/projects' },
  { label: 'blog', path: '/blog' },
]

export const commandPaletteItems = [
  { label: '~ home', path: '/', keywords: ['home', 'hero'], shortcut: 'h' },
  { label: 'about', path: '/about', keywords: ['about', 'bio', 'school'], shortcut: 'a', num: 1 },
  { label: 'work', path: '/work', keywords: ['experience', 'jobs', 'internship'], shortcut: 'w', num: 2 },
  { label: 'projects', path: '/projects', keywords: ['projects', 'code', 'builds'], shortcut: 'p', num: 3 },
  { label: 'blog', path: '/blog', keywords: ['writing', 'posts', 'notes'], shortcut: 'b', num: 4 },
  { label: 'github ↗', href: 'https://github.com/DakshaMudumbai', keywords: ['github', 'code'], shortcut: 'g' },
  { label: 'linkedin ↗', href: 'https://linkedin.com/in/daksha-mudumbai', keywords: ['linkedin'], shortcut: 'l' },
  { label: 'email ↗', href: 'mailto:mudumbaid@gmail.com', keywords: ['email', 'contact', 'mail'], shortcut: 'e' },
]
