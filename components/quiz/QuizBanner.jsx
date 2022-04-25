import React from 'react';
import Image  from "next/image";


import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

//context
import { useQuiz } from "../../context/quizContext";
import { useQuestions } from '../../context/questionContext';
import { useShowHide } from '../../context/ShowHideContext';






const QuizBanner = () => {
  //quiz context
  const { quiz, setQuiz } = useQuiz();

  const { show, setShow } = useShowHide();

  //vote context
  //const { vote, setVote } = useVoto();

  const closeModal = () => {
    setShow((prev) => ({
      ...prev,
      quizModal: false,
    }));
  }


  const background = "/img/quiz-bg.jpg";

  const handleQuizOpen = async () => {
   setShow((prev) => ({
     ...prev,
     quizModal: false,
     showQuiz: true,
   }));

     const getQuizQuestions = async () => {
       const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}questions`
       );
       const data = await response.json();
       setQuiz(data);
     };
     getQuizQuestions();

}


  // const handleQuizOpen = async () => {

  //   //enviamos la modificacion de que el usuario ya esta jugando el quiz
  //   //(ya presiono el boton participar)
  // const sendUserPlayed = async () => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(quiz),
  //   };

  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}user/played`,
  //     requestOptions
  //   );
  //   const data = await response.json();


  //   //datos del usuario al presionar el botón PARTICIPAR
  //   closeModal();








  // };
  // sendUserPlayed();

  //   const getQuestions = async () => {
  //  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}questions`);
  //   const data = await response.json();

  //     setQuestions(data);

  //   }
  //   getQuestions();
  // }

    return (
      <>
        {show.quizModal && !show.showQuiz && (
          <AnimatePresence>
            <Container
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: 2, type: "spring", duration: 1.3 }}
            >
              <Content>
                {/* col image */}
                <Col style={{ backgroundImage: `url("${background}")` }}>
                  <LogoBox
                    as={motion.div}
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0, type: "spring", duration: 2 }}
                  >
                    <Image
                      src="/img/quiz-logo.png"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="contain"
                      alt="el gran incha"
                      quality={100}
                    />
                  </LogoBox>
                </Col>

                {/* col quiz */}
                <Col>
                  <ImageBoxClose
                    onClick={closeModal}
                    as={motion.div}
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0, type: "spring", duration: 2 }}
                  >
                    <Image
                      src="/img/close.svg"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="contain"
                      alt="cerrar-quiz"
                      quality={100}
                    />
                  </ImageBoxClose>

                  <QuizIntroContainer>
                    <IntroBox
                      as={motion.div}
                      initial={{ y: "50%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0, type: "spring", duration: 2 }}
                    >
                      <Image
                        src="/img/quiz-intro.png"
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="contain"
                        alt="el gran incha"
                        quality={100}
                      />
                    </IntroBox>
                    <button onClick={handleQuizOpen} className="btn btn-white aniamte-2s">
                      PARTICIPAR
                    </button>
                  </QuizIntroContainer>
                </Col>
              </Content>
            </Container>
          </AnimatePresence>
        )}

      </>
    );
  }

  export default QuizBanner;


  const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--red);
  z-index:100;
`

  const Content = styled.div`
display:flex;
justify-content: center;
align-items: center;
`;


  const Col = styled.div`
  width: 50%;
  height: 100vh;
  background: var(--red);
  position: relative;
  overflow: hidden;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(2) {
    background: var(--red);
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

  const ImageBoxClose = styled.div`
width:30px;
top:3%;
right:3%;
position:absolute;
&:hover{
  cursor:pointer;
}
`

  const LogoBox = styled.div`
width:50%;
max-width:300px;

`

  const QuizIntroContainer = styled.div`
  width: 80%;
  max-width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
  const IntroBox = styled.div`
width:100%;
max-width:600px;
height:auto;
`
