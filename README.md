# Professional Full-Stack Portfolio — Hadi Ayoub

Professional interactive portfolio for **Hadi Ayoub**, Junior Full-Stack Developer specialized in Java, Spring Boot, React, and REST API engineering.

## 🚀 Portfolio Overview

This web portfolio is designed to showcase verified software engineering projects, technical stack mastery, educational credentials, and direct contact options for recruiters, engineering managers, and clients.

- **Candidate Name**: Hadi Ayoub
- **Target Role**: Junior Full-Stack Developer
- **Primary Tech Stack**: Java, Spring Boot, Spring Security, JWT, Spring Data JPA, Hibernate, Redis, React, Tailwind CSS, Docker, PostgreSQL, MySQL.
- **Location**: Beni Mellal, Morocco (National Mobility across Morocco)
- **Seeking**: CDI / Stage / Freelance (Immediate Availability)

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide Icons, Motion Animations
- **Backend Standard**: Java Spring Boot, REST APIs, MapStruct, Swagger/OpenAPI
- **Styling Palette**: Deep Dark (`#0B0F14`), Anthracite Gray (`#151A21`), Dark Gray (`#242A33`), Electric Violet (`#8B5CF6`), Neon Blue (`#3B82F6`)
- **Build System**: Vite

---

## 📁 Project File Structure

```
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectDetailModal.tsx
│   │   ├── ExperienceEducationSection.tsx
│   │   ├── CvSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── AuditModal.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js (v18.x or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser to view the application.

### Production Build
```bash
npm run build
```

---

## ✏️ Customization Instructions

### 1. Updating Personal Information or Links
Edit `/src/data/portfolioData.ts` to update candidate details, email addresses, phone numbers, or social profile URLs.

### 2. Adding a New Project
In `/src/data/portfolioData.ts`, append a new project object to the `projectsData` array following the `Project` interface defined in `/src/types.ts`.

### 3. Updating CV Document
Replace the `cvUrl` field inside `candidateProfile` in `/src/data/portfolioData.ts` with your new document link.

---

## 🔒 Security & Confidentiality

- **Zero Secrets in Frontend**: No private API keys or database passwords are embedded in this repository.
- **Public Proof Only**: All project descriptions, GitHub repository links, and contact channels reflect verified public information.

---

## 📄 License & Credits

Designed & Engineered for **Hadi Ayoub**.
Icons powered by [Lucide React](https://lucide.dev/).
