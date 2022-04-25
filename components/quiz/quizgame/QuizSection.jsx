import React, { useState, useEffect } from "react";
import styled from "styled-components";
//import { useQuestions } from "../../../context/questionContext";
import "animate.css";
import { motion } from "framer-motion";
import Terminado from "./Terminado";
import { useQuiz } from "../../../context/quizContext";
import Repetir from "./Repetir";


const QuizSection = () => {
  //const { Questions, setQuestions } = useQuestions();
  const { quiz } = useQuiz();


  //estados de la trivia
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerSubmit = (isCorrect, e) => {
    //añadir estilos
    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    //añadir puntuacion
    if (isCorrect) {
      setPuntuacion(puntuacion + 1);
      console.log(`PUNTUACION: ${puntuacion}`);
      console.log(`TOTAL PREGUNTAS: ${quiz.length}`);
      //cambiar siguiente pregunta

      setTimeout(() => {
        //si es la ultima pregunta
        if (preguntaActual === quiz.length - 1) {
          setIsFinished(true);
        } else {
          setPreguntaActual(preguntaActual + 1);
        }
        const buttons = document.getElementsByClassName("btn");
        const buttonsArr = Array.from(buttons);

        buttonsArr.map((button) => {
          button.classList.remove("correct", "incorrect");
        });
      }, 2000);
    } else {
      setTimeout(() => {
        if (preguntaActual === quiz.length - 1) {
          setIsFinished(true);
        }
        setPuntuacion(puntuacion);
        console.log(`PUNTUACION 2: ${puntuacion}`);
        console.log(`TOTAL PREGUNTAS 2: ${quiz.length}`);
  setPreguntaActual(preguntaActual + 1);
  const buttons = document.getElementsByClassName("btn");
  const buttonsArr = Array.from(buttons);

  buttonsArr.map((button) => {
    button.classList.remove("correct", "incorrect");
  });

      },2000)

    }




  };

const resetGame = () => {
  setPreguntaActual(0);
  setPuntuacion(0);
  setIsFinished(false);
};

  return (
    <Container>
      {quiz.length > 0 && !isFinished ? (
        <>
          <Col>
            <h3 className="c-white">
              <span
                as={motion.span}
                initial={{ opacity: 0, y: 60, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 300 },
                }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
              >
                {preguntaActual + 1}
              </span>{" "}
              / {quiz.length}
            </h3>
            <h2
              as={motion.h2}
              className="c-white"
              initial={{ opacity: 0, y: 60, scale: 0.5 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 300 },
              }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
            >
              ¿{quiz[preguntaActual].titulo}?
            </h2>
          </Col>
          <Col>
            {quiz[preguntaActual].answers.map((answer, index) => (
              <Button
                as={motion.button}
                initial={{ opacity: 0, y: 60, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 300 },
                }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
                onClick={(e) => handleAnswerSubmit(answer.isCorrect, e)}
                key={index + answer}
                className="btn btn-white"
              >
                {answer.answer}
              </Button>
            ))}
          </Col>
        </>
      ) : (
        <>
          {/* si puntuacion es igual a al total de preguntas,
            significa que respondio todo correctamente, por lo que terminamos el quiz */}
          {puntuacion === quiz.length && <Terminado />}
          {puntuacion < quiz.length && <Repetir resetGame={resetGame} />}
        </>
      )}
    </Container>
  );
};

export default QuizSection;
const Container = styled.div`
  width: 100%;
  height: 70vh;
  background: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Col = styled.div`
  text-align: center;
  & h3 {
    font-size: 3rem;
    font-weight: 300;
    opacity: 0.6;
  }
  & h2 {
    font-size: 2rem;
    font-weight: 300;
  }
  &:nth-child(2) {
    margin-top: 5%;
    max-width: 500px;
  }
`;

const Button = styled.button`
  padding: 3% 5% !important;
  min-width: 150px;
;
  margin: 10px;
`;
