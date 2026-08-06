# Portfolio — Raju

A modern, responsive portfolio website for a B.Sc Computer Science fresher, built with **HTML5**, **Tailwind CSS**, and **vanilla JavaScript**. Designed to showcase projects, skills, education, and achievements — and ready to host on GitHub Pages.

## Live Site

🔗 [qa-rmacha.github.io/my-portfolio](https://qa-rmacha.github.io/my-portfolio/)

## Features

- **Hero section** — animated typing effect, code-card visual, CTAs ("View Projects", "Download Resume")
- **About Me** — professional summary, education (B.Sc, university, graduation year, CGPA), career goals
- **Skills & Tech Stack** — categorized badges: Languages, Web Technologies/Frameworks, Databases, Tools
- **Projects** — 4 featured fresher projects (Full-Stack, AI/ML, IoT) with tech stack and GitHub/Live links
- **Certificates & Achievements** — hackathons, online certifications, coding milestones
- **Contact** — validated form + direct links to GitHub, LinkedIn, Email, and Phone
- **Dark/Light mode** — sleek default dark theme with cyan→indigo neon accents, persisted to localStorage
- **Fully responsive** — mobile, tablet, and desktop layouts
- **Micro-interactions** — smooth scrolling, scroll-reveal animations, hover effects on cards/buttons

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
- `alex.morgan@email.com`, `+91 99491 23456` → contact info
- `qa-rmacha` / `rajukumar-macha` in GitHub/LinkedIn links → your handles
- `resume.pdf` → link to your actual resume
- Education, skills, projects, and certificates → your own data

To receive real form submissions, point the form handler in `script.js` to a
service like [Formspree](https://formspree.io) or your own backend.

## License

MIT © Raju
