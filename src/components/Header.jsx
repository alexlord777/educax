import React from 'react';
import s from './Header.module.css';
import landinpage from './../assets/landinpage.png';
import { Link } from 'react-router-dom';

const Header = ({ setId }) => {

  const handleOnclick = () => {
    // Objeto con datos a enviar al servidor
    const datos = {
      nombre: "",
    };

    // Realizar la solicitud POST
    fetch('https://educax.onrender.com/service/init', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then(response => response.json())
      .then(data => {
        setId(data.id)
      })
      .catch(error => console.error('Error 1: ', error));
  }
  return (
    <div className={s.container} >

      <div className={s.img_container}>
        <img src={landinpage} />
      </div>

      <div className={s.tex}>
        <h2>Descubre Tu Estilo de Aprendizaje</h2>
        <br />
        <div className={s.p} >
          Bienvenido, la plataforma que te ayuda a descubrir y aprovechar tu estilo de aprendizaje único. Cada persona tiene una forma única de asimilar nueva información, ya sea visualmente, auditivamente o kinestésicamente. Nuestra aplicación utiliza herramientas avanzadas para identificar tu tipo de aprendizaje dominante y proporcionarte estrategias personalizadas para mejorar tu proceso de estudio.
          <br />
          <br />
          <div className={s.b} onClick={handleOnclick}><Link to="/test">Start</Link></div>
        </div>
      </div>

    </div>
  )
}

export default Header