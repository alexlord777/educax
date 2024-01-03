import React from 'react';
import s from './Resultados.module.css';
import Resultado from '../helpers/Resultado';
import { useState, useEffect } from 'react';
const Resultados = ({ id,kind }) => {


  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const datos = {
        id: id,
      };
  
      // Realizar la solicitud POST
        
      fetch('http://localhost:3000/service/final', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      })
        .then(response => response.json())
        .then(data => 
          {
        })
        .catch(error => console.error('Error 1: ', error));
    };

    // Agregar el event listener cuando el componente se monta
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (<>
    <h1 className={s.titulo}>{Resultado[0][kind].tipo}</h1>
    <div>
      <div className={s.descripcion}><h3 className={s.titulo}>Description:</h3> {Resultado[0][kind].descripcion}</div>
      <div className={s.descripcion}><h3 className={s.titulo}>Consejos: </h3> {Resultado[0][kind].consejos.map((e, i) => (
        <ul key={i}>
          {e}
        </ul>
      ))}</div>
      <div>
        <h3 className={s.titulo}>Recursos</h3>
    
        <div className={s.cards}>

          {Resultado[0][kind].recursos.map((e, i) => (
            <a key={i} href={e.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className={s.card}>
              <h4>{e.titulo}</h4>
              <div className={s.descripcion} >Description:
                {e.descripcion}
              </div>
            </div>
            </a>
          ))}
        </div>
        
      </div>
    </div>
  </>
  )
}

export default Resultados