import React from 'react'
import { ContainerMain, Data, HabitosDiv, HabitosText, CheckDiv } from './style'
import HeaderTop from '../../components/Header/HeaderTop'
import MenuMain from '../../components/Menu/MenuMain'

export default function Hoje() {
  return (
    <>

      <HeaderTop />
        
      <ContainerMain>
        <Data>Segunda, 17/05</Data>
        <p>Nenhum hábito concluido ainda</p>


        <HabitosDiv>

          <HabitosText>
            <h1>Ler 1 capitulo de livro</h1>
            <p>Sequencia atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </HabitosText>

          <CheckDiv>
            check
          </CheckDiv>
        </HabitosDiv>

      </ContainerMain>


      <MenuMain />
    </>

  )
}

