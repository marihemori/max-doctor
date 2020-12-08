import React from "react";

import Container from '../../components/Container/index';
import Form from '../../components/Form';
import Footer from "../../components/Footer";

import * as S from './styled';

function MaxDoctor() {
  return (
    <>
    <S.ImageClock />
    <S.ContentContainer>
      <Container>
        <Form />
        <Footer />
      </Container>
    </S.ContentContainer>
    </>
    );
  }

export default MaxDoctor;
