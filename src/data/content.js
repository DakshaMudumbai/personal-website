// all portfolio content in one place — edit here, nowhere else

export const profile = {
  name: 'daksha mudumbai',
  handle: 'daksha',
  role: 'cybersecurity + ml engineer',
  school: 'northeastern university, khoury college',
  degree: 'b.s. cybersecurity',
  location: 'boston',
  grad: 'may 2028',
  currently: 'cybersecurity + ai intern @ end of an era',
  prev: ['ml security @ sree tech', 'data science @ sree tech'],
}

// TODO (DAKSHA): swap these 2-3 lines for something in your own voice.
// what do you care about outside of security? valorant, basketball, sitcoms?
// make it human, not resume-speak.
export const about = [
  'northeastern \'28. building threat detection that actually ships.',
  'when i\'m not breaking things professionally, i\'m igling in valorant, theory-crafting strats nobody asked for, and yelling about basketball.',
  'sitcom opinions available upon request.',
]

export const stack = {
  'ml/ai': ['pytorch', 'scikit-learn', 'numpy', 'pandas', 'shap', 'lime', 'mlflow', 'matplotlib'],
  'security': ['splunk', 'wireshark', 'nmap', 'scapy', 'burp suite', 'mitre att&ck', 'nist'],
  'languages': ['python', 'rust', 'java', 'c', 'sql', 'javascript'],
  'infra': ['docker', 'git', 'ci/cd', 'github actions', 'terraform', 'fastapi', 'aws', 'azure']
}

export const interests = [
  'valorant igl + strat theorycrafting',
  'basketball + cricket',
  'multi-camera sitcoms',
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
      'architected geo-blocking middleware from scratch — replaced a disabled stub with a full system: maxmind ip resolution at sub-ms speed, 5-endpoint admin api, audit logging, 20 tests. default blocklist: CN, RU, KP, IR.',
      'designed and shipped multi-role account switching — built RoleContext from zero, role-aware nav per account type (planner / executor / heir), feature-flagged mocks so nothing dirty ever hits production. merged into preprod.',
      'owned asset distribution workflow end-to-end — multi-beneficiary percentage validation, localStorage fallbacks, DRY refactor eliminating duplicated logic across 8 instances. had a PR reverted for scope creep, learned from it, kept every subsequent PR surgical.'
    ],
    tags: ['rust', 'node.js', 'express', 'react', 'typescript', 'jest'],
  },
  {
    title: 'ml security engineer',
    company: 'sree tech',
    date: 'aug 2024 — oct 2025',
    location: 'part-time, austin',
    description: [
      'replaced signature-based email detection with an ensemble classifier — behavioral analysis + feature engineering over url patterns and attachment metadata.',
      'nlp pipeline on email headers + body detecting social engineering patterns, spoofing attempts, zero-day phishing indicators.',
      'auto-retraining wired into incident ticketing — models update on emerging threats without manual trigger.',
      '+20% detection accuracy. -15% false positives over rule-based baseline.'
    ],
    tags: ['python', 'nlp', 'scikit-learn'],
  },
  {
    title: 'data science intern',
    company: 'sree tech',
    date: 'may — aug 2023',
    location: 'austin',
    description: [
      'anomaly detection on raw network traffic at scale — isolation forest + svm, precision/recall tuned until it stopped crying wolf.',
      'evaluated on f1, roc-auc, precision, recall — visualized results in matplotlib/seaborn to surface actionable insights.',
      '+10% detection accuracy.'
    ],
    tags: ['pandas', 'scikit-learn', 'matplotlib'],
  },
  {
    title: 'cybersecurity intern',
    company: 'sree tech',
    date: 'may — aug 2022',
    location: 'austin',
    description: [
      'security gap analysis across physical + virtual assets — systematically identified web, ddos, dns, and credential compromise attack vectors.',
      'automated threat detection workflows with python + splunk. mapped everything to mitre att&ck.',
      'cut manual effort by 10%.'
    ],
    tags: ['splunk', 'python', 'mitre att&ck'],
  },
]

export const projects = [
  {
    title: 'phishing detection — end to end mlops',
    date: 'nov — dec 2025',
    description:
      'full pipeline. 5 ensemble models, champion-challenger, mlflow tracking, fastapi + docker, ci/cd to aws, drift monitoring. 90%+ accuracy.',
    tags: ['fastapi', 'docker', 'mlflow', 'aws'],
    github: 'https://github.com/DakshaMudumbai/NetworkSecurity',
  },
  {
    title: 'network anomaly detection + xai',
    date: 'jan — jul 2025',
    description:
      'ensemble over 2m+ traffic records. svm + autoencoders + isolation forest. +25% vs single-model baselines. shap/lime so analysts trust the alerts.',
    tags: ['pytorch', 'shap', 'lime'],
    github: 'https://github.com/DakshaMudumbai/Anomaly-Detection-with-XAI',
  },
  {
    title: 'log4shell detection — splunk es',
    date: 'oct 2025',
    description:
      'spl rules hunting cve-2021-44228. jndi injection + malicious java class loads. caught 14 real attack events. wired up alerting + forensic timelines.',
    tags: ['splunk', 'spl', 'mitre att&ck'],
    github: 'https://github.com/DakshaMudumbai/MITRE-ATTCK-Splunk-Detections',
  },
  {
    title: 'risk assessment — nist sp 800-30',
    date: 'nov 2025',
    description:
      't1190 exposure assessment, inherent vs residual (high to low via splunk controls). mapped to nist 800-53 + iso 27001 with formal compliance deliverables.',
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
  { label: 'about', path: '/about', keywords: ['about', 'bio', 'school'], shortcut: 'a' },
  { label: 'work', path: '/work', keywords: ['experience', 'jobs', 'internship'], shortcut: 'w' },
  { label: 'projects', path: '/projects', keywords: ['projects', 'code', 'builds'], shortcut: 'p' },
  { label: 'blog', path: '/blog', keywords: ['writing', 'posts', 'notes'], shortcut: 'b' },
  { label: 'github ↗', href: 'https://github.com/DakshaMudumbai', keywords: ['github', 'code'], shortcut: 'g' },
  { label: 'linkedin ↗', href: 'https://linkedin.com/in/daksha-mudumbai', keywords: ['linkedin'], shortcut: 'l' },
  { label: 'email ↗', href: 'mailto:mudumbaid@gmail.com', keywords: ['email', 'contact', 'mail'], shortcut: 'e' },
]
