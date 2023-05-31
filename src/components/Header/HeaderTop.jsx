import React from 'react'
import { Header, ImagemLogin, Titulo } from './StyleHeader'

export default function HeaderTop() {
    return (

        <Header>
            <Titulo>TrackIt</Titulo>
            <ImagemLogin>
                <img src='https://www.globalempregos.com.br/wp-content/uploads/2022/01/habitos.jpg' alt='image' />
            </ImagemLogin>
        </Header>
    )
}

