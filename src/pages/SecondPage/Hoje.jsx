import React from 'react'
import { ContainerMain, Data, HabitosDiv, HabitosText, CheckDiv } from './style'
import HeaderTop from '../../components/Header/HeaderTop'
import MenuMain from '../../components/Menu/MenuMain'
import Check from './../../assets/check.svg'

export default function Hoje() {
  return (
    <>

      <HeaderTop />
        
      <ContainerMain>
        <Data data-test="today" >Segunda, 17/05</Data>
        <p data-test="today-counter">Nenhum hábito concluido ainda</p>


        <HabitosDiv data-test="today-habit-container">

          <HabitosText>
            <h1>Ler 1 capitulo de livro</h1>
            <p>Sequencia atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </HabitosText>

          <CheckDiv>
            <img src={Check} />
          </CheckDiv>
        </HabitosDiv>

      </ContainerMain>


      <MenuMain />
    </>

  )
}

