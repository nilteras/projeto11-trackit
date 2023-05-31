import React from 'react'
import { Header, ImagemLogin, Titulo, ContainerMain, Data, HabitosDiv, HabitosText, CheckDiv , Menu, HojeDiv} from './style'

export default function Hoje() {
  return (
    <>

      <Header>
        <Titulo>TrackIt</Titulo>
        <ImagemLogin>
          <img src='https://www.globalempregos.com.br/wp-content/uploads/2022/01/habitos.jpg' alt='image' />
        </ImagemLogin>
      </Header>

      <ContainerMain>
        <Data><h1>Segunda, 17/05</h1></Data>
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


      <Menu>
        <p>Hábitos</p>
        <HojeDiv>Hoje</HojeDiv>
        <p>Histórico</p>
      </Menu>

    </>

  )
}

