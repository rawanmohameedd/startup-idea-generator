# Startup Idea Generator

A sleek web application that generates creative startup ideas and pitches by combining user inputs with AI-powered suggestions.

## Try it yourself
https://startup-ideaa-generator.netlify.app/

## Overview

The Startup Idea Generator is a React application built with TypeScript and Vite that leverages the Groq API to generate innovative startup ideas. Users provide a base idea and a current trend, and the application creates a unique startup concept with a compelling one-line pitch.

## Features

- **Interactive UI**: Clean, modern interface with neon-themed design elements
- **AI-Powered Generation**: Uses Groq's LLama3 model to create unique startup ideas
- **Animated Results**: Word-by-word reveal animations for a dynamic user experience
- **Responsive Design**: Optimized for both desktop and mobile devices

## Technologies Used

- React 18+
- TypeScript
- Vite
- Groq API (LLama3-8b-8192 model)
- CSS3 with animations

## Installation

### Prerequisites

- Node.js 16.x or higher
- npm or yarn
- Groq API key ([Get one here](https://console.groq.com/))

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/rawanmohameedd/startup-idea-generator.git
cd startup-idea-generator
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory to store your API key (optional enhancement):

```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173/`

## Usage

1. Enter your base idea in the "Your Idea" field (e.g., "food delivery")
2. Enter a current trend in the "Current Trend" field (e.g., "blockchain")
3. Input your Groq API key
4. Click "Generate Startup Idea"
5. Wait for the animated reveal of your startup idea and pitch

## Future Enhancements

- Save generated ideas to local storage
- Export ideas as images for sharing
- Theme customization options
- Integration with business model canvas generator
- User accounts to save favorite ideas

## Security Note

The current implementation requires users to input their Groq API key directly. For a production application, consider implementing a backend service to handle API calls securely.

## License

MIT

## Acknowledgments

- The neon loader animation was inspired by various CSS animation projects on CodePen
- Word reveal animation technique adapted from modern web animation patterns
- Thanks to Groq for providing the AI API that powers the idea generation