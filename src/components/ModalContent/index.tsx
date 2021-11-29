import React, { useState } from 'react'
import Modal from 'react-modal'

import { AiOutlineClose } from 'react-icons/ai'

import { Formulario } from './styles'
import { api } from '../../services/api';

interface ModalParams {
  modalAberto: boolean
  onRequestClose: () => void
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function ModalContent({ modalAberto, onRequestClose}: ModalParams) {
  const [ nomeevento, setNomeEvento ] = useState('')
  const [ local, setLocal ] = useState('')
  const [ diaSemana, setDiaSemana ] = useState('')
  const [ horario, setHorario ] = useState('')
  
  async function cadastrarEvento(event: any) {
    event.preventDefault()

    await api.post('/events', {
      nomeevento,
      local,
      diasemana: diaSemana,
      horario
    })

    window.location.href = '/'
  }

  return (
    <Modal
      isOpen={modalAberto}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <Formulario onSubmit={cadastrarEvento}>
        <AiOutlineClose size={20} onClick={onRequestClose} />

        <h1>Cadastrar Evento</h1>
        <input
            value={nomeevento}
            placeholder="Nome"
            onChange={(e) => setNomeEvento(e.target.value)}
            required
          />

          <input
            value={local}
            placeholder="Local"
            onChange={(e) => setLocal(e.target.value)}
            required
          />

          <input
            value={diaSemana}
            placeholder="Dia"
            onChange={(e) => setDiaSemana(e.target.value)}
            required 
          />

          <input
            value={horario}
            placeholder="Horário"
            onChange={(e) => setHorario(e.target.value)}
            required
          />

        <button 
          type="submit"
        >
          Cadastrar
        </button>
      </Formulario>

    </Modal>
  )
}