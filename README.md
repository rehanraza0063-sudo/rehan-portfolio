# Rehan Raza Shaikh — Portfolio

A personal portfolio site built with React + Vite.

## Running it locally

You'll need [Node.js](https://nodejs.org/) (v18 or newer) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the local address it prints (usually `http://localhost:5173`).

## Building for deployment

```bash
npm run build
```

This creates a `dist/` folder with the static site, which you can deploy to
Vercel, Netlify, GitHub Pages, or any static host.

## Before you publish

- Open `src/sections/Contact.jsx` and set the `EMAIL` constant at the top of
  the file to your email address. It's left blank on purpose since no email
  was provided.
- Double check the LinkedIn and GitHub links in `src/components/Navbar.jsx`,
  `src/components/Footer.jsx`, `src/sections/Home.jsx`, and
  `src/sections/Contact.jsx` if either handle ever changes.
- As the IIT Bombay × VIT research internship progresses, update the
  description in `src/sections/Research.jsx` with anything new you can
  actually say about it.

## Project structure

```
src/
  components/   Navbar, Footer
  sections/     Home, About, Research, Projects, Writing, Skills,
                Achievements, Contact
  App.jsx       Assembles all sections
  main.jsx      React entry point
  index.css     All styling (design tokens at the top)
```
