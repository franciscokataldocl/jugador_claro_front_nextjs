/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useCounter } from "../../context/counterContext";



const useCounterhook = (fechaInicio, fechaTermino) => {

 const { counter, setCounter } = useCounter();

  //states
  const [segundo, setSegundo] = useState(0);
  const [minuto, setMinuto] = useState(0);
  const [hora, setHora] = useState(0);
  const [dia, setDia] = useState(0);
  const [inicio, setInicio] = useState(false);
  const [termino, setTermino] = useState(false);

  //real time settings
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  useEffect(() => {
    const interval = setInterval(() => {
      let inicio = new Date(fechaInicio).getTime();
      let termino = new Date(fechaTermino).getTime();
      let ahora = new Date().getTime();
      let distance = inicio - ahora;



      if (inicio > ahora && termino > ahora) {
        //si fechaInicio es mayor a este instante
        //partido aun no inicia
        setDia(Math.floor(distance / day));
        setHora(Math.floor((distance % day) / hour));
        setMinuto(Math.floor((distance % hour) / minute));
        setSegundo(Math.floor((distance % minute) / second));
        setInicio(false);
        setTermino(false);


      }

      if (inicio < ahora && termino > ahora) {
        //si fecha inicio es menor a este instante
        // partido ya inicio y aun no termina
        setDia(0);
        setHora(0);
        setMinuto(0);
        setSegundo(0);
        setInicio(true);
        setTermino(false);
      }
      if (inicio < ahora && termino < ahora) {
        //si fecha inicio es mayor a fecha de termino
        //el partido ya termino
        setDia(0);
        setHora(0);
        setMinuto(0);
        setSegundo(0);
        setInicio(false);
        setTermino(true);
      }



    }, 1000);


    // useEffect's cleanup method
    return () => {
      clearInterval(interval);
    };





    // dependency array to listen if `fetchaInicio` or `fetchTermino` changes
  }, [fechaInicio, fechaTermino]);

useEffect(() => {
 setCounter({
   inicio: inicio,
   termino: termino,
   segundo: segundo,
   minuto: minuto,
   hora: hora,
   dia: dia,
 });
}, [segundo])

  return { inicio, termino, segundo, minuto, hora, dia };
};

export default useCounterhook;


useCounterhook.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
};