# 🌍 Globetrotter Frontend

> The frontend for **Globetrotter** - The Ultimate Travel Guessing Game!  
> Built using **React, Vite, Redux Toolkit, Firebase, and Material UI**.

## 📌 Table of Contents

- [🛠️ Features](#features)
- [🚀 Installation](#installation)
- [📌 Environment Variables](#environment-variables)
- [▶️ Running the Project](#running-the-project)
- [📂 Project Structure](#project-structure)
- [📌 Available Scripts](#available-scripts)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

---

## 🛠️ Features

✅ **Fast & Optimized Frontend** – Powered by **Vite**.  
✅ **Modern UI** – Uses **Material UI (MUI)** for styling.  
✅ **Real-time Interactions** – Uses **Socket.io** for live updates.  
✅ **State Management** – Powered by **Redux Toolkit**.  
✅ **Form Validation** – Uses **Formik & Yup**.  
✅ **Smooth Animations** – Confetti effects on correct answers.

---

## 🚀 Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/ashvinck/globetrotter-react.git
cd globetrotter-frontend
```

### 2️⃣ Install Dependencies

```sh
npm install
```

---

## 📌 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_id
VITE_FIREBASE_MESSAGING_SENDERID=your_messaging_sender_id
VITE_FIREBASE_APPID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

---

## ▶️ Running the Project

### Development Mode

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```

### Preview the Build

```sh
npm run preview
```

---

## 📂 Project Structure

```
📦 globetrotter-frontend
├── 📂 src
│   ├── 📂 assets          # Static assets (images, icons, etc.)
│   ├── 📂 components      # Reusable UI components
│   ├── 📂 pages           # Page-level components (Home, Game, etc.)
│   ├── 📂 redux           # Redux store, slices, and actions
│   ├── 📂 hooks           # Custom hooks
│   ├── 📂 utils           # Helper functions
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point
├── .env                   # Environment variables
├── .gitignore             # Files to ignore in git
├── package.json           # Dependencies and scripts
├── README.md              # Documentation
```

---

## 📌 Available Scripts

- **`npm run dev`** – Starts the project in development mode.
- **`npm run build`** – Builds the project for production.
- **`npm run preview`** – Previews the production build.
- **`npm run lint`** – Runs ESLint to check for errors.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

---

## 📜 License

This project is licensed under the **ISC License**.

---

### 🚀 Happy Coding & Enjoy Exploring the World! 🌍🎉
