# Personal Portfolio Website

This is a modern, responsive personal portfolio website built with React and Tailwind CSS. It features a sleek, glassmorphism-inspired UI with a beautiful nature background.

## Features

- **Responsive Design**: The portfolio is fully responsive and looks great on all devices, from mobile phones to desktop computers.
- **Glassmorphism UI**: The UI uses a frosted-glass effect to create a modern and visually appealing look.
- **Component-Based Architecture**: The project is built with React, using a component-based architecture that makes it easy to manage and extend.
- **Dynamic Timeline**: The timeline is dynamically generated from a data file, making it easy to update with new experiences and projects.
- **Interactive Skills Section**: The skills section showcases a wide range of technologies with corresponding icons.
- **Contact Form**: A simple contact form allows visitors to get in touch.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Framer Motion**: A library for creating animations in React.
- **React Icons**: A collection of popular icon libraries for React.
- **React Scroll**: A library for smooth scrolling to different sections of the page.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need to have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Mandar77/my-portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Running the Application

To run the app in development mode, use the following command:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Building for Production

To build the app for production, use the following command:

```sh
npm run build
```

This will create a `build` folder with the optimized production build of the app.

## Project Structure

The project follows a standard Create React App structure, with some additions:

- **`src/`**: Contains all the source code for the application.
  - **`src/assets/`**: Static assets like images.
  - **`src/components/`**: Reusable React components.
  - **`src/data/`**: Data files for the timeline and projects.
  - **`src/styles/`**: Global styles and Tailwind CSS configuration.
  - **`src/utils/`**: Utility functions.
- **`public/`**: Contains the `index.html` file and other public assets.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS.
- **`postcss.config.js`**: Configuration file for PostCSS.

## License

Distributed under the MIT License. See `LICENSE` for more information.
