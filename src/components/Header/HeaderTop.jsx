import React, { useContext } from 'react'
import { Header, ImagemLogin, Titulo } from './StyleHeader'
import ImageContext from './../../context/ImageContext'

export default function HeaderTop() {

    const [imageProfile] = useContext(ImageContext)


    return (

        <Header>
            <Titulo>TrackIt</Titulo>
            <ImagemLogin>
                <img src={imageProfile} alt='image' />
            </ImagemLogin>
        </Header>
    )
}

