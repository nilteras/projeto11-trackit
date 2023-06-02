import React, { useContext } from 'react'
import { Header, ImagemLogin, Titulo } from './StyleHeader'
import ImageContext from './../../context/ImageContext'

export default function HeaderTop() {

    const [imageProfile] = useContext(ImageContext)


    return (

        <Header data-test="header">
            <Titulo>TrackIt</Titulo>
            <ImagemLogin>
                <img data-test="avatar" src={imageProfile} alt='image' />
            </ImagemLogin>
        </Header>
    )
}

