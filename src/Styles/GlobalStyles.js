import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --blancotransp: rgba(250,250,250,0.2);
    --azultransp: rgba(0,0,110,0.2);
    --fondocarta: rgba(250,250,250,0.9);
    --azul: rgb(0, 48, 73);
    --rojo: rgb(214, 40, 40);
    --naranja: rgb(247, 127, 0);
    --amarillo: rgb(252, 191, 73);
    --blanco: rgb(234, 226, 183);
    --fontroboto:  'Roboto', sans-serif;
    --fontlato: 'Lato', sans-serif;
    --fontgrande: 'Permanent Marker', cursive;
}
body {
    background-color: #000000;
    color: wheat;
    font-family: var(--fontroboto)
  
}
a {
    text-decoration: none;
    color: wheat;
}
`;
