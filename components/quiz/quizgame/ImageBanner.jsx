import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Image from 'next/image';




const ImageBanner = () => {

  const background = '/img/hero_bg.jpg';


  return (
    <Container style={{ backgroundImage: `url("${background}")` }}>
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
    </Container>
  );
}

export default ImageBanner;

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background: var(--red);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

  const LogoBox = styled.div`
    width: 50%;
    max-width: 300px;
  `;