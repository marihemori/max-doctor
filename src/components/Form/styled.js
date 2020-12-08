import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 2.3rem;
  margin-top: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 1.5rem 0;
  border-bottom: 2px solid var(--color-medium-purple);
`;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: 400;
  margin-right: 20px;
  color: var(--color-grey);
`;

export const Input = styled.input`
  border: none;
  background: none;
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-light-grey);
  outline: none;
`;

export const Select = styled.select`
  border: none;
  background: none;
  font-size: 2rem;
  color: var(--color-light-grey);
  outline: none;
  width: 100%;
`;

export const Disclaimer = styled.p`
  color: var(--color-purple);
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-top: 20px;
  padding: 0 3rem;
  font-weight: 450;
  text-align: center;
`;