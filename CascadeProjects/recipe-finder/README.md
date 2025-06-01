# Recipe Finder

A modern web application that helps users find recipes based on ingredients, dietary preferences, and cuisine types using the Spoonacular API.

## Features

- Search recipes by ingredients, cuisine, or dietary preferences
- View recipe details including ingredients and instructions
- Save favorite recipes to local storage
- Responsive design that works on all devices
- Error handling and loading states
- Modern UI with Material-UI components
- Cloud deployment with Firebase Hosting

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Spoonacular API key:
   ```
   REACT_APP_SPOONACULAR_API_KEY=5c55aa12da8c4e81b4950fa437b1678e
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```
4. Start the development server:
   ```bash
   npx react-scripts start
   ```

## API Usage

This app uses the [Spoonacular API](https://spoonacular.com/food-api) to fetch recipes. You must provide your own API key in the `.env` file. The main endpoint used is `/recipes/complexSearch` with query, diet, and cuisine parameters.

### Error Handling
- If the API returns an error (e.g., quota exceeded, invalid key), a user-friendly error message is displayed.
- Network errors are also caught and shown to the user.

## Responsive Design
- Built with Material-UI and Bootstrap for a modern, responsive layout.
- Tested on mobile and desktop devices.

## Firebase Hosting Deployment

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```bash
   firebase login
   ```
3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```
   - Select Hosting, choose your project, set `build` as the public directory, and configure as a single-page app.
4. Build the React app:
   ```bash
   npm run build
   ```
5. Deploy:
   ```bash
   firebase deploy
   ```

## Portfolio Tips
- Include screenshots of:
  - Search/filter UI
  - Responsive layout (mobile/desktop)
  - Error messages (e.g., API limit reached)
  - Favorites feature
- Highlight API integration and error handling in your README.

## Project Structure

```
src/
├── components/     # React components
├── services/      # API services
├── styles/        # Global styles
└── App.js         # Main application component
```
