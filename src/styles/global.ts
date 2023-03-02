import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

:root{
  --white: #ffffff;
  --gray-200:#737174;
  --gray-500:#4F4E50;
  --gray-600:#363536;
  --black: #0A070B;
  
  /* --blue-100:#D5EDFE;sssss
  --blue-200:#81BFFB;
  --blue-300:#7BB4FF;
  --blue-400:#2E82F2;
  --blue-800:#263660; */

  /* --bg: #F6FBFE; */

  --success: #1EBC99;
  --information:#1884F7;
  --warning: #F9CC0D;
  --important #f41b3b;

}

html{
    font-size: 62.5%;
}

html,body{
  background: var(--black);
  color: var(--white);

  -webkit-font-smoothing: antialiased;

  width:100%;
  /* height:100vh; */
}

body, form, input, textarea, select, button {
    font: 700 1rem "Open+Sans", sans-serif;
}

a, button, img{
    cursor: pointer;
}

a{
    color: inherit; // poe a cor do link a mesma do elemento pai
    text-decoration:none; //tirar o underline dos links
}

`
