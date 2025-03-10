import { Link } from "react-router-dom";
import React from "react";
import "../styles/NanVarHome.css"

interface DefaultLayoutProps {
  children?: React.ReactNode;
}
export default function NanVarHome({ children }: DefaultLayoutProps) {
  return (
    <>
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/singup" className="nav-link">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>

    
  </>
  );
}