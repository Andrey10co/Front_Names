import React, { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import NanVarHome from "../component/NanVarHome";
import { AuthResponse, AuthResponseError } from "../types/types";
import { useNavigate } from 'react-router-dom';
import "../styles/singUp.css"


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('');
  const { setUserId, userType, setUserType } = useAuth();
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const navigate = useNavigate();
  const auth = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "email": email,
          "password": password,
          "userType": userType
        }),
      });
      
      if (response.ok) {
        const json = (await response.json()) as AuthResponse;
         // Redirige según el tipo de usuario j
      
        sessionStorage.setItem('accessToken',json.accessToken );
        setUserId(json.userId);
        auth.setIsAuthenticated(true);

      
        console.log(userType);
        navigate(auth.userType === 'ADM' ? "/adm" : "/reader");
        
        
      } else {
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
      }
    } catch (error) {
      setErrorResponse("Error de conexión. Inténtalo más tarde.");
    }
  }

 

  return (
    <>
      <NanVarHome />
      <div className="register-container">
        <div className="register-box">
          <h2 className="register-title">Register</h2>

          {errorResponse && <div className="register-error">{errorResponse}</div>}

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="register-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="register-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="user-type">User Type</label>
              <select
                id="user-type"
                className="register-input"
                value={tipo}
                onChange={(e) => {
                  setTipo(e.target.value);
                  setUserType(e.target.value);
                }}
              >
                <option value="">Select user type</option>
                <option value="ADM">Administrador</option>
                <option value="READER">Lector</option>
              </select>
            </div>

            <button type="submit" className="register-button">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;