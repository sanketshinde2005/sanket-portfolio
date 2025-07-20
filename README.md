# Sanket Shinde - Portfolio

A modern, responsive personal portfolio website built with **Next.js** and **Tailwind CSS**.  
Showcases education, experience, skills, projects, certificates, achievements, and extra-curricular activities.

## Features

- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop.
- **Hero Section:** Name, animated intro, contact info, social links, and profile photo.
- **Education & Experience:** Timeline and highlights.
- **Skills & Technologies:** Categorized skill badges.
- **Projects:** Detailed cards with features, tech stack, and links.
- **Certificates & Achievements:** Professional certifications and hackathon wins.
- **Extra-Curricular:** Leadership roles, activities, and summary stats.
- **Dark Theme:** Stylish dark UI with smooth transitions.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/sanketshinde2005/sanket-portfolio.git
   cd sanket-portfolio
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Add your profile photo:**
   - Place your photo (e.g., `me.jpg`) in the `public` folder.

4. **Run the development server:**
   ```
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```
npm run build
npm start
```

## Project Structure

```
src/
  app/
    page.tsx         # Main homepage and sections
    layout.tsx       # Root layout and navbar
    globals.css      # Global styles (Tailwind + custom)
  components/
    navbar.tsx       # Responsive navigation bar
public/
  me.jpg             # Your profile photo
tailwind.config.js   # Tailwind configuration
postcss.config.js    # PostCSS configuration
```

## Customization

- **Update content:** Edit `src/app/page.tsx` for your details, skills, projects, etc.
- **Change profile photo:** Replace `public/me.jpg` with your own image.
- **Modify styles:** Edit `globals.css` or extend Tailwind in `tailwind.config.js`.

## Deployment

You can deploy this project to [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License

This project is for personal use and inspiration.  
Feel free to fork and customize!

---

**Made with ❤️ by Sanket Shinde**
