import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/index';
import Button from '../../components/Button/index';

import * as S from './styled';

function Home() {
    return (
      <Container>
        <S.ContentContainer>
          <h1>Avaliação de Mariana</h1>
          <Link to="/maxdoctor"><Button>Acessar MaxDoctor</Button></Link>
        </S.ContentContainer>
      </Container>
    );
}

export default Home;