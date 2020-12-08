import React from "react";

import Container from "./../../components/Container";

import * as S from "./styled";

export default function Footer() {
  return (
    <Container>
      <S.IconsContainer>
        <S.LineOne>
          <S.Icon>
            <S.Facilidade />
            <S.Description>
              Facilidade
              <br /> de compra
            </S.Description>
          </S.Icon>
          <S.Icon>
            <S.Quantidade />
            <S.Description>
              Quantidade
              <br /> não limitada
            </S.Description>
          </S.Icon>
        </S.LineOne>
        <S.LineOne>
          <S.Icon>
            <S.Frete />
            <S.Description>
              Frete
              <br /> grátis
            </S.Description>
          </S.Icon>
          <S.Icon>
            <S.Agilidade />
            <S.Description>Agilidade</S.Description>
          </S.Icon>
          <S.Icon>
            <S.Comodidade />
            <S.Description>Comodidade</S.Description>
          </S.Icon>
        </S.LineOne>
      </S.IconsContainer>
    </Container>
  );
}
