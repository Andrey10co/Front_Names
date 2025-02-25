import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function RegisterName() {
  const [name, setName] = useState("");
  const { addName } = useContext(AppContext);

  return (
    <div className="register-container">
      <h1 className="register-title">Bienvenidos al registro</h1>
      <label className="register-label">Nombre</label>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre aquí"
        className="register-input"
      />
      
      <button
        onClick={() => {
          addName(name);
          setName("");
        }}
        className="register-button"
      >
        Guardar
      </button>
    </div>
  );
}
