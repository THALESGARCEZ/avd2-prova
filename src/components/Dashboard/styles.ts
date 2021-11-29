import styled from 'styled-components'
import { configs } from '../../configs'

export const DashboardConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  h1 {
    color: ${configs.cores.white};
    margin: 32px 0;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    p {
      min-width: 150px;
      color: ${configs.cores.white};
    }

    margin-bottom: 64px;
  }
`

export const Publicacao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  margin: 16px 0;

  h2, p {
    color: ${configs.cores.white}
  }
  
  p {
    min-width: 150px;
  }

  p, button {
    font-size: 16px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4px;
    border-radius: 4px;
    min-width: 50px;
    background: transparent;
    color: ${configs.cores.white};

    svg {
      margin-left: 8px;
    }
  }

`