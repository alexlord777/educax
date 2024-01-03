import React from 'react';
import { useState, useEffect } from 'react';
import Questions from '../helpers/Questions';
import s from './Test.module.css';
//import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


let Sim = ["A: ", "B: ", "C: "];

function stringMasRepetido(arr) {
  // Crear un objeto para contar las ocurrencias de cada string
  const contador = arr.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});

  // Encontrar el string con el recuento máximo
  let stringMaxRepetido;
  let maxRepeticiones = 0;

  for (const str in contador) {
    if (contador[str] > maxRepeticiones) {
      maxRepeticiones = contador[str];
      stringMaxRepetido = str;
    }
  }

  return stringMaxRepetido;
}

const Test = ({id,setKind}) => {
  const [qu, setQ] = useState(0);
  const [res, setRes] = useState([]);



  const nextQuestion = (i) => {
    const o = Object.entries(Questions[qu].r)[i][0]
    setRes(res.concat(o))
    setQ(qu + 1)
  }
  const navigate = useNavigate();

  useEffect(() => {
    if (qu > 6)
    {
      let k=stringMasRepetido(res);
      let tipo="";

      if(k=="A") tipo="Auditivo";
      else if(k=="V") tipo= "Visial";
      else if(k=="K") tipo="Kinestegico";

      const datos = {
        id: id,
        tipo:k
      };
  
      // Realizar la solicitud POST
      fetch('https://educax.onrender.com/service/test', {
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
      setKind(k);
      navigate('/res');
    } 
  }, [qu])



  return (
    <div>
      {
        qu <= 6 ? <div>
          <h2 className={s.q}>{Questions[qu].q}</h2>
          <div id={s.container_questions} >
            <div> </div>
            <div>
              {

                Object.entries(Questions[qu].r).map((e, i) => (
                  <div onClick={() => nextQuestion(i)} id={s.question} key={i}>
                    <div>{Sim[i]}</div>
                    <p >{e[1]}</p>
                  </div>
                ))
              }
            </div>
            <div> </div>
          </div>
        </div> : <div>Hola</div>
      }
    </div>
  )
}

export default Test
