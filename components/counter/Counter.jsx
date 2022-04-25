//plugins
import styled from "styled-components";
import { motion } from "framer-motion";
import { useCounter } from "../../context/counterContext";

import { useEffect } from "react";
import useCounterhook from "../hooks/useCounterhook";
import { useTimer } from "../../context/timerContext";
import { useEstadoPartido } from "../../context/estadoPartidoContext";

const Counter = () => {
  //context counter (contador encargado de ir actualizando la distancia entre fechas)
  const { counter, setCounter } = useCounter();

  //context inicio - termino partido
  const { timer } = useTimer();

  const { estadoPartido, setEstadoPartido } = useEstadoPartido();

  //enviamos fechas de inicio y termino del partido al hook
  //counter quien se encargada de devolver los datos actualizados cada segundo
  const { inicio, termino, segundo, minuto, hora, dia } = useCounterhook(
    timer.inicioPartido,
    timer.finPartido
  );

  useEffect(() => {
    if (!inicio && !termino) {
      //1 = no iniciado
      //2 = iniciado
      //3 = terminado
      setEstadoPartido({ estadoPartido: false });

      //partido no inicia
    } else if (inicio && !termino) {
      //partido inicio
      setEstadoPartido({ estadoPartido: true });
    }
    if (!inicio && termino) {
      // partido termino
      setEstadoPartido({ estadoPartido: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inicio, termino]);

  //enviar tiempo restante y estado del partido a counter
  // useEffect(() => {
  //   setCounter({
  //     inicio,
  //     termino,
  //     segundo,
  //     minuto,
  //     hora,
  //     dia,
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [inicio, termino]);

  return (
    <CounterContainer>
      <CounterContent>
        {/* si inicio es true mostramos "el partido ha iniciado" */}
        {inicio && (
          <motion.h2
            className="c-white"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", duration: 4 }}
          >
            El partido ha iniciado
          </motion.h2>
        )}
        {/* si termino es true mostramos "El partido ha terminado" */}
        {termino && (
          <motion.h2
            className="c-white"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", duration: 4 }}
          >
            El partido ha terminado
          </motion.h2>
        )}
        {/* si inicio es false y termino es false mostramos el contador */}

        {!inicio && !termino && (
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", duration: 4 }}
          >
            <h3 className="c-white">FALTAN</h3>
            <CounterList>
              <li className="c-white">
                <h2>{dia}</h2> <span>DÍAS</span>
              </li>
              <li className="c-white">
                <h2>{hora}</h2>
                <span>HORAS</span>
              </li>
              <li className="c-white">
                <h2>{minuto}</h2>
                <span>MINUTOS</span>
              </li>
              <li className="c-white">
                <h2>{segundo}</h2>
                <span>SEGUNDOS</span>
              </li>
            </CounterList>
            <h3 className="c-white">PARA EL PARTIDO</h3>
          </motion.div>
        )}
      </CounterContent>
    </CounterContainer>
  );
};

export default Counter;

const CounterContainer = styled.div``;

const CounterContent = styled.div`
  background: var(--red);
  max-width: 400px;
  margin-top: -10%;
`;

const CounterList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3% 0;
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 2.5rem;
    padding: 3%;
    &:nth-child(1) {
      & h2 {
        :after {
          content: ":";
          position: absolute;
          right: -18px;
        }
      }
    }
    &:nth-child(2) {
      & h2 {
        :after {
          content: ":";
          position: absolute;
          right: -18px;
        }
      }
    }
    &:nth-child(3) {
      & h2 {
        :after {
          content: ":";
          position: absolute;
          right: -18px;
        }
      }
    }
    & h2 {
      margin-left: 10px;
      position: relative;
    }

    & span {
      font-size: 0.6rem;
    }
  }
`;
