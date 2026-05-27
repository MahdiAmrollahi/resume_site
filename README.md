# Mahdi Amrollahi Biouki Resume Website

A modern personal resume and portfolio website for **Mahdi Amrollahi Biouki**. The site presents Mahdi as a backend developer and AI researcher through a focused, visual, and evidence-driven interface instead of a typical resume template.

The design combines a strong first viewport, GitHub-backed project highlights, a backend and AI capability map, a working narrative, and a downloadable resume PDF.

## Highlights

- Custom modern resume layout built with the Next.js App Router.
- Responsive first-screen portfolio experience with profile image, resume action, and GitHub action.
- Selected project section featuring public repositories across AI agents, RAG, NLP, Rust services, and backend practice.
- Capability map for backend systems, data infrastructure, AI engineering, and research foundations.
- Downloadable PDF resume included as a public asset.
- Custom SVG favicon aligned with the site's visual identity.
- Offline-friendly styling with system font stacks, avoiding build-time Google font fetching.

## Tech Stack

- **Framework:** Next.js 16
- **Runtime UI:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 plus custom global CSS
- **Linting:** ESLint with Next.js config

## Project Structure

```text
app/
  globals.css        Global styles, custom visual system, responsive rules
  icon.svg           Custom app icon / favicon
  layout.tsx         Root layout and metadata
  page.tsx           Main resume website

public/
  Mahdi_Amrollahi_Biouki_Resume.pdf
  mahdi-avatar.jpg
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:3000
```

If port `3000` is already in use, run Next on another port:

```bash
npx next dev --port 3001
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint checks.

## Content Sources

The website uses:

- The resume PDF at `public/Mahdi_Amrollahi_Biouki_Resume.pdf`
- The profile image at `public/mahdi-avatar.jpg`
- Public GitHub profile and repository information from:
  - <https://github.com/MahdiAmrollahi>

## Customization

Most visible content lives in `app/page.tsx`:

- `projects` controls the featured repository rows.
- `skills` controls the capability map.
- `signals` controls the GitHub/profile metrics.
- `timeline` controls the working narrative section.

Main visual styling lives in `app/globals.css`, including:

- Hero grid background
- Action buttons
- Project rows
- Skill blocks
- Timeline styling
- Responsive behavior

To update the resume PDF, replace:

```text
public/Mahdi_Amrollahi_Biouki_Resume.pdf
```

To update the avatar, replace:

```text
public/mahdi-avatar.jpg
```

## Validation

Before shipping changes, run:

```bash
npm run lint
npm run build
```

Both commands should complete successfully.

## Deployment

This is a standard Next.js app and can be deployed to platforms such as Vercel, Netlify, Render, or any Node-compatible hosting provider.

For Vercel:

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

The production build command is:

```bash
npm run build
```

The output is handled by Next.js according to the deployment provider.

## License

This project is a personal resume website for Mahdi Amrollahi Biouki. Reuse the structure if helpful, but replace all personal content, assets, resume files, and identity-specific branding before publishing your own version.
