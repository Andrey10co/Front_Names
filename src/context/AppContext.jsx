import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [names, setNames] = useState([]);
  const { userId, userType, isTokenExpired } = useAuth(); 
  const token = sessionStorage.getItem('accessToken');

  // Obtener los nombres almacenados desde el backend
  async function fetchNames() {
    try {
      const response = await fetch("http://209.38.53.48/api/getNames");
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
      const response = await fetch("http://209.38.53.48/api/sendNames", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
  
      if (!response.ok) throw new Error("Error al agregar el nombre");
  
      const newName = await response.text(); // 🛠️ Usa .text() si el backend devuelve un string plano
  
      console.log("Nuevo nombre agregado:", newName); // 📌 Verifica qué devuelve el backend
  
      setNames((prevNames) => [...prevNames, newName]); // ✅ Agregarlo como string
    } catch (error) {
      console.error("Error al agregar el nombre:", error);
    }
  }
  
  // Cargar los nombres al iniciar el contexto
  useEffect(() => {
    fetchNames();
  }, []);

  useEffect(() => {
    console.log("Estado actualizado de names:", names);
  }, [names]);

  return (
    <AppContext.Provider value={{ names, addName }}>
      {children}
    </AppContext.Provider>
  );
}
