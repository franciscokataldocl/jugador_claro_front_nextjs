import styled from "styled-components";
import Image from "next/image";
import ButtonVota from './ButtonVota';
import Percent from "./Percent";
import { useShowHide } from "../../context/ShowHideContext";







const PlayerCard = ({ id, nombre, porcentaje, image }) => {


    const { show } = useShowHide();







    return (
      <Card className="shadow-1 aniamte-2s">
        <ImageBox className="shadow-1 ">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/img/jugadores/${image}`}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt="jugadorclaro"
            quality={40}
          ></Image>
        </ImageBox>
        <Nombre>{nombre}</Nombre>

        {/* El 1% de 4 = 4*(1/100) = 4*0.01 = 0.04 */}
        {!show.porcentajeVotos ? (
          <ButtonVota playerId={id} playerName={nombre} />
        ) : (
          <Percent porcentaje={porcentaje} />
        )}
      </Card>
    );
};

export default PlayerCard;

const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  margin: 10px;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  background:white;
  position:relative;
  overflow: hidden;
  &:hover {
    transform: scale(1.2);
    z-index:1;
  }
`;

const ImageBox = styled.div`
position:relative;
overflow:hidden;
border-radius:100px;
width:70px;
height:70px;
margin-top:3%;
`
const Nombre = styled.h3`
  color: var(--black);
  font-size: 1.2rem;
  margin: 0 20px;
  max-width: 100px;
  margin-top: 3%;
`;
