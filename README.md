# Recipe Finder

Recipe Finder is a modern, full-stack web application that enables users to discover recipes based on ingredients, dietary preferences, and cuisine types. It leverages the Spoonacular API for rich recipe data and is built with the latest JavaScript frameworks for a seamless user experience.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
  - [Frameworks and Libraries](#frameworks-and-libraries)
  - [Languages Used](#languages-used)
  - [Why These Technologies?](#why-these-technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Usage](#api-usage)
- [Responsive Design](#responsive-design)
- [Firebase Hosting Deployment](#firebase-hosting-deployment)
- [Portfolio Tips](#portfolio-tips)

---

## Features

- **Search recipes** by ingredients, cuisine, or dietary preferences
- **View recipe details** including ingredients and step-by-step instructions
- **Save favorites** to local storage for quick access
- **Error handling** and user-friendly loading states
- **Modern UI** built with Material-UI and Bootstrap
- **Responsive design** for mobile and desktop
- **Cloud deployment** via Firebase Hosting

---

## Tech Stack

### Frameworks and Libraries

| Technology         | Purpose/Usage                                                                                   |
|--------------------|------------------------------------------------------------------------------------------------|
| React              | Main JavaScript library for building the user interface and component architecture.             |
| Material-UI (MUI)  | Provides modern, accessible UI components and theming.                                         |
| Bootstrap          | Augments responsive grid and utility classes for layout and spacing.                           |
| Axios              | Handles HTTP requests to the Spoonacular API.                                                  |
| React Router DOM   | Enables client-side routing and navigation between views.                                      |
| Firebase           | Used for cloud hosting and (optionally) authentication and storage.                            |
| Emotion            | CSS-in-JS library for custom, theme-able styling (used by MUI).                                |

### Languages Used

- **JavaScript (ES6+)**: Main programming language for all client-side logic and component development.
- **JSX**: For defining UI components with React.
- **CSS (via Material-UI/Emotion and Bootstrap)**: For responsive, modern design.

### Why These Technologies?

- **React**: Chosen for its component-based architecture, reactivity, and large ecosystem. Enables rapid development and maintainability.
- **Material-UI & Emotion**: Delivers a professional look-and-feel out of the box, with easy customization. Emotion allows clean, maintainable CSS-in-JS styling.
- **Bootstrap**: Provides a familiar grid system and utility classes, complementing MUI for layout tweaks and mobile-first design.
- **Axios**: Simple and robust HTTP client for API integration.
- **React Router DOM**: Supports multi-page navigation with no full page reloads, crucial for SPA experience.
- **Firebase**: Chosen for its fast, global CDN and simple deployment process. Optionally extends to authentication and database if needed.
- **JavaScript/JSX**: Industry standard for front-end web apps, offering flexibility and a huge talent pool.

---

## Project Structure

```
src/
├── components/     # Reusable React UI components
├── services/       # API request logic and external services
├── styles/         # Global and component-level styles
└── App.js          # Main application container
```

---

## Getting Started

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**  
   Create a `.env` file in the root directory and add your API keys:
   ```
   REACT_APP_SPOONACULAR_API_KEY=your_spoonacular_key
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```
4. **Start the development server**
   ```bash
   npx react-scripts start
   ```

---

## API Usage

- Uses the [Spoonacular API](https://spoonacular.com/food-api) to fetch recipe data.
- Main endpoint used: `/recipes/complexSearch`
- You must provide your own API key in `.env`.

**Error Handling:**  
- User-friendly errors for API quota, invalid keys, or network issues.

---

## Responsive Design

- Built with Material-UI and Bootstrap for a modern, mobile-friendly layout.
- Extensively tested on various device sizes.

---

## Firebase Hosting Deployment

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```
2. **Login to Firebase**
   ```bash
   firebase login
   ```
3. **Initialize Firebase in your project**
   ```bash
   firebase init
   ```
   - Choose Hosting, select your project, set `build` as public directory, configure as SPA.
4. **Build the React app**
   ```bash
   npm run build
   ```
5. **Deploy**
   ```bash
   firebase deploy
   ```
  Credits

- Powered by [Spoonacular API](https://spoonacular.com/food-api)
- UI by [Material-UI](https://mui.com/) and [Bootstrap](https://getbootstrap.com/)

---

## License

MIT (or specify your license here)
