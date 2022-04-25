
import  Image from 'next/image';
import styled  from 'styled-components';


const ChileClaroLogos = () => {
    return (
       <Container>
            <ImageBox>
          <Image
            src="/img/chileclarologos.png"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt="el-jugador-claro"
            quality={100} />
        </ImageBox>
       </Container>
    )
}

export default ChileClaroLogos;

const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
padding:3%;
`


const ImageBox = styled.div`
position:relative;
overflow:hidden;
max-width:200px;
width:300px;
height:100%;
`
