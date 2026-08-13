# Portfolio — Raju Kumar Macha

A modern, responsive portfolio website for Rajukumar Macha — a QA & Test Automation specialist at SUSE with 11+ years of experience in Software Quality Assurance, built with **HTML5**, **Tailwind CSS**, and **vanilla JavaScript**. Designed to showcase experience, skills, real projects (banking, insurance, healthcare, e-commerce, enterprise imaging), and domains — and ready to host on GitHub Pages.

## Live Site

🔗 [qa-rmacha.github.io/my-portfolio](https://qa-rmacha.github.io/my-portfolio/)

## Features

- **Hero section** — animated typing effect, code-card visual, CTAs ("View Projects", "Download Resume")
- **About Me** — professional summary (11+ years in QA), stats, education (B.Sc Computer Science, Kakatiya University)
- **Skills & Tech Stack** — categorized badges: Languages, Testing & Automation, DevOps & Cloud, Performance & Observability
- **Experience** — timeline: SUSE, Exaze (Discovery), OCBC Bank, OpenText, Cigniti
- **Projects** — real projects: LoginDecom (OCBC), Imaging Viewers (OpenText), Rent A Center (Hybris), Alfa Insurance (Guidewire)
- **Domains & Achievements** — banking, insurance, healthcare, e-commerce, ECM, career highlights
- **Contact** — direct links to GitHub, LinkedIn, Website (LearnCen), Email, and Phone
- **Dark/Light mode** — sleek default dark theme with cyan→indigo neon accents, persisted to localStorage
- **Fully responsive** — mobile, tablet, and desktop layouts
- **Micro-interactions** — smooth scrolling, scroll-reveal animations, hover effect on cards/buttons

## Tech Stack

| Layer        | Technologies                          |
| ------------ | ------------------------------------- |
| Markup       | HTML5                                 |
| Styling      | Tailwind CSS (CDN) + custom `style.css` |
| Icons        | Lucide (CDN)                          |
| Scripting    | Vanilla JavaScript (`script.js`)      |
| Fonts        | Space Grotesk, Inter (Google Fonts)   |

## Run Locally

No build step required — it's static HTML/CSS/JS.

```bash
# Option 1: just open the file
open index.html

# Option 2: serve with Python
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Project Structure

```
.
├── index.html   # All page sections
├── style.css    # Custom styles, theme variables, animations
└── script.js    # Theme toggle, typing effect, scroll reveal, form logic
```

## Deploy to GitHub Pages

1. Push this repository to GitHub (`main` branch).
2. Repo → **Settings → Pages** → under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: `main` / `/(root)`
3. Your site is live at `https://<username>.github.io/my-portfolio/`.

## Customization

Replace these placeholders with your own details in `index.html`:

- `Raju` → your name
- `macha.raajkumar@gmail.com`, `+65 8902 0571` → contact info
- `qa-rmacha` / `rajukumar-macha` in GitHub/LinkedIn links → your handles
- `my.learncen.com` → your personal website
- `resume.pdf` → link to your actual resume (placeholder PDF)
- Education, skills, experience, projects, and domains → your own data

To receive real form submissions, point the form handler in `script.js` to a
service like [Formspree](https://formspree.io) or your own backend.

## License

MIT © Raju
