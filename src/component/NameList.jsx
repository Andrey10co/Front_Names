import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function NameList() {
  const { names } = useContext(AppContext);

  return (
    <div className="border rounded p-2">
      {names.length === 0 ? (
        <p className="text-gray-500">No hay nombres guardados.</p>
      ) : (
        <ul>
          {names.map((n, index) => (
            <li key={index} className="border-b py-1">{n.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}