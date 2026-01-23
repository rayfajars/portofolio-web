# Portfolio Website

A minimalist, monochrome portfolio website built with **Nuxt 3**, **Tailwind CSS**, and **shadcn-vue**.

## ✨ Features

- 🎨 Strict black & white design (brutalist/minimalist aesthetic)
- 📱 Fully responsive (mobile-first)
- ⚡ Static Site Generation (SSG) for optimal performance
- 🎯 Smooth scrolling navigation
- 🧩 shadcn-vue components (Button, Card)
- 🔤 Inter font from Google Fonts
- 🎭 Lucide icons
- ♿ SEO-friendly and accessible

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### Build for Production

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

The static files will be in `.output/public` and are ready to deploy!

## 📁 Project Structure

```
├── components/          # Vue components
│   ├── Header.vue      # Navigation header
│   ├── HeroSection.vue # Hero section
│   ├── ProjectsSection.vue
│   ├── ProjectCard.vue
│   ├── AboutSection.vue
│   ├── Footer.vue
│   └── ui/             # shadcn-vue components
├── data/
│   └── projects.ts     # Project data
├── layouts/
│   └── default.vue     # Default layout
├── pages/
│   └── index.vue       # Main page
└── assets/css/
    └── main.css        # Global styles
```

## 🎨 Customization

### 1. Update Personal Info

Edit [components/HeroSection.vue](components/HeroSection.vue):

```vue
<h1>Your Name</h1>
<p>Your tagline</p>
```

Edit [components/Footer.vue](components/Footer.vue):

```typescript
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  // ...
];
```

### 2. Add Your Projects

Edit [data/projects.ts](data/projects.ts):

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: "/images/project1.jpg", // Add images to public/images/
    repoUrl: "https://github.com/...",
    liveUrl: "https://...",
    tags: ["Nuxt 3", "TypeScript"],
  },
];
```

### 3. Update Skills

Edit [components/AboutSection.vue](components/AboutSection.vue):

```typescript
const skills = ["Vue 3", "Nuxt 3", "TypeScript", "..."];
```

### 4. SEO & Meta Tags

Edit [nuxt.config.ts](nuxt.config.ts):

```typescript
app: {
  head: {
    title: 'Your Name - Portfolio',
    meta: [
      { name: 'description', content: 'Your description here' },
    ],
  }
}
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --dir=.output/public --prod
```

### GitHub Pages / Other Static Hosts

Deploy the contents of `.output/public` to any static hosting platform.

## 🛠 Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn-vue](https://www.shadcn-vue.com/)
- **Icons**: [Lucide Vue Next](https://lucide.dev/)
- **Images**: [Nuxt Image](https://image.nuxt.com/)

## 📝 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using Nuxt 3
