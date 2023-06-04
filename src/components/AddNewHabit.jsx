import React, { useContext, useState } from 'react'
import { NewHabit, DaysDiv, ButtonDiv } from './../pages/ThirdPage/style'
import DaysButtons from './DaysButtons';
import AuthorizationContext from './../context/AuthorizationContext'
import axios from 'axios';



export default function AddNewHabit({ setAdd }) {

    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const [name, setName] = useState('');
    const [loader, setLoader] = useState(false);
    const [days, setDays] = useState([]);

    const [token] = useContext(AuthorizationContext)


    function chooseDays(i) {

        const isSelected = days.some((s) => s === i)
        if (isSelected) {
            const unSelect = window.confirm("Tem certeza que quer retirar esse dia?")

            if (unSelect) {
                const newList = days.filter((s) => s !== i)
                setDays(newList)
            }
        } else {
            setDays([...days, i])
        }
    }



    function enviar(e) {
        e.preventDefault()
        setLoader(true)

        const informations = {name, days}
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        axios.post(URL, informations, {headers: {Authorization: `Bearer ${token}`}})
        .then( res => {
            console.log(res.data)
            setLoader(false)
            setName("")
            setDays([])
            setAdd(false)
        })
        .catch(err => {
            alert(err.response.data.message)
            setLoader(false)
        })
        
    }



    return (

        <NewHabit data-test="habit-create-container">

            <form onSubmit={enviar}>
                <input
                    data-test="habit-name-input"
                    type='text'
                    disabled={loader ? "disabled" : ""}
                    placeholder='nome do hábito'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <DaysDiv>
                    {weekDays.map((d, i) => (
                        <DaysButtons
                            disabled={(loader === true) ? true : false}
                            chooseDays={chooseDays}
                            isSelected={days.some((s) => s === i)}
                            key={i}
                            d={d}
                            index={i}
                        />
                    ))}
                </DaysDiv>

                <ButtonDiv>
                    {loader ? (
                        <div data-test="habit-create-cancel-btn" disabled="disabled" >Cancelar</div>
                    ) : (
                        <div data-test="habit-create-cancel-btn" onClick={() => setAdd(false)}>Cancelar</div>
                    )}
                    {loader ? (
                        <button type="submit" data-test="habit-create-save-btn" disabled="disabled">Salvar </button>
                    ) : (
                        <button type="submit" data-test="habit-create-save-btn">Salvar </button>
                    )}

                </ButtonDiv>
            </form>

        </NewHabit>


    )
}