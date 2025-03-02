
import React, { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import NanVarHome from "../component/NanVarHome";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/singUp.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, userType, setUserType, userId, setUserId } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorResponse(null);  
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          "email": email,
          "password": password
        }),
      });

      if (response.ok) {
        const json = await response.json();
        
        if (json.body.accessToken ) {
          sessionStorage.setItem('accessToken',json.body.accessToken );
          setUserType(json.body.userType);
          setUserId(json.body.userId);
          setIsAuthenticated(true);
        }
      } else {
        const json = await response.json();
        setErrorResponse(json.body.error || "Error de autenticación");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setErrorResponse("Error de conexión. Inténtalo más tarde.");
    }
  }

  useEffect(() => {
      if (isAuthenticated) {
        if (userType === 'ADM') {
          navigate('/adm');
        } else {
          navigate('/reader');
        }
      }
  }, [isAuthenticated, userType, navigate]);

  return (
    <>
      <NanVarHome/>
        <div className="register-container">
          <form onSubmit={handleSubmit} className="register-box">
            <h2 className="register-title">Login</h2>
  
            {errorResponse && (
              <div className="register-error">
                {errorResponse}
              </div>
            )}
  
            <div>
              <label htmlFor="email" className="register-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="register-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            <div>
              <label htmlFor="password" className="register-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="register-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
  
            <button
              type="submit"
              className="register-button"
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
  
};

export default Login;
