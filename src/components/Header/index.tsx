import React from "react";
import { AiOutlinePlus } from 'react-icons/ai'
import { HeaderContainer } from "./styles";
import InstagramLogo from '../../assets/instagram.png'

interface HeaderParams {
  abrirModal: () => void
}

export function Header({ abrirModal }: HeaderParams) {

  return (
    <HeaderContainer>
      <img src={InstagramLogo} alt="Logo" />
      <AiOutlinePlus size={40} onClick={abrirModal} />
    </HeaderContainer>
  );
}