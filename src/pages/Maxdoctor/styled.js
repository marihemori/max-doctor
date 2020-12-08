import styled from 'styled-components';
import ImgClock from './../../assets/images/clock.png';

export const ImageClock = styled.img.attrs({ src: ImgClock, alt: "Relógio"})`
  width: 35%;
  z-index: 1;
  opacity: 5%;
  position: absolute;
  left: -50px;
  
  @media (max-width: 768px) {
    width: 65%;
  }

  @media (min-width: 1000px) {
    width: 30%;
    left: -95px;
  }
`;

export const ContentContainer = styled.div`
  z-index: 2;
  top: 0;
  overflow-x: none;
`;