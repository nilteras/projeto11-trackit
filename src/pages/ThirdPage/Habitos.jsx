import React from 'react'
import HeaderTop from './../../components/Header/HeaderTop'
import MenuMain from './../../components/Menu/MenuMain'
import { ContainerMain, Add, Title, NewHabit, Days, DaysDiv, ButtonDiv } from './style'

export default function Habitos() {
  return (
    <>
      <HeaderTop />
      <ContainerMain>
        <Title>
          <h1>Meus Hábitos</h1>
          <Add data-test="habit-create-btn">+</Add>
        </Title>
        <NewHabit data-test="habit-create-container">
          <input data-test="habit-name-input" type='text' placeholder='nome do hábito'></input>
          <DaysDiv>
            <Days data-test="habit-day" >D</Days>
            <Days>S</Days>
            <Days>T</Days>
            <Days>Q</Days>
            <Days>Q</Days>
            <Days>S</Days>
            <Days>S</Days>
          </DaysDiv>
          <ButtonDiv>
            <div data-test="habit-create-cancel-btn" >Cancelar</div>
            <button data-test="habit-create-save-btn">Salvar </button>
          </ButtonDiv>
        </NewHabit>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>


      </ContainerMain>


      <MenuMain />

    </>
  )
}

