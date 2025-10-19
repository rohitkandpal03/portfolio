# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. This portfolio showcases my projects, skills, and professional experience in web development.

## 🚀 Live Demo

Visit the live portfolio: [https://rohitkandpal03.github.io/portfolio](https://rohitkandpal03.github.io/portfolio)

## ✨ Features

- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **TypeScript**: Type-safe development with full TypeScript support
- **Component-Based Architecture**: Modular React components for maintainability
- **CSS Modules**: Scoped styling to prevent CSS conflicts
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.0.2
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages
- **Testing**: Jest, React Testing Library

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── docs/                    # Project images and documents
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/              # React components
│   │   ├── About/              # About section
│   │   ├── AnimatedName/       # Animated name component
│   │   ├── Contact/            # Contact form
│   │   ├── Footer/             # Footer component
│   │   ├── Hero/               # Hero section
│   │   ├── Navbar/             # Navigation bar
│   │   ├── Projects/           # Projects showcase
│   │   ├── Qualification/      # Education & experience
│   │   ├── ScrollToTop/        # Scroll to top button
│   │   ├── Skills/             # Skills section
│   │   └── Summary/            # Summary section
│   ├── constants/              # Constants and data
│   │   └── projects.ts         # Projects data
│   ├── services/               # Service workers
│   ├── styles/                 # Global styles
│   │   ├── App.css
│   │   └── index.css
│   ├── App.tsx                 # Main App component
│   └── index.tsx               # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohitkandpal03/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Sections

### 🏠 Hero
- Animated introduction with name
- Professional title and brief description
- Call-to-action buttons

### 👨‍💻 About
- Personal introduction
- Professional background
- Key achievements and experience

### 🛠️ Skills
- Technical skills showcase
- Programming languages
- Frameworks and tools
- Soft skills

### 🎓 Qualification
- Educational background
- Professional experience
- Certifications and achievements

### 🚀 Projects
- Featured projects showcase
- Project descriptions and technologies
- Live demo and source code links
- Key projects include:
  - **ShopStore**: E-commerce platform with Next.js, Stripe, PayPal
  - **Studio.ai**: AI content platform with React and Firebase
  - **Office-IQ**: Document intelligence application
  - **Bajaj Finserv Health**: Healthcare solution
  - **Virtual Combine**: Sports management platform

### 📞 Contact
- Contact information
- Social media links
- Contact form (if implemented)

## 🎨 Customization

### Adding New Projects

1. Open `src/constants/projects.ts`
2. Add a new project object with the following structure:
   ```typescript
   {
     id: number,
     title: string,
     description: string,
     image: string,
     category: string,
     technologies: string[],
     demoLink: string,
     codeLink: string
   }
   ```

### Updating Personal Information

- **Hero Section**: Update `src/components/Hero/Hero.tsx`
- **About Section**: Update `src/components/About/About.tsx`
- **Contact Information**: Update `src/components/Contact/Contact.tsx`

### Styling

- Global styles: `src/styles/`
- Component-specific styles: Each component has its own `.module.css` file
- CSS Modules are used for scoped styling

## 🚀 Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. Run `npm run deploy` to deploy to GitHub Pages
3. The site will be available at `https://rohitkandpal03.github.io/portfolio`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Rohit Kandpal**
- GitHub: [@rohitkandpal03](https://github.com/rohitkandpal03)
- Email: rohitkandpal125@gmail.com

---

⭐ If you found this portfolio helpful, please give it a star!