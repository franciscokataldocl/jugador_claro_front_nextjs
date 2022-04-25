import React from 'react';
import styled from 'styled-components';
import { useShowHide } from '../../../context/ShowHideContext';
import ImageBanner from './ImageBanner';
import QuizSection from './QuizSection';





const Index = () => {
 const { show, setShow } = useShowHide();


  return (
    <>
      {show.showQuiz && (
        <Container>
          <ImageBanner />
          <QuizSection />
        </Container>
      )}
    </>
  );
}

export default Index;

const Container = styled.div`
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
background:green;
z-index:10000;

`