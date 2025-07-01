import React from 'react';
import './TituloSecao.css';

function TituloSecao({ titulo, icone = null }) {
  return (
    <div className="titulo-area">
      <div className="titulo-barra"></div>
      <div className="titulo-texto">
        {icone && <span className="icone-wrapper">{icone}</span>}
        {titulo}
      </div>
    </div>
  );
}


export default TituloSecao;
