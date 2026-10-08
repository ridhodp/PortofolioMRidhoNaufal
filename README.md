# Personal Portofolio — M. Ridho Naufal Dwinanda Pakpahan

A modern, responsive personal portfolio website built with Next.js, TypeScript, React, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** Inter + JetBrains Mono (via next/font)

## Features

- Fully responsive design (mobile-first)
- Light / dark theme toggle
- Smooth scroll navigation with active section indicator
- SEO optimized with metadata
- Accessible (ARIA labels, keyboard navigation, focus states)
- Back-to-top button
- Download CV functionality

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   └── Footer.tsx      # Footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About me
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Projects.tsx    # Featured projects
│   │   ├── Research.tsx    # Security research
│   │   ├── Skills.tsx      # Skills categories
│   │   ├── Education.tsx   # Education history
│   │   ├── Certificates.tsx # Certifications & training
│   │   ├── Achievement.tsx # Achievements
│   │   └── Contact.tsx     # Contact section
│   └── ui/
│       ├── BackToTop.tsx   # Back to top button
│       ├── Section.tsx     # Section layout (index, title, content)
│       └── InfoList.tsx    # Label / value rows
├── data/
│   └── portfolio.ts        # All portfolio data (edit this file)
├── types/
│   └── portfolio.ts        # TypeScript interfaces
└── lib/
    └── utils.ts            # Utility functions
public/
├── cv.pdf                  # Your CV file
├── profile-placeholder.svg # Profile image placeholder
└── projects/
    └── guest-book.svg      # Project preview image
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

## How to Customize

### Edit Portofolio Data

All portfolio content is in `src/data/portfolio.ts`. Edit this file to update:
- Personal information
- Experience
- Projects
- Skills
- Education
- Certificates
- Achievements
- Social links

### Replace CV

Replace `public/cv.pdf` with your actual CV file.

### Add GitHub and LinkedIn URLs

Edit `src/data/portfolio.ts` and update:
```typescript
githubUrl: "https://github.com/yourusername",
linkedinUrl: "https://linkedin.com/in/yourusername",
```

### Replace Profile Image

Replace `public/profile-placeholder.svg` with your photo (recommended: JPG or WebP format).

### Update Email

Edit `src/data/portfolio.ts` and update the `email` field.

## License

MIT
