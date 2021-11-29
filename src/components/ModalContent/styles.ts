import styled from 'styled-components'

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;

  position: relative;

  h1 {
    margin: 24px 0;
    text-align: center;
  }

  input {
    font-size: 16px;
    padding: 10px;
    width: 400px;
    margin: 8px 0;
    border-radius: 4px;
    border: 1px solid #BB86FC;
  }

  button {
    padding: 10px;
    border-radius: 4px;
    background: #BB86FC;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`