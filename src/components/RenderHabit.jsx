import React, { useEffect, useState } from 'react'
import { HabitosText, HabitosDiv } from '../pages/SecondPage/style'
import { CheckDiv } from '../pages/SecondPage/style'
import Check from './../assets/check.svg'

export default function RenderHabit({ habit, changeCheck, isSelected }) {

  const [status, setStatus] = useState(habit.done)
  const [conclued, setConclued] = useState([])

  console.log(conclued)

  useEffect(() => {
    if (isSelected) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }, [isSelected])

  return (
    
      <HabitosDiv data-test="today-habit-container">
        <HabitosText>
          <h1 data-test="today-habit-name"> {habit.name}</h1>
          <p data-test="today-habit-sequence">Sequencia atual: {habit.currentSequence}</p>
          <p data-test="today-habit-record">Seu recorde: {habit.highestSequence}</p>
        </HabitosText>

        <CheckDiv onClick={() => changeCheck(habit)} status={status}>
          <img src={Check} alt="check" data-test="today-habit-check-btn" />
        </CheckDiv>
      </HabitosDiv>
   
  )
}

