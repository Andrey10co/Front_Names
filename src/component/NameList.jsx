import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function NameList() {
  const { names } = useContext(AppContext);

  return (
    <div className="name-list-container">
      {names.length === 0 ? (
        <p className="name-list-empty">No hay nombres guardados.</p>
      ) : (
        <ul className="name-list">
          {names.map((n, index) => (
<<<<<<< Updated upstream
            <li key={index} className="border-b py-1">{n.name}</li>
=======
            <li key={index} className="name-list-item">{n}</li>
>>>>>>> Stashed changes
          ))}
        </ul>
      )}
    </div>
  );
}
