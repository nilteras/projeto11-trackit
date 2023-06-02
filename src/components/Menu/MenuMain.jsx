import React from 'react'
import { Menu, HojeDiv } from './StyleMenu'
import { Link } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar'


export default function MenuMain() {
 
  const porcentagem = 55;

  return (
    <Menu>

      <Link to={'/habitos'}>
        <p>Hábitos</p>
      </Link>

      <Link to={'/hoje'}>
        <HojeDiv>
          <CircularProgressbar value={porcentagem} text={`${porcentagem}%`} />
        </HojeDiv>
      </Link>
      
      <Link to={'/historico'}>
        <p>Histórico</p>
      </Link>
    </Menu>

  )
}

