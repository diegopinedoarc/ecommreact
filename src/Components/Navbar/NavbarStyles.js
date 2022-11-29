import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: var(--azul);
    position: fixed;
    top: 8rem;

    right: ${(props) => (props.open ? "0" : "-110%")};
    width: 80%;
    height: 90vh;
    transition: right 0.3s linear;
    z-index: 5345345;
    border-radius: 0.4rem;
    gap: 2rem;
    background-color: white;
    padding: 1rem;

    a {
      /* padding: 0.5rem 0.8rem; */
      color: var(--azul);
      text-decoration: none;
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: auto;
    justify-content: center;
    gap: 4rem;
    width: 50%;

    font-size: 1.2rem;
    a {
      padding: 0.5rem 0.8rem;
      color: rgb(234, 226, 183);
      text-decoration: none;
    }
  }
`;
