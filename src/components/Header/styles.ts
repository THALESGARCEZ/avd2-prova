import styled from 'styled-components'
import { configs } from '../../configs'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  width: 100%;
  background: ${configs.cores.background_secondary};

  img {
    width: 40px;
    height: 40px;
  }

  svg {
    color: ${configs.cores.white};
  }
`