import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 90vw;
  max-width: 1600px;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  border-radius: 0.4rem;

  h2 {
    font-weight: 400;
  }
`;
export const ProdContainerRef = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
`;
