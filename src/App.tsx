import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { ModalContent } from './components/ModalContent';
import GlobalStyle from './global/styles'

function App() {
  const [openModal, setOpenModal] = useState(false)

  function abrirModal() {
    setOpenModal(true)
  }

  function fecharModal() {
    setOpenModal(false)
  }
 
  return (
    <>
      <Header 
        abrirModal={abrirModal}
      />
      <Dashboard />
      <ModalContent
        modalAberto={openModal}
        onRequestClose={fecharModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
