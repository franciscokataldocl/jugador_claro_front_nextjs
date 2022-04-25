import React from 'react';
import styled from 'styled-components';
import { useUser } from '../../../context/userContext';
import Swal from "sweetalert2";
import "animate.css";


const Terminado = () => {

 const{user, setUser} = useUser();
      const token = document.cookie.replace("token=", "");

    const saveUserQuiz = async (id) => {
        const requestOptions = {
          method: "POST",
          headers: {
            'authorization': token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({id}),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}user/endquiz`,
          requestOptions
        );
      const data = await response.json();

      if (data.status === 403) {
        Swal.fire({
          title: `¡Ha ocurrido un error al procesar la información`,
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


      } else {
         window.location.reload();
      }



    }


  return (
    <Container>
      {/* <h2 className="c-white">Felicitaciones {vote.user.nombre}</h2> */}
      <h3 className="c-white">{`¡${user.user.nombre} SE NOTA QUE ERES UN GRAN HINCHA!`}</h3>
      <p className="c-white">
        Gracias por Participar en EL JUGADOR CLARO. Si eres uno de los ganadores, nos contactaremos contigo el 1 de abril.
      </p>
      <p></p>
      <Button onClick={() => saveUserQuiz(user.user.id)} className="btn btn-white">
        Salir
      </Button>
    </Container>
  );
}

export default Terminado;

const Container = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  & h2 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 1%;
  }
  & h3 {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 2%;
    max-width: 600px;
    margin:0 auto;
  }
  & p {
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 4%;
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
    padding-top:2%;
  }
`;

const Button = styled.button`
  padding: 1.5% 2% !important;
  min-width: 150px;
  margin: 10px;
`;