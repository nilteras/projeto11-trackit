import React from 'react'
import { Menu, HojeDiv } from './StyleMenu'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


export default function MenuMain() {
 
  const porcentagem = '55';

  return (
    <Menu data-test="menu">

      <Link to={'/habitos'} data-test="habit-link">
        <p>Hábitos</p>
      </Link>

      <Link to={'/hoje'} data-test="today-link">
        <HojeDiv>
          <CircularProgressbar 
          value={porcentagem} 
          text='Hoje'
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52b6ff",
            textColor: "#FFFFFF",
            pathColor: "#FFFFFF",
            trailColor: "transparent"
          })}
          />
        </HojeDiv>
      </Link>
      
      <Link to={'/historico'} data-test="history-link">
        <p>Histórico</p>
      </Link>
    </Menu>

  )
}

