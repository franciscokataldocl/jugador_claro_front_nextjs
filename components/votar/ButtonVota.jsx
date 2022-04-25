import styled from "styled-components";
import Swal from "sweetalert2";
import "animate.css";
import { useUser } from "../../context/userContext";
import { useShowHide } from "../../context/ShowHideContext";
import { useQuiz } from "../../context/quizContext";

const ButtonVota = ({ playerId, playerName }) => {
  // const { vote, setVote } = useVoto();
  // const [ready, setReady] = useState(false);
  const {setQuiz} = useQuiz();
  const { user, setUser } = useUser();

  //setear para mostrar porcentajes despues de votar
  const { show, setShow } = useShowHide();

  const sendVoto = () => {

    //setear jugador votado en el context
    setUser((prev) => ({
      user: {
        ...prev.user,
      },
      player: {
        id: playerId,
        nombre: playerName,
      },
    }));

    //setear show porcentaje despues de votar, para mostrar caja de %
    setShow((prev) => ({
      ...prev,
      porcentajeVotos: true,
    }));

    //enviar el usuario y el jugador al backend para hacer el match
    // usuario -> voto por -> jugador - sumar + 1 a jugador.votos
    const sendRequest = async () => {
      const token = document.cookie.replace('token=', '');
      const requestOptions = {
        method: "POST",
        headers: {
          'authorization': token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid: user.user.id, playerId: playerId }),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}vote`,
        requestOptions
      );
      const data = await response.json();
      // console.log("data despues de actualizar usuario y jugador");
      // console.log(data);

      if (data.status === 403) {
         setShow((prev) => ({
           ...prev,
           votar: true,
           quizModal: false,
           showQuiz: false,
           porcentajeVotos: false,
         }));

        Swal.fire({
          title: `¡No hemos podido almacenar tu voto`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          text: "Intenta más tarde",
          icon: "warning",
          color: "var(--black)",
          background: "white",
          confirmButtonText: "salir",
          confirmButtonColor: "var(--red)",

          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            //si la persona presiona el boton Ir a la trivia

            //mostramos el modal de la trivia


            window.location.reload();







          }
        }); //end then swal
      }








      //si se actualizo el usuario y el jugador
      //mostramos el modal del quiz
      if (data.status === 200) {
        Swal.fire({
          title: `¡Tu voto para ${data.Player.nombre} fue guardado con éxito!`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          text: "No olvides participar en la trivia EL JUGADOR CLARO",
          icon: "success",
          color: "var(--black)",
          background: "white",
          confirmButtonText: "Ir a la trivia",
          confirmButtonColor: "var(--red)",

          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            //si la persona presiona el boton Ir a la trivia

            //mostramos el modal de la trivia
            setShow((prev) => ({
                    ...prev,
                    quizModal: true,
                  }));
          }
        }); //end then swal


      }
    };
    sendRequest();

    // const sendVoto = async () => {
    //   setVote((prev) => ({
    //     ...prev,
    //     vote: "show",
    //     isVoted: false,
    //     user: prev.user,
    //     player: {
    //       id: playerId,
    //       nombre: playerName,
    //     },
    //   }));
    //   setReady(true);
    // };

    // useEffect(() => {
    //   if (ready === true) {
    //     const sendRequest = async () => {
    //       const requestOptions = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(vote),
    //       };

    //       const response = await fetch(
    //         `${process.env.NEXT_PUBLIC_API_URL}vote`,
    //         requestOptions
    //       );
    //       const data = await response.json();

    //       //datos de usuario despues de votar

    //       if (data.status === 200) {
    //         Swal.fire({
    //           title: `${data.mensaje}`,
    //           showClass: {
    //             popup: "animate__animated animate__fadeInDown",
    //           },
    //           text: "Gracias por Votar en El Jugador Claro",
    //           icon: "success",
    //           color: "var(--black)",
    //           background: "white",
    //           confirmButtonText: "Terminar",
    //           confirmButtonColor: "var(--red)",

    //           hideClass: {
    //             popup: "animate__animated animate__fadeOutUp",
    //           },
    //         }).then((result) => {
    //           if (result.isConfirmed) {
    //             //al llegar a este punto donde la votacion ya se ha realizado
    //             //almacenamos una variable en local storage que servira para validar
    //             //si mostramos o no el modal para jugar el quiz
    //             //localStorage.clear();
    //             //localStorage.setItem("jugar", "true");

    //             // -------CASO 1
    //             /*usuario vota y jugado en bbdd = 0
    //       mostramos modal para jugar el quiz*/

    //             setVote((prev) => ({
    //               ...prev,
    //               vote: "show",
    //               isVoted: true,
    //               user: prev.user,
    //               player: prev.player,
    //             }));

    //             if (data.usuario.jugado === false) {
    //               setQuiz(() => ({
    //                 jugar: true,
    //                 usuario_id: data.usuario.id,
    //                 showTrivia: false
    //               }));
    //               //enviar usuario que juega a bbdd

    //             }

    //             //Router.reload(window.location.pathname);
    //           }
    //         });
    //       }
    //     };
    //     sendRequest();
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [ready]);
  };
  return (
    <Button onClick={sendVoto} className="aniamte-2s">
      VOTAR
    </Button>
  );
};

export default ButtonVota;

const Button = styled.button`
  background: var(--red);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 100px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
