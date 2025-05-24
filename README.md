# RoamReady: Your Ultimate Travel Companion

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Responsive Design](#responsive-design)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

**RoamReady** is a modern, responsive travel blog and product showcase built with React. It inspires and equips travelers to explore the world responsibly, featuring sustainable travel products, destination cards, blog articles, and more. The project demonstrates best practices in React component architecture, CSS Modules, and responsive design.

---

## Features

- 🌍 **Sustainable Travel Focus:** Highlights eco-friendly products and responsible travel tips.
- 🖼️ **Destination Cards:** Beautiful cards for destinations, with images and descriptions.
- 📝 **Travel Blog:** Expandable blog posts with practical advice and inspiration.
- 📱 **Responsive Design:** Optimized layouts for mobile, tablet, and desktop.
-  **Navigation:** Hamburger menu for small screens, horizontal nav for large screens.
-  **Contact Section:** Simple contact form and company info.
-  **Component-Based:** Modular, reusable React components.
-  **Custom Theming:** Easily adjustable color palette and breakpoints.





## Tech Stack

- **React** (with functional components and hooks)
- **CSS Modules** (scoped styling)
- **Jest** & **React Testing Library** (for testing)
- **Create React App** (project scaffolding)

---

## Folder Structure

```
grindr/
  ├── public/
  │   ├── favicon.ico
  │   ├── index.html
  │   └── ... (static assets)
  ├── src/
  │   ├── assets/
  │   │   └── images/
  │   ├── components/
  │   │   ├── Card/
  │   │   ├── Footer/
  │   │   ├── Header/
  │   │   └── Navigation/
  │   ├── data/
  │   │   └── cardData.js
  │   ├── styles/
  │   │   ├── _variables.module.css
  │   │   ├── global.css
  │   │   └── mixins.modules.css
  │   ├── App.js
  │   ├── App.module.css
  │   ├── App.css
  │   ├── index.js
  │   ├── index.css
  │   └── setupTests.js
  ├── .gitignore
  ├── package.json
  └── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR_USERNAME/roamready.git
   cd roamready/grindr
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

In the `grindr` directory, you can run:

- `npm start`  
  Runs the app in development mode.

- `npm run build`  
  Builds the app for production to the `build` folder.

- `npm test`  
  Launches the test runner.

- `npm run eject`  
  **Note:** This is a one-way operation. Use with caution.

---

## Responsive Design

- **Mobile (≤599px):** Single-column layout, hamburger navigation.
- **Tablet (600px–899px):** Two-column grid, hamburger navigation.
- **Desktop (≥900px):** Three-column grid, horizontal navigation.

All breakpoints and colors are defined in [`src/styles/_variables.module.css`](src/styles/_variables.module.css).

---

## Customization

- **Colors & Breakpoints:**  
  Edit [`src/styles/_variables.module.css`](src/styles/_variables.module.css) to change theme colors or breakpoints.

- **Card Data:**  
  Add or modify destination cards in [`src/data/cardData.js`](src/data/cardData.js).

- **Images:**  
  Place new images in [`src/assets/images/`](src/assets/images/).

- **Blog Posts:**  
  Edit or add blog posts in [`src/App.js`](src/App.js), inside the `blogPosts` array.

---

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

- **Email:** brigid@roamready.com
- **Phone:** +254 700814515
- **Address:** 123 Main Street, Roysambu, Nairobi, 00618-00618, Kenya

---

> _RoamReady: Inspiring responsible adventures, one journey at a time._
