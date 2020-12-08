import styled from 'styled-components';

import ImgFacilidade from './../../assets/images/icons/icon-facilidade.png';
import ImgQuantidade from './../../assets/images/icons/icon-quantidade.png';
import ImgFrete from './../../assets/images/icons/icon-frete-gratis.png';
import ImgAgilidade from './../../assets/images/icons/icon-agilidade.png';
import ImgComodidade from './../../assets/images/icons/icon-comodidade.png';

export const IconsContainer = styled.div`
  margin: 50px 0;
  padding: 0 3rem;
`;

export const LineOne = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

export const Facilidade =  styled.img.attrs({ src: ImgFacilidade, alt: "Icone Facilidade"})`
  width: 60%;
`;

export const Quantidade =  styled.img.attrs({ src: ImgQuantidade, alt: "Icone Quantidade"})`
  width: 60%;
`;

export const Frete =  styled.img.attrs({ src: ImgFrete, alt: "Icone Frete"})`
  width: 60%;
`;

export const Agilidade =  styled.img.attrs({ src: ImgAgilidade, alt: "Icone Agilidade"})`
  width: 60%;
`;

export const Comodidade =  styled.img.attrs({ src: ImgComodidade, alt: "Icone Comodidade"})`
  width: 60%;
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
  color: var(--color-grey);
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
`;