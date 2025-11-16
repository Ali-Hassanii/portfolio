# Portfolio Website

This is a modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS v4**. It features a clean, component-based architecture and is ready for customization and deployment.

## Features

- ⚡️ Fast development with Vite
- 🎨 Styled with Tailwind CSS v4 (JIT, no config needed for most use cases)
- 🧩 Modular React components for each section (Hero, About, Work Process, Portfolio, Blog, Services, Clients, Testimonial, Contact, Footer)
- 📱 Fully responsive and mobile-friendly
- 🛠️ ESLint for code quality
- 🔥 Hot Module Replacement (HMR)

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm run dev
   ```

3. **Build for production:**

   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Project Structure

```
src/
  components/      # Reusable React components for each section
  App.jsx          # Main app entry, imports all sections
  index.css        # Tailwind CSS import
  main.jsx         # React/Vite entry point
public/
  ...              # Static assets
vite.config.js     # Vite and Tailwind plugin config
```

## Customization

- Update content and images in the `src/components/` files.
- Add or remove sections as needed by editing `App.jsx`.
- Tailwind v4 is used via `@import "tailwindcss";` in `index.css` (no config file needed for most projects).

## Deployment

You can deploy the production build from the `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc).

---

Made with ❤️ using React, Vite, and Tailwind CSS.
