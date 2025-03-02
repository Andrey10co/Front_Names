import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navigate } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import SingUp from './routes/SingUp.tsx';
import Login from './routes/Login.tsx';
import AdmView from './routes/AdmView.jsx';
import ReaderView from './routes/ReaderView.jsx';
import CommonRoom from './routes/CommonRoom.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import AuthProvider from './auth/AuthProvider.tsx';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/home" replace /> }, // Redirige a /home automáticamente
  { path: '/home', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/singup', element: <SingUp /> },
  {
    path: '/dashboard',
    element: (
      <AppContextProvider>
        <ProtectedRoute />
      </AppContextProvider>
    ),
    children: [
      { path: 'adm', element: <AdmView /> },
      { path: 'reader', element: <ReaderView /> },
      { path: 'sala-comun', element: <CommonRoom /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
