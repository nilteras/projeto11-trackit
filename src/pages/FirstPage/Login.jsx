import React from 'react'
import styled from 'styled-components'
import { Container, Logo, FormContainer, TextoCadastro } from './style'

export default function Login() {
  return (
    <Container>
      <Logo>Logo</Logo>

      <FormContainer>
        <input type='text' placeholder='email'></input>
        <input type='text' placeholder='senha'></input>
        <div>
          <button>Entrar</button>
        </div>
      </FormContainer>
      <TextoCadastro>Não tem uma conta? Cadastre-se!</TextoCadastro>
    </Container>
  )
}

