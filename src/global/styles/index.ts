import { createGlobalStyle } from 'styled-components'
import { configs } from '../../configs'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: ${configs.fontes.roboto};
    outline: none;
  }

  html, body {
    background: ${configs.cores.background_primary};
  }

  button {
    border: none;
  }

  body {
    width: 60%;
    margin: 0 auto;
  }
`