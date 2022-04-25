import styled from "styled-components";
import { motion } from "framer-motion";
import Counter from "./counter/Counter";

const CounterBar = () => {
  return (
    <Container
      className="bg-red shadow-1"
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.2, type: "spring", duration: 2 }}
    >
      <Content>
        <Col>
          <List>
            <li className="c-white">CHILE</li>
            <li className="c-white">vs</li>
            <li className="c-white">URUGUAY</li>
          </List>
        </Col>
        <Col>
          <CounterContainer>
            <Counter />
          </CounterContainer>
        </Col>
      </Content>
    </Container>
  );
};

export default CounterBar;

const Container = styled.div`
  width: 60%;
  height: auto;
  max-width: 700px;
  margin-top: -5%;
  padding: 3% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  z-index: 10;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3%;
  }
`;
const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    min-height: 50px;
    border-bottom: white solid 1px;
  }
  &:nth-child(2) {
    border-left: white solid 1px;
    @media (max-width: 768px) {
      border-left: none;
      border-bottom: none;
    }
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & li {
    font-size: 20px;
    font-weight: var(--medium);
    &:nth-child(2) {
      border-radius: 100px;
      background: var(--black);
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3%;
    }
  }
`;

const CounterContainer = styled.div`
  & h3 {
    text-align: center;
    font-size: 0.9rem;
    font-weight: var(--light);
  }
`;
