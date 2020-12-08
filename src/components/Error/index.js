import React from 'react';

import * as S from './styled';

export default function Error({ message }) {
  return (
    <S.ErrorMessage>{message}</S.ErrorMessage>
  )
}