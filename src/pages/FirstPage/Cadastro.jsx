import React from 'react'
import { Container, Logo, FormContainer, TextoCadastro } from './style'
import { Link } from 'react-router-dom'

export default function Cadastro() {
  return (
    <Container>
      <Logo>Logo</Logo>
      <h1>TrackIt</h1>

      <FormContainer>
        <input type='text' placeholder='email'></input>
        <input type='text' placeholder='senha'></input>
        <input type='text' placeholder='nome'></input>
        <input type='url' placeholder='foto'></input>
        <Link to={'/'}>
          <div>
            <button>Cadastrar</button>
          </div>
        </Link>
      </FormContainer>
      <Link to={'/'}>
        <TextoCadastro>Já tem uma conta? Faça login!</TextoCadastro>
      </Link>
    </Container>
  )
}

