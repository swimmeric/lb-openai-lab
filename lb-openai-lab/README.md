# lb-openai-lab

This is a minimal Angular application designed to interact with an OpenAI-backed backend. The application features a simple interface where users can input questions and receive responses.

## Project Structure

```
lb-openai-lab
├── src
│   ├── app
│   │   ├── data
│   │   │   └── ai-lab.service.ts
│   │   ├── home
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   └── home.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── environments
│   │   ├── environment.development.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── .eslintrc.json
├── .prettierrc
├── .prettierignore
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Angular CLI (latest version)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd lb-openai-lab
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application locally, use the command:
```
ng serve
```

Navigate to `http://localhost:4200` in your browser to see the application in action.

### Features

- Standalone components with routing enabled.
- Strict TypeScript configuration.
- SCSS styling for components.
- A simple "Home" page with an input field and button to ask questions.

### Future Development

This application is designed to connect to an OpenAI-backed backend. The service stub is currently set up to return a placeholder message. Future updates will include:

- Connecting to the backend API.
- Enhancing the user interface.
- Adding error handling and loading states.

## License

This project is licensed under the MIT License.