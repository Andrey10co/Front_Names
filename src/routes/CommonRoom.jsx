import React from 'react';
import NanVarUserView from '../component/NanVarUserView';
import '../styles/CommonRoom.css'; 

function CommonRoom() {
  return (
    <div className="commonRoom-container">
      <NanVarUserView/>
      <h1 className="commonRoom-title">Bienvenidos a la Sala Comun</h1>
      <p className="commonRoom-subtitle">
        A continuacion podran encontrar un espacio de recomendaciones de las opciones y preferencias que podran realizar dentro de esta App, espero que difruten de su estadia.
      </p>
    </div>
  );
}

export default CommonRoom;
