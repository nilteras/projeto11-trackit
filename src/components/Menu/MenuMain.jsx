import React from 'react'
import { Menu, HojeDiv } from './StyleMenu'
import { Link } from 'react-router-dom'

export default function MenuMain() {
  return (
    <Menu>

      <Link to={'/habitos'}>
        <p>Hábitos</p>
      </Link>

      <Link to={'/hoje'}>
        <HojeDiv>Hoje</HojeDiv>
      </Link>
      
      <Link to={'/historico'}>
        <p>Histórico</p>
      </Link>
    </Menu>

  )
}

