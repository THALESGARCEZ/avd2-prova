import React, { useEffect, useState} from "react";
import { api } from "../../services/api";

import { BiTrashAlt } from 'react-icons/bi'
import { FcLike, FcDislike } from 'react-icons/fc'

import { DashboardConteudo, Publicacao } from './styles'

interface Publicacao {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number | null;
  dislike: number | null;
  created_at: Date;
  updated_at: Date;
}

export function Dashboard() {
  const [publicacoes, setPublicacoes] = useState<Publicacao[]>([])

  useEffect(() => {
    carregarPublicacoes()
  }, [])

  async function carregarPublicacoes() {
    const response = await api.get('/events')
    setPublicacoes(response.data)
  }

  async function apagarPublicacao(id: string) {
    await api.delete(`/events/${id}`)

    const publicacoesFiltradas = publicacoes.filter(item => item.id !== id)
    setPublicacoes(publicacoesFiltradas)
  }

  async function like(id: string) {
    const response = await api.post(`/events/like/${id}`)
    const publicacoesAtualizadas = publicacoes.map(item => {
      if (item.id === id) {
        item.like = response.data.like
      }

      return item;
    })

    setPublicacoes(publicacoesAtualizadas)
  }

  async function dislike(id: string) {
    const response = await api.post(`/events/dislike/${id}`)
    const publicacoesAtualizadas = publicacoes.map(item => {
      if (item.id === id) {
        item.dislike = response.data.dislike
      }

      return item;
    })

    setPublicacoes(publicacoesAtualizadas)
  }

  return (
    <DashboardConteudo>
      <h1>Eventos</h1>

      <section>
        <p>Nome</p>
        <p>Local</p>
        <p>Dia da Semana</p>
        <p>Horário</p>
        <p>Apagar</p>
        <p>Likes</p>
        <p>Dislikes</p>
      </section>
      {
        publicacoes.map(item => (
          <Publicacao key={item.id}>

            <p>{item.nomeevento}</p>
            <p>{item.local}</p>
            <p>{item.diasemana}</p>
            <p>{item.horario}</p>
            
            <p>
              <button type="button" onClick={() => apagarPublicacao(item.id)}>
                <BiTrashAlt size={20} style={{ color: 'red' }} />
              </button>
            </p>
            <p>
              <button type="button" onClick={() => like(item.id)}>
                {item.like}
                <FcLike size={20} />
              </button>
            </p>
            <p>
              <button type="button" onClick={() => dislike(item.id)}>
                {item.dislike}
                <FcDislike size={20} />
              </button>
            </p>

            
            
          </Publicacao>
        ))
      }
      
    </DashboardConteudo>
  )
}