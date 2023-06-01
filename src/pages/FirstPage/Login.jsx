import React from 'react'
import { Container, Logo, FormContainer, TextoCadastro } from './style'
import { Link } from 'react-router-dom'
import LogoTI from './../../assets/Logo_PNG.png'

export default function Login() {
  return (
    <Container>
      <Logo>
        <img src={LogoTI} alt='logo' />
      </Logo>
      <h1>TrackIt</h1>

      <FormContainer>
        <input
          type='email'
          placeholder='email' />

        <input
          type='password'
          placeholder='senha' />


        <button type='submit' >Entrar</button>
      </FormContainer>
      <Link to={'/cadastro'}>
        <TextoCadastro>Não tem uma conta? Cadastre-se!</TextoCadastro>
      </Link>

    </Container>
  )
}

