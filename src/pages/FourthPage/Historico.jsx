import React from 'react'
import HeaderTop from '../../components/Header/HeaderTop'
import MenuMain from '../../components/Menu/MenuMain'
import { ContainerMain, Title } from './style'

export default function Historico() {
  return (
    <>
      <HeaderTop />
      <ContainerMain>
        <Title>
          <h1>Histórico</h1>
        </Title>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </ContainerMain>

      <MenuMain />
    </>
  )
}

