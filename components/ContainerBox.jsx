import styled from "styled-components";
import Premio from './Premio';




const ContainerBox = ({ regiones }) => {


  return (
    <Container>
      <Content>
      <Premio regiones={regiones} />
      </Content>
    </Container>
  );
}

export default ContainerBox;



const Container = styled.div`
width:100%;
height:100%;
padding:5%;
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


`
