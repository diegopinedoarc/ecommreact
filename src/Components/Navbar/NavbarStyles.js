import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: rgb(234, 226, 183);
  position: fixed;
  top: 10vh;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;
  z-index: 5345345;
  border-radius: 0.4rem;
  gap: 2rem;

  a {
    padding: 0.5rem 0.8rem;
    color: rgb(0, 48, 73);
    text-decoration: none;
  }

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    gap: 4rem;

    font-size: 1.2rem;
    a {
      padding: 0.5rem 0.8rem;
      color: rgb(234, 226, 183);
      text-decoration: none;
    }
  }
`;
