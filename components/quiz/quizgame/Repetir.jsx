import React from 'react';
import styled  from 'styled-components';
import { useUser } from '../../../context/userContext';


const Repetir = ({ resetGame }) => {
  const { user, SetUser } = useUser();





  return (
    <Container>
      {/* <h2 className="c-white">Felicitaciones {vote.user.nombre}</h2> */}
      <h3 className="c-white">{`¡hey ${user.user.nombre}!`}</h3>
      <p className="c-white">
        No has contestado correctamente todas las perguntas, pero no te
        desanimes. Puedes volver a jugar la trivia
      </p>
      <p></p>
      <Button onClick={() => resetGame()} className="btn btn-white">
        Volver a intentar
      </Button>
    </Container>
  );
};

export default Repetir;

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
  }
  & p {
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 4%;
    max-width:600px;
    text-align:center;
    margin:0 auto;
  }
`;

const Button = styled.button`
  padding: 1.5% 2% !important;
  min-width: 150px;
  margin: 10px;
`;