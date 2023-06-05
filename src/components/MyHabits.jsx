import React, { useContext, useState } from 'react'
import AuthorizationContext from '../context/AuthorizationContext'
import DaysButtons from './DaysButtons'
import axios from 'axios'
import { HabitosDivList, HabitosTextList } from './../pages/SecondPage/style'
import { DaysDiv } from './../pages/ThirdPage/style'
import dump from './../assets/dump.svg'

export function MyHabits({ setAdd }) {

  const [habitsMade, setHabitsMade] = useState(undefined)
  const [token] = useContext(AuthorizationContext)
  const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  function refreshHabits() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const promise = axios.get(URL,
      {
        headers:
          { Authorization: `Bearer ${token}` }
      })
    promise.then(res => setHabitsMade(res.data))

    promise.catch(err => console.log(err.response.data))
  }

  refreshHabits();

  function deleteHabit(idHabit) {
    if (window.confirm("Você tem certeza que quer excluir esse hábito?")) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}`
      const promise = axios.delete(URL, { headers: { Authorization: `Bearer ${token}` } })
      promise.then(res => {
        console.log(res.data, "deu certo!")
        refreshHabits()
      }
      )
      promise.catch(err => console.log(err.response.data))
    }
  }


  if (habitsMade === undefined) {
    return (
      <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
    )
  } else {

    return (
      <>
        {habitsMade.map((h, i) => (
          <HabitosDivList data-test="habit-container" key={h.id}>
            <HabitosTextList key={i}>
              <h1 data-test="habit-name"> {h.name}</h1>
              <img src={dump} alt="trash" data-test="habit-delete-btn" onClick={() => deleteHabit(h.id)} />
            </HabitosTextList>

            <DaysDiv >
              {weekdays.map((d, i) => (
                <DaysButtons
                  data-test="habit-day"
                  isSelected={h.days.some((s) => s === i)}
                  key={i}
                  d={d}
                  index={i}
                />
              ))}

            </DaysDiv>

          </HabitosDivList>
        ))}
      </>
    )
  }
}

export default MyHabits;