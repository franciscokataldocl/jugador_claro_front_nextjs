import { useEffect } from 'react';
import styled from "styled-components";
import useCounterhook from './hooks/useCounterhook';
import { motion } from 'framer-motion';

//import { useTime } from "../context/timeContext";



const Countertest = () => {

  //sconst { time, setTime } = useTime();
  //si el partido aun no inicia se oculta formulario
  // si el partido ya inicio se muestra el formulario
  //si el partido termino se oculta el formulario



    const { inicio,termino, segundo, minuto, hora, dia } = useCounterhook(
        "Apr 8, 2022 02:40:00",
        "Apr 8, 2022 02:41:10"
      );


  // useEffect(() => {
  //   if (!inicio && !termino) {
  //     //1 = no iniciado
  //     //2 = iniciado
  //     //3 = terminado
  //    setTime({ estadoPartido: 1 });
  //    //partido no inicia
  //   }
  //   else if (inicio && !termino) {
  //     //partido inicio
  //     setTime({ estadoPartido: 2 });
  //   }
  //   else if (!inicio && termino) {
  //     // partido termino
  //     setTime({ estadoPartido: 3 });
  //   }
  // }, [inicio, termino])





    return (
    <div>
       {inicio && <motion.h2 className="c-white"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .5, type: "spring", duration: 4 }}>El partido ha iniciado</motion.h2>}
      {termino && <motion.h2 className="c-white"
       initial={{ y: "50%", opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       viewport={{ once: true }}
       transition={{ delay: .5, type: "spring", duration: 4 }}>El partido ha terminado</motion.h2>}


      {!inicio && !termino &&
      <motion.div

      initial={{ y: "50%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: .5, type: "spring", duration: 4 }}
     >
      <h3 className="c-white">FALTAN</h3>
     <CounterList

      >
         <li className="c-white"><h2>{dia}</h2> <span>DÍAS</span></li>
         <li className="c-white"><h2>{hora}</h2><span>HORAS</span></li>
         <li className="c-white"><h2>{minuto}</h2><span>MINUTOS</span></li>
         <li className="c-white"><h2>{segundo}</h2><span>SEGUNDOS</span></li>
     </CounterList>
     <h3 className="c-white">PARA EL PARTIDO</h3>
      </motion.div>}

    </div>
    )
}

export default Countertest;

const CounterList = styled.ul`
  list-style:none;
display:flex;
justify-content:center;
  align-items:center;
  width:100%;
  margin: 3% 0;
  & li{
       display:flex;
justify-content:center;
  align-items:center;
  flex-direction:column;
  font-size:2.5rem;
  padding:3%;
  &:nth-child(1){
      & h2{
        :after{
      content:":";
      position:absolute;
      right:-18px;

  }
      }
  }
  &:nth-child(2){
      & h2{
        :after{
      content:":";
      position:absolute;
      right:-18px;

  }
      }
  }
  &:nth-child(3){
      & h2{
        :after{
      content:":";
      position:absolute;
      right:-18px;

  }
      }
  }
  & h2{
      margin-left:10px;
      position:relative;
  }

   & span{
      font-size:.6rem;
  }
  }
`
