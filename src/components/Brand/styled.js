import styled from 'styled-components';
import ImgLogo from './../../assets/images/logo-maxidoctor.png';

export const ImageLogo = styled.img.attrs({ src: ImgLogo, alt: "Logo MaxDoctor"})`
  width: 35%;
  margin-top: 30px;
  align-self: center;

  @media (max-width: 768px) {
    width: 55%;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  margin: 25px 0 30px 0;
  text-align: center;
  align-items: center;
  color: var(--color-purple);

  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`;