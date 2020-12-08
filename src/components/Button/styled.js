import styled from 'styled-components';

export const ButtonIn = styled.button`
  font-size: 17px;
  width: 100%;
  font-weight:400;
  margin: 19px 0 0;
  padding: 10px 50px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-white);
  background: var(--color-medium-purple);
  border: 1px solid var(--color-medium-purple);
  border-radius: 5px;
  outline: var(--color-medium-purple);

  :hover {
    background-color: var(--color-light-purple);
    border: 1px solid var(--color-light-purple);
    cursor: pointer;
  }
`;