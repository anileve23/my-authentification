import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './Login.tsx'
import Signup from './Signup.tsx'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import AuthRoute from './AuthRoute.tsx'

const firebaseConfig = {
  apiKey: "AIzaSyDeL2gcJ2A7llLi4LzpSWf-VXJFjMbcLm4",
  authDomain: "authentification-551d6.firebaseapp.com",
  projectId: "authentification-551d6",
  storageBucket: "authentification-551d6.firebasestorage.app",
  messagingSenderId: "429980405595",
  appId: "1:429980405595:web:6f201aec158d692900147e"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<AuthRoute><App/></AuthRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  </StrictMode>,
);