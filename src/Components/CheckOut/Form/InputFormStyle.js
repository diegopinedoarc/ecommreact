import styled from "styled-components";
export const Input = styled.input`
  width: 16rem;
  height: 2rem;
  border-radius: 0.4rem;
  outline: none;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
`;

export const InputLabel = styled.label`
  margin-top: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
