import styled from 'styled-components';
import ImgClock from './../../assets/images/clock.png';

const ImageClock = styled.img.attrs({ src: ImgClock, alt: "Relógio"})`
  width: 35%;

  @media (max-width: 768px) {
    width: 65%;
  }
`;

export default ImageClock;