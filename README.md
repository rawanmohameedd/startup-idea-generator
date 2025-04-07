# Startup Idea Generator

A web application built with **React**, **TypeScript**, and **Vite** that generates unique startup ideas based on user-provided industries and trends. The app uses **Groq API** for generating ideas and includes a modern UI with animations.

# Try it yourself
https://startup-ideaa-generator.netlify.app/

## Features

- **Dynamic Idea Generation**: Enter an industry and trend to generate a unique startup idea.
- **React + TypeScript**: Built with a modern tech stack for type safety and scalability.
- **Vite**: Fast development environment with hot module replacement (HMR).
- **Custom Animations**: Smooth animations for idea reveal and loading states.
- **ESLint Integration**: Enforced coding standards with type-aware linting.

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: CSS with custom animations
- **Build Tool**: Vite
- **API**: Groq API for idea generation
- **Linting**: ESLint with recommended and React-specific rules

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rawanmohameedd/startup-idea-generator.git
   cd startup-idea-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Groq API key:
   ```env
   VITE_GROQ_API_KEY=your-api-key-here
   ```

### Running the App

- Start the development server:
  ```bash
  npm run dev
  ```

- Open your browser and navigate to `http://localhost:5173`.

### Building for Production

- Build the app for production:
  ```bash
  npm run build
  ```

- Preview the production build:
  ```bash
  npm run preview
  ```

## Expanding the ESLint Configuration

For production applications, enable type-aware lint rules by updating the ESLint configuration. Replace the default rules with stricter ones as shown below:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also add React-specific lint rules using `eslint-plugin-react-x` and `eslint-plugin-react-dom`:

```js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## Project Structure

```
startup-idea-generator/
├── src/
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Entry point
│   ├── App.css         # Component-specific styles
│   ├── index.css       # Global styles
│   └── vite-env.d.ts   # Vite environment types
├── public/
│   └── image-removebg-preview (2).png # App logo
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## Dependencies

### Production

- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `axios`: ^1.8.4
- `framer-motion`: ^12.6.3

### Development

- `vite`: ^6.2.0
- `typescript`: ~5.7.2
- `eslint`: ^9.21.0
- `@vitejs/plugin-react`: ^4.3.4
- `@types/react`: ^19.0.10
- `@types/react-dom`: ^19.0.4

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Groq API](https://groq.com/)
- [Framer Motion](https://www.framer.com/motion/)

---
Happy coding! 🚀