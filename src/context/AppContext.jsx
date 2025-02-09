import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [names, setNames] = useState([]);

  // Obtener los nombres almacenados desde el backend
  async function fetchNames() {
    try {
      const response = await fetch("http://localhost:5000/api/names");
      if (!response.ok) throw new Error("Error al obtener los nombres");

      const namesList = await response.json();
      setNames(namesList);
    } catch (error) {
      console.error("Error al obtener los nombres:", error);
    }
  }

  // Agregar un nuevo nombre al backend y actualizar la lista local
  async function addName(name) {
    try {
      const response = await fetch("http://localhost:5000/api/names", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error("Error al agregar el nombre");

      const newName = await response.json();
      setNames((prevNames) => [...prevNames, newName]);
    } catch (error) {
      console.error("Error al agregar el nombre:", error);
    }
  }

  // Cargar los nombres al iniciar el contexto
  useEffect(() => {
    fetchNames();
  }, []);

  return (
    <AppContext.Provider value={{ names, addName }}>
      {children}
    </AppContext.Provider>
  );
}
