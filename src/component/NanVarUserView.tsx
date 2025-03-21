import { useNavigate } from "react-router-dom";
import { useAuth } from '../auth/AuthProvider'
import React from "react";

const NanVarUserView = () => {
  const { 
    setIsAuthenticated, 
    setUserId, 
    setUserType,
    userType 
  } = useAuth();
  
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    setUserId(null);
    setUserType(null);
    navigate('/login');
  };

  // Determina la vista de home según el tipo de usuario
  const userRoute = userType === 'ADM' ? '/adm' : '/reader';

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Opciones de navegación */}
          <div className="flex space-x-6">
            <button 
              onClick={() => navigate(userRoute)} 
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              Volver a home
            </button>
            <button 
              onClick={() => navigate('/sala-comun')}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              Sala Común
            </button>
          </div>

          {/* Sección de usuario y logout */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm font-medium">
              {userType === 'ADM' ? 'Administrador' : 'Lector'}
            </span>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
            >
              <span className="mr-2">Cerrar Sesión</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3zm11 4.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L11.586 7H6a1 1 0 1 1 0-2h5.586L8.293 1.707a1 1 0 0 1 1.414-1.414L14 4.586v2.828z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NanVarUserView;
