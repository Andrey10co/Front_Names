import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function RegisterName() {
    const [name, setName] = useState("");
    const { addName } = useContext(AppContext);
  
    return (
      <div className="flex gap-2 mb-4">
        <label className="text-lg font-semibold">Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-2 py-1 flex-grow"
        />
        <button
          onClick={() => {
            addName(name);
            setName("");
          }}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Guardar
        </button>
      </div>
    );
  }
