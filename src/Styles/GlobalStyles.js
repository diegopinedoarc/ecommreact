import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --blancotransp: rgba(250,250,250,0.2);
    --azultransp: rgba(0,0,110,0.2);
    --fondocarta: rgba(250,250,250,0.9);
    --fontroboto:  'Roboto', sans-serif;
    --fontlato: 'Lato', sans-serif;
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
