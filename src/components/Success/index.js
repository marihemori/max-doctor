import React from 'react';

import * as S from './styled';

export default function Success({ message }) {
  return (
    <S.SuccessMessage>{message}</S.SuccessMessage>
  )
}