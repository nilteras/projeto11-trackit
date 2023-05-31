import React from 'react'
import { Container, Logo, FormContainer, TextoCadastro } from './style'

export default function Cadastro () {
  return (
    <Container>
      <Logo>Logo</Logo>

      <FormContainer>
        <input type='text' placeholder='email'></input>
        <input type='text' placeholder='senha'></input>
        <input type='text' placeholder='nome'></input>
        <input type='url' placeholder='foto'></input>
        <div>
          <button>Cadastrar</button>
        </div>
      </FormContainer>
      <TextoCadastro>Já tem uma conta? Faça login!</TextoCadastro>
    </Container>
  )
}

