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
            <li key={index} className="name-list-item">{n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
