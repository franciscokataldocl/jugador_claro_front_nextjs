import styled from "styled-components";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";
import React from 'react';
import { useEstadoPartido } from "../../context/estadoPartidoContext";
import { useShowHide } from "../../context/ShowHideContext";








const FormContainer = ({ regiones }) => {
  //obtenemos el estado del partido (estadoPartido: false/true)
  //esto lo usamos para mostrar u ocultar el formulario
  const { estadoPartido } = useEstadoPartido();

  //importamos showhide para ver si mostrar u ocultar el formulario
  //eso por que si la persona se registro, deberá votar, sin ver el formulario
  const { show} = useShowHide();



  return (
    <AnimatePresence>
      {/* si el estado del partido es true mostramos el formulario de registro */}
      {estadoPartido.estadoPartido && show.formulario &&  (
        <Container
          className="shadow-1"
          as={motion.div}
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0, type: "spring", duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <Content>
            <Col>
              <ImageBoxLogo>
                <Image
                  src="/img/logo-black.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="el-jugador-claro-logo"
                  quality={100}
                />
              </ImageBoxLogo>
              <ImageBoxPremioMobile>
                <Image
                  src="/img/telefono-premio.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="el-jugador-claro-premio"
                  quality={100}
                />
              </ImageBoxPremioMobile>
              <h3>
                Vota por "El Jugador Claro" durante el partido de {""}
                <strong className="c-red">Chile</strong> vs{" "}
                <strong className="c-red">Uruguay</strong> y participa por un
                espectacular <strong className="c-red">Xiaomi 11T Pro</strong>
              </h3>
              <Form regiones={regiones} />
            </Col>
            <Col>
              <ImageBoxPremio>
                <Image
                  src="/img/telefono-premio.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="el-jugador-claro-premio"
                  quality={100}
                />
              </ImageBoxPremio>
            </Col>
          </Content>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default FormContainer;
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  max-width:1200px;
  margin:5% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: white;
  border-radius: 20px;
  @media (max-width: 768px) {
    margin-top: 10%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Col = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h3 {
    text-align: center;
    max-width: 500px;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ImageBoxLogo = styled.div`
  position: relative;
  width: 200px;
`;
const ImageBoxPremio = styled.div`
  position: relative;
  width: 400px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageBoxPremioMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: relative;
    width: 300px;
    margin: 50px 0;
  }
`;
