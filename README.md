# 🎙️ Podcast Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.15.0-00695C.svg)](https://mui.com/)

A **modern, professional podcast generator** application built with React, Material UI, and Vite. Generate AI-powered podcasts using a beautiful user interface integrated with a live generation backend.

---

## 🌟 Features

- ✅ **Modern UI**: Beautiful Material Design 3 interface with smooth fade-in animations and glassmorphism.
- ✅ **Real Webhook Integration**: Connected to a live podcast generation webhook (`https://charansurebrec.qzz.io/webhook/...`) via asynchronous POST payloads.
- ✅ **Fully Functional Audio Player**: Custom-built HTML5 audio player supporting play/pause, volume slider, mute, and dynamic progress bar tracking synchronized with the audio playback.
- ✅ **Responsive Design**: Works perfectly across all screen sizes (desktop, tablet, and mobile).
- ✅ **Theme System**: Custom Material UI theme with a curated Deep Purple and Pink palette.
- ✅ **Roboto Typography**: Clean and professional typography following modern Material design systems.
- ✅ **Smart Loading States**: Features active CircularProgress spinners with pulsating icons and clear state messages (`"Creating podcast... please wait!"`).

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ramcharan170605/podcast-generator.git
   cd podcast-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

---

## 🛠️ Build & Deploy

### Build for Production

To compile and optimize the TypeScript files and Vite assets for production:

```bash
npm run build
```

This compiles TypeScript using `tsc` and bundles the code using `vite build` into the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Deployment

### Deploy to Vercel (Zero-Config)

This project has been updated to use Vercel's modern **Zero-Config** engine. The deprecated `vercel.json` config has been removed to allow Vercel to automatically detect Vite, run the standard build script, and serve compiled assets from `dist/` without routing or asset mapping conflicts.

#### Automatic GitHub Deployments
The project uses GitHub Actions (`.github/workflows/deploy.yml`) to deploy automatically on pushes to `main`. 

To set this up:
1. Create a GitHub environment named `deploy`.
2. Add the following secrets to the `deploy` environment settings:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID
3. Push to `main` to trigger the CI/CD pipeline.

---

## 📁 Project Structure

```
podcast-generator/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AudioPlayer.tsx      # HTML5 Audio player with full control bindings
│   │   ├── GenerateButton.tsx   # Gradient button with hover interactions
│   │   ├── LoadingAnimation.tsx # Spinner showing "Creating podcast... please wait!"
│   │   ├── PodcastGenerator.tsx # Main container executing POST fetch calls
│   │   └── PodcastInput.tsx     # Customized TextField for topic inputs
│   ├── App.tsx                  # Main app wrapper with MUI theme provider
│   ├── index.css                # Global styles and layout overrides
│   └── main.tsx                 # Entry point with theme settings
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated deployment pipeline utilizing the 'deploy' environment
├── .gitignore
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#673AB7` | Buttons, headers, primary highlights |
| Primary Light | `#9575CD` | Hover states, gradients |
| Primary Dark | `#5E35B1` | Active states, shadows |
| Secondary | `#FF4081` | Accent details, highlight emphasis |
| Background | `#F5F5F5` | App container background |
| Surface | `#FAFAFA` | Main card background |
| Text Primary | `#212121` | Headings and titles |
| Text Secondary | `#757575` | Captions, placeholders, and labels |

---

## 🎯 Usage

1. **Enter a Topic**: Type your desired podcast topic into the input field.
2. **Generate**: Click the **Generate Podcast** button or press **Enter**.
3. **Wait**: The interface will show `"Creating podcast... please wait!"` while fetching.
4. **Listen**: The audio player will display `"Podcast is ready! Click play to listen"` with active play controls. Click play to stream the audio directly.

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/your-feature`)
3. **Commit** your changes (`git commit -m 'Add some feature'`)
4. **Push** to the branch (`git push origin feature/your-feature`)
5. **Open** a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

*Made with React and Material UI with workflow orchestration through n8n*