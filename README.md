# Portfolio Project

This project is a portfolio website built using Next.js, React, and Three.js. The website showcases different sections, including an about page, skills, projects, and contact information. It features animations, including a shader background and skeleton loading for Figma embeds.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, clone the repository and install the necessary dependencies:

\`\`\`bash
git clone https://github.com/Rodrimansidub14/your-repo-name.git
cd your-repo-name
npm install
\`\`\`

## Scripts

The following scripts are available in the project:

- \`npm run dev\`: Starts the development server.
- \`npm run build\`: Builds the application for production.
- \`npm run start\`: Starts the production server.
- \`npm run lint\`: Runs the linter.

## Project Structure

\`\`\`plaintext
public/
  fonts/
  images/
  svgs/
    c.svg
    css-3.svg
    githublogo.svg
    html-1.svg
    java.svg
    JSLOGO.svg
    nodejs-3.svg
    postgresql.svg
    python.svg
    react-2.svg
src/
  components/
    ShaderBackground.js
    Modal.jsx
    NavBar.js
    ...
  pages/
    _app.js
    _document.js
    index.js
    about/
      index.js
  styles/
    globals.css
  ...
\`\`\`

## Features

- **Shader Background**: Uses Three.js to render a custom shader background with animations.
- **Skeleton Loading**: Displays skeleton loading screens for components, such as Figma embeds.
- **Responsive Design**: Ensures that the website looks great on devices of all sizes.
- **Animations**: Smooth transitions and animations using GSAP.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Three.js**: A JavaScript library for creating 3D graphics in the browser.
- **GSAP (GreenSock Animation Platform)**: A robust library for creating animations.
- **CSS**: Custom styles for the project.
- **Figma**: Embedding Figma designs within the project.

