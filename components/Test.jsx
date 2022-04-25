import React from 'react'
import useCounterhook from './hooks/useCounterhook';


const Test = () => {

    const { inicio, termino, segundo, minuto, hora, dia } = useCounterhook(
      //  timer.inicioPartido,
      //  timer.finPartido
      "Apr 8, 2022 00:00:00",
      "Apr 7, 2022 16:30:00"
    );


  return (
      <div>{segundo}</div>
  )
}

export default Test