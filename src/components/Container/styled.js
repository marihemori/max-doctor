import styled from 'styled-components';

export const ContainerPage = styled.div`
  max-width: 768px;
  margin: 0 auto;
  overflow-x: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1000px) {
    margin: 0 auto;
    text-align: center;
    align-items: center;
    overflow-x: none;
  }
`;