/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

//contexts
import { useTimer } from "../context/timerContext";
import { usePlayer } from "../context/playerContext";
// import { useEstadoPartido } from "../context/estadoPartidoContext";
// import { useCounter } from "../context/counterContext";




//components
import Hero from "../components/hero/Hero";
import CounterBar from "../components/CounterBar";
import FormContainer from "../components/form/FormContainer";
import ChileClaroLogos from "./../components/ChileClaroLogos";
import BannerClaroVideo from "./../components/BannerClaroVideo";
import Vota from "../components/votar/Vota";
import QuizBanner from "../components/quiz/QuizBanner";
import Index from "../components/quiz/quizgame/Index";






export default function Home({ regiones, timers, jugadores }) {
  /*
al iniciar la aplicacion obtenemos
1 - las regiones para el formulario (regiones)
2 - fecha inicio y termino del partido (timers)
3 - jugadores para votar (jugadores)
*/

  //contexto timer (fecha inicio, fecha termino partido)
  const { timer, setTimer } = useTimer();




  //setear fecha de inicio y termino del partido
  useEffect(() => {
    setTimer({
      inicioPartido: timers.start_timer,
      finPartido: timers.end_timer,
    });
  }, []);

  //contexto player para almacenar los jugadores que podran ser votados
  const { players, setPlayers } = usePlayer();
  //setear jugadores desde la base de datos al contexto
  useEffect(() => {
    setPlayers(jugadores);
  }, [players]);



  return (
    <>
      <QuizBanner />
      <Index />
      <Hero />
      <CounterBar />
      {/* <ContainerBox regiones={regiones} /> */}
      <FormContainer regiones={regiones} />
      <Vota />
      <ChileClaroLogos />
      <BannerClaroVideo />
    </>
  );
}

export async function getServerSideProps() {
  const urlRegiones = `${process.env.NEXT_PUBLIC_API_URL}regions`;
  const urlTimer = `${process.env.NEXT_PUBLIC_API_URL}timer`;
  const urlPlayers = `${process.env.NEXT_PUBLIC_API_URL}players`;

  const [resRegiones, resTimer, resPlayers] = await Promise.all([
    fetch(urlRegiones),
    fetch(urlTimer),
    fetch(urlPlayers),
  ]);

  const [regionesData, timerData, playerData] = await Promise.all([
    resRegiones.json(),
    resTimer.json(),
    resPlayers.json()
  ]);

  const regiones = regionesData;
  const timers = timerData[0];
  const jugadores = playerData;

  return {
    props: { regiones, timers, jugadores },
  };
}
