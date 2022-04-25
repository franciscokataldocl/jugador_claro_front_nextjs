import Image from "next/image";
import styled from "styled-components"
import CounterBar from './CounterBar';
import { motion } from 'framer-motion';




const Hero = () => {


  const background = '/img/hero_bg.jpg';



  return (
    <Container style={{ backgroundImage: `url("${background}")` }}>
      <Content>
        <ImageBox
        as={motion.div}
        initial={{ y: "50%", opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: true }}
transition={{ delay:0, type: "spring", duration: 2 }}>
          <Image
            src="/img/logo_hero.png"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt="el-jugador-claro"
            quality={100} />
        </ImageBox>
        <ImageBox
        as={motion.div}
        initial={{ y: "50%", opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: true }}
transition={{ delay:.5, type: "spring", duration: 2 }}>
          <Image
            src="/img/pais_hero.png"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt="el-jugador-claro"
            quality={100} />
        </ImageBox>
        <ImageBox
        as={motion.div}
        initial={{ y: "50%", opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: true }}
transition={{ delay:1, type: "spring", duration: 2 }}>
          <Image
            src="/img/phone_hero.png"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt="el-jugador-claro"
            quality={100} />
        </ImageBox>
      </Content>
      <CounterBar />
    </Container>
  )
}

export default Hero;

const Container = styled.div`
width:100%;
height:100%;
padding: 3% 0;
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position:center center;
  background-repeat:no-repeat;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
`

const Content = styled.div`
width:100%;
height:100%;
 display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 800px) {
    flex-direction:column;
  }
`
const ImageBox = styled.div`
position:relative;
overflow:hidden;
width:350px;
height:100%;
padding:40px;
@media (max-width: 800px) {
    padding:0px;
    width:200px;
  }
&:nth-child(2){
  width:400px;
  @media (max-width: 800px) {
    padding:0px;
    width:250px;
  }

}
&:nth-child(3){
  width:400px;
  @media (max-width: 800px) {
    display:none;
  }

}
`
