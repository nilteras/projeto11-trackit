import React, { useContext, useEffect, useState } from 'react'
import { ContainerMain, Data, HabitosDiv, HabitosText, CheckDiv } from './style'
import HeaderTop from '../../components/Header/HeaderTop'
import MenuMain from '../../components/Menu/MenuMain'

import AuthorizationContext from '../../context/AuthorizationContext'
import dayjs from 'dayjs'
import axios from 'axios'
import RenderHabit from '../../components/RenderHabit'


export default function Hoje() {

  let days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
  const [todayHabit, setTodayHabit] = useState(undefined)
  const [token] = useContext(AuthorizationContext)
  let day = dayjs().day()
  const [conclued, setConclued] = useState([])


  useEffect(() => {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const promise = axios.get(URL,
      {
        headers:
          { Authorization: `Bearer ${token}` }
      })
    promise.then(res => {
      console.log(res.data)
      setTodayHabit(res.data)
    })

    promise.catch(err => console.log(err.response.data))

  }, [])

  if (todayHabit === undefined) {
    return (
      <ContainerMain>
        Carregando...
      </ContainerMain>
    )
  }

  function changeCheck(habit){
    console.log(conclued)
   const isSelected = conclued.some((s) => s === habit)
    if (isSelected) {
                const newList = conclued.filter((s) => s !== habit)
                setConclued(newList)
                
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`
        const promise = axios.post(URL, {}, {headers: {Authorization : `Bearer ${token}`}})
        promise.then(res => {
            console.log(res.data)
            })     
    
        promise.catch(err => {
            alert(err.response.data.message)
            })         
    }    
    else{
        setConclued([...conclued, habit])
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`
        const promise = axios.post(URL, {}, {headers: {Authorization : `Bearer ${token}`}})
        promise.then(res => {
            console.log(res.data)
            })     
    
        promise.catch(err => {
            alert(err.response.data.message)
            }) 
    }
    }  





  return (
    <>

      <HeaderTop />

      <ContainerMain>
        <Data data-test="today">{days[day]}, {dayjs().format('DD/MM')}</Data>
        {(conclued.length === 0) ? (
          <p data-test="today-counter">Nenhum hábito concluido ainda</p>
        ) : (
          <p data-test="today-counter">{(conclued.length / todayHabit.length) * 100}% dos hábitos concluídos</p>
        )}



       

          {todayHabit.map((habit) => (
             <RenderHabit 
              key={habit.id}
              changeCheck={changeCheck}
              isSelected={conclued.some((s) => s === habit)}
              habit={habit}
             />
          ))}
         


      </ContainerMain>


      <MenuMain />
    </>

  )
}

