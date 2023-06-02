import React from 'react'
import { Menu, HojeDiv } from './StyleMenu'
import { Link } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar'


export default function MenuMain() {
 
  const porcentagem = 'Hoje';

  return (
    <Menu data-test="menu">

      <Link to={'/habitos'} data-test="habit-link">
        <p>Hábitos</p>
      </Link>

      <Link to={'/hoje'} data-test="today-link">
        <HojeDiv>
          <CircularProgressbar value={porcentagem} text='' />
        </HojeDiv>
      </Link>
      
      <Link to={'/historico'} data-test="history-link">
        <p>Histórico</p>
      </Link>
    </Menu>

  )
}

