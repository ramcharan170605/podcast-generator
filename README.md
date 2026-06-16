# 🎙️ Podcast Generator

[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=podcast-generator&style=for-the-badge&logo=vercel&logoColor=white)](https://podcast-generator.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.15.0-00695C.svg)](https://mui.com/)

A **modern, professional podcast generator** application built with React and Material UI. Generate AI-powered podcasts with a beautiful, responsive user interface.

---

## 🌟 Features

- ✅ **Modern UI**: Beautiful Material Design 3 interface with smooth animations
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ✅ **Theme System**: Custom Material UI theme with Deep Purple and Pink color palette
- ✅ **Roboto Typography**: Professional font family following Material Design guidelines
- ✅ **Accessibility**: Full ARIA support, keyboard navigation, and proper contrast ratios
- ✅ **Loading States**: Enhanced loading animations with CircularProgress
- ✅ **Audio Player**: Full player controls with play/pause, volume, and progress visualization

---

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](https://via.placeholder.com/800x600/673AB7/FFFFFF?text=Podcast+Generator+Desktop)

### Mobile View
![Mobile Screenshot](https://via.placeholder.com/400x800/673AB7/FFFFFF?text=Podcast+Generator+Mobile)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+ or yarn 1.22+

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ramcharan170605/podcast-generator.git
   cd podcast-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

---

## 🛠️ Build & Deploy

### Build for Production

```bash
npm run build
```

This will create a production-ready build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Or deploy via GitHub Actions:**
   - Set up the following secrets in your GitHub repository:
     - `VERCEL_TOKEN`: Your Vercel API token
     - `VERCEL_ORG_ID`: Your Vercel organization ID
     - `VERCEL_PROJECT_ID`: Your Vercel project ID
   - Push to the `main` branch to trigger automatic deployment

### Deploy to Netlify

1. **Drag and drop** the `dist/` folder to Netlify
2. **Or use Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

---

## 📁 Project Structure

```
podcast-generator/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AudioPlayer.tsx      # Audio player with controls
│   │   ├── GenerateButton.tsx   # Gradient button with loading
│   │   ├── LoadingAnimation.tsx # Loading indicator
│   │   ├── PodcastGenerator.tsx # Main component
│   │   └── PodcastInput.tsx     # TextField input
│   ├── App.tsx                  # Main app with theme
│   ├── index.css                # Global styles
│   └── main.tsx                 # Entry point with MUI theme
├── .github/
│   └── workflows/
│       └── deploy.yml           # Vercel deployment
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js          # (Removed - using MUI)
├── tsconfig.json
├── vite.config.ts
└── postcss.config.js           # (Removed - using MUI)
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#673AB7` | Buttons, headers, accents |
| Primary Light | `#9575CD` | Hover states, gradients |
| Primary Dark | `#5E35B1` | Active states, shadows |
| Secondary | `#FF4081` | Highlights, emphasis |
| Background | `#F5F5F5` | Page background |
| Surface | `#FAFAFA` | Cards, elevated surfaces |
| Text Primary | `#212121` | Main text content |
| Text Secondary | `#757575` | Secondary text, hints |

### Typography

| Element | Font Family | Weight | Size |
|---------|-------------|--------|------|
| Headings | Roboto | Medium/Regular | h1-h6 hierarchy |
| Body | Roboto | Regular | 1rem (body1) |
| Buttons | Roboto | Medium | 0.875rem |

### Spacing System

- Base unit: 8px
- Scale: 8, 16, 24, 32, 48, 64, etc.
- Follows Material Design spacing guidelines

---

## 🔧 Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 18.2.0 | Frontend framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.3.3 | Type checking |
| [Vite](https://vitejs.dev/) | 5.0.8 | Build tool & dev server |
| [Material UI](https://mui.com/) | 5.15.0 | UI component library |
| [Emotion](https://emotion.sh/) | 11.11.1 | CSS-in-JS styling |
| [Material Icons](https://mui.com/material-ui/material-icons/) | 5.15.0 | Icon library |
| [Roboto Font](https://fonts.google.com/specimen/Roboto) | 5.0.0 | Typography |

---

## 🎯 Usage

### How to Use the Podcast Generator

1. **Enter a Topic**: Type your podcast topic in the input field
2. **Generate**: Click the "Generate Podcast" button or press Enter
3. **Wait**: Loading animation will appear while processing
4. **Result**: Your podcast will appear in the audio player card

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Generate podcast (when input has text) |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/your-feature`)
3. **Commit** your changes (`git commit -m 'Add some feature'`)
4. **Push** to the branch (`git push origin feature/your-feature`)
5. **Open** a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The best frontend library
- [Material UI](https://mui.com/) - Amazing UI component library
- [Vite](https://vitejs.dev/) - Blazing fast build tool
- [Vercel](https://vercel.com/) - Easy deployment platform

---

## 📞 Contact

- **GitHub**: [ramcharan170605](https://github.com/ramcharan170605)
- **Project Link**: [https://github.com/ramcharan170605/podcast-generator](https://github.com/ramcharan170605/podcast-generator)
- **Live Demo**: [https://podcast-generator.vercel.app/](https://podcast-generator.vercel.app/)

---

<div align="center">

🌟 **Star this repository if you found it helpful!** 🌟

</div>

---

*Made with ❤️ and Material UI*