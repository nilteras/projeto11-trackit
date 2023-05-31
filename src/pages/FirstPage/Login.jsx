import React from 'react'
import styled from 'styled-components'
import { Container, Logo, FormContainer, TextoCadastro } from './style'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <Container>
      <Logo>Logo</Logo>
      <h1>TrackIt</h1>

      <FormContainer>
        <input type='text' placeholder='email'></input>
        <input type='text' placeholder='senha'></input>
        <Link to={'/hoje'}>
          <div>

            <button>Entrar</button>

          </div>
        </Link>
      </FormContainer>
      <Link to={'/cadastro'}>
        <TextoCadastro>Não tem uma conta? Cadastre-se!</TextoCadastro>
      </Link>

    </Container>
  )
}

