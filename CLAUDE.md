# CLAUDE.md

## What am I building?
a personal portfolio website for daksha mudumbai — cybersecurity + ml
engineer, b.s. cybersecurity @ northeastern (khoury college), boston,
graduating may 2028. this site is for internship applications and
showing my work. deploy free on github pages.

cybersecurity + ml. northeastern '28. building threat detection
that actually ships.

when i'm not breaking things professionally, i'm IGLing in valorant,
theory-crafting strats nobody asked for, and yelling about basketball.
sitcom opinions available upon request.

## Stack
- react + vite
- tailwind css for styling
- javascript (NOT typescript)
- deploy to github pages (static build)

## What should it look like?
- cozy terminal / vim aesthetic — like tetraslam.world but MINE, not a clone
- LIGHT, muted, soft — "dull light, relaxing, mood booster." not bright, not harsh
- palette: catppuccin latte (warm cream background, muted mauve/lavender accents)
  keep all colors as css variables so i can swap the whole palette easily
- fonts: space mono for headings, jetbrains mono for body (google fonts)
- everything lowercase
- monospace everywhere
- generous whitespace, hairline borders, terse copy
- drifting dithered pixel cloud background, very subtle, behind content
- soft wireframe / low-poly centerpiece on the home hero (no glow — light bg)
- working cmd+K / ctrl+K command palette for navigation
- NOT neon, NOT poppy, NOT the generic dark-with-one-accent AI look
- should feel hand-crafted and cozy, not templated

### design references (for the agent)
- tetraslam.world — the genre: mono, lowercase, command palette, terse.
  take the vibe, NOT his colors or layout
- dither plugin (dither.floriankiem.com) — dithered pixel cloud texture
- conway by rankdim (rankdim.github.io) — subtle animated background option

## What pages does it have?
- ~ (home) — hero with centerpiece, name, role, currently/prev, links, cmd+K hint
- work — experience + projects as terse tagged cards with real screenshots
- contact — links + email + a line

<!-- TODO: add more pages if i want later (blog, ctf, setup, etc) -->

## What's my actual content?

### about
daksha mudumbai. cybersecurity + ml engineer. northeastern university,
khoury college, b.s. cybersecurity, boston. gpa 3.37. grad may 2028.

<!-- TODO (DAKSHA): write 2-3 lines about yourself in your own voice.
     what do you care about? what do you do outside of security?
     gym? games? exploring boston? make it human, not resume-speak. -->

### experience
- cybersecurity + ai intern @ end of an era (jan 2026 — present, remote)
  writing rust geo-blocking middleware. sub-ms ip lookups at 100k+ rps,
  bridged into node via napi-rs. led interns building ci smoke tests.
  tags: rust, napi-rs, node, ci/cd

- ml security engineer @ sree tech (aug 2024 — oct 2025, part-time, austin)
  killed the signature-based email filter and replaced it with ml.
  nlp on headers + body to catch zero-day phishing. +20% catch rate, -15% false positives.
  built auto-retraining tied to incident tickets.
  tags: python, nlp, scikit-learn

- data science intern @ sree tech (may — aug 2023, austin)
  anomaly detection on raw network traffic. isolation forest + svm,
  tuned until it stopped crying wolf. +10% accuracy.
  tags: pandas, scikit-learn, matplotlib

- cybersecurity intern @ sree tech (may — aug 2022, austin)
  security gap analysis across physical + virtual assets.
  automated threat detection workflows with python + splunk, mapped to mitre att&ck.
  tags: splunk, python, mitre att&ck

### projects
- phishing detection — end to end mlops (nov — dec 2025)
  full pipeline. 5 ensemble models, champion-challenger, mlflow tracking,
  fastapi + docker, ci/cd to aws, drift monitoring. 90%+ accuracy.
  tags: fastapi, docker, mlflow, aws
  <!-- TODO: add github link -->

- network anomaly detection + xai (jan — jul 2025)
  ensemble over 2M+ traffic records. svm + autoencoders + isolation forest.
  +25% vs single-model baselines. shap/lime so analysts trust the alerts.
  tags: pytorch, shap, lime
  <!-- TODO: add github link -->

- log4shell detection — splunk es (oct 2025)
  spl rules hunting cve-2021-44228. jndi injection + malicious java class loads.
  caught 14 real attack events. wired up alerting + forensic timelines.
  tags: splunk, spl, mitre att&ck

- risk assessment — nist sp 800-30 (nov 2025)
  t1190 exposure assessment, inherent vs residual (high to low via splunk controls).
  mapped to nist 800-53 + iso 27001 with formal compliance deliverables.
  tags: nist 800-30, nist 800-53, iso 27001, splunk

### links
- github: github.com/DakshaMudumbai
- linkedin: linkedin.com/in/daksha-mudumbai
- email: mudumbaid@gmail.com

## Rules for the AI
- NEVER write resume-speak. keep copy terse, confident, lowercase, human.
- one feature per step. don't build everything at once.
- show me every file you change. explain what you did.
- use reusable components — don't hardcode stuff that should be props.
- no typescript. plain javascript only.
- no secrets or api keys in code.
- handle edge cases: empty states, loading, mobile responsive.
- always show evidence it works (run the build, show the output).
- when i ask "explain this" — explain like i'm new to react.

## Still need to decide
- exact nav items beyond home/work/contact (blog? ctf? setup?)
- headshot photo — maybe add later
- project screenshots — need to take real ones
- whether to add a blog section (markdown posts for writeups)
- custom domain vs just github pages url for now