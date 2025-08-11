# LB OpenAI Lab

An Angular application designed to integrate with OpenAI-powered backend services.

## 🚀 Features

- Standalone Angular components with strict TypeScript
- SCSS styling
- Prepared for OpenAI backend integration
- Clean, minimal architecture
- Development and production environment configurations

## 📋 Prerequisites

- Node.js (LTS version 18.x or 20.x)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/swimmeric/lb-openai-lab.git
cd lb-openai-lab

# Install dependencies
npm install
```

## 💻 Development

```bash
# Start development server
npm start

# The app will be available at http://localhost:4200
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Build output will be in dist/lb-openai-lab
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

## 📁 Project Structure

```
src/
├── app/
│   ├── data/           # Services and data access
│   ├── home/           # Home component
│   ├── app.config.ts   # App configuration
│   └── app.routes.ts   # Routing configuration
├── environments/       # Environment configurations
└── styles.scss        # Global styles
```

## 🔧 Configuration

The application uses environment files for configuration:
- `environment.development.ts` - Development settings
- `environment.ts` - Production settings

## 📝 License

This project is private and proprietary.

## 👤 Author

**swimmeric**

---
Created on: 2025-01-11