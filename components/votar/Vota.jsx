import react, {  useState, useEffect } from "react";

import styled from "styled-components";
import { useEstadoPartido } from "../../context/estadoPartidoContext";
import { usePlayer } from "../../context/playerContext";
import { useVoto } from "../../context/userContext";
import PlayerCard from "./PlayerCard";
import { motion, AnimatePresence } from "framer-motion";
import { useShowHide } from "../../context/ShowHideContext";




const Vota = () => {

  //obtenemos los jugadores para ser votados
  const { players } = usePlayer();

  //obtenemos el estado del partido para invocar la caja de votacion
  const { estadoPartido } = useEstadoPartido();
  //invocamos setshow para ver si mostrar u ocultar la caja de votacion
  const { show, setShow } = useShowHide();

//creamos una variable para almacenar la cantidad de votos
  //para hacer el calculo de porcentajes
  const [totalVotos, setTotalVotos] = useState(0);

  //obtenemos la cantidad de votos
  useEffect(() => {
    players.map((player) => {
      setTotalVotos((prev) => prev + player.votos);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [players]);

  return (
    <>
      <AnimatePresence>
        {estadoPartido.estadoPartido && show.votar  && (
          <Container
            as={motion.div}
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0, type: "spring", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Content>
              <TitleContainer>
                <h2>Vota por tu jugador favorito</h2>
              </TitleContainer>
              {players !== [] &&
                players.map((player) => (
                  <PlayerCard
                    key={player.id}
                    nombre={player.nombre}
                    image={player.image}
                    id={player.id}
                    votos={player.votos}
                    porcentaje={Math.ceil(
                      (player.votos / totalVotos) * 100

                    )}
                  />
                ))}
            </Content>
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default Vota;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  & h2 {
    font-size: 30px;
    font-weight: 400;
    margin: 2% auto;
  }
`;
