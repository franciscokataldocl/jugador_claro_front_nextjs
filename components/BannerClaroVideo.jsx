
import Image  from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';


const BannerClaroVideo = () => {
    return (
        <Container>
          <Col>
          <ImageBox>
                <Link href="https://www.clarovideo.com/chile/landing">
                    <a >
                    <Image
                    src="/img/clarovideo.png"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                    alt="el-jugador-claro"
                    quality={100} />
                    </a>
                </Link>
            </ImageBox>
          </Col>
           <Col>
           <ImageBox>
                <Image
                    src="/img/clarovideobg.jpg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt="el-jugador-claro"
                    quality={100} />
            </ImageBox>
            </Col>
        </Container>
    )
}

export default BannerClaroVideo;

const Container = styled.div`
  background: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 70%;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Col = styled.div`
  width: 50%;
  background: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    @media (max-width: 768px) {
        height:300px;

    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  & ${ImageBox} {
    width: 50%;
    @media (max-width: 768px) {
      width: 70%;
    }
  }
  &:nth-child(2) {
    & ${ImageBox} {
      width: 100%;
      overflow: hidden;

    }
  }
`;
