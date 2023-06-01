import React, { useState } from 'react'
import { Container, Logo, FormContainer, TextoCadastro } from './style'
import { Link, useNavigate } from 'react-router-dom'
import LogoTI from './../../assets/Logo_PNG.png'
import axios from 'axios'

export default function Cadastro() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [logged, setLogged] = useState(false)
  const navigate = useNavigate();

  function registerUser(e) {
    e.preventDefault()
    setLogged(true)

    const informations = {
      email: email,
      name: name,
      image: image,
      password: password
    }

    const urlPost = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    axios.post(urlPost, informations)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(erro => {
        alert(erro.response.data.message)
        setLogged(false)
        setEmail('')
        setPassword('')
        setName('')
        setImage('')
      })


  }

  return (
    <Container>
      <Logo>
        <img src={LogoTI} alt='logo' />
      </Logo>
      <h1>TrackIt</h1>

      <FormContainer onSubmit={registerUser}>
        <input
          data-test="email-input"
          type='email'
          placeholder='email'
          disabled={logged ? "disabled" : ""}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          data-test="password-input"
          type='password'
          placeholder='senha'
          disabled={logged ? "disabled" : ""}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />

        <input
          data-test="user-name-input"
          type='text'
          placeholder='nome'
          disabled={logged ? "disabled" : ""}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required />

        <input
          data-test="user-image-input"
          type='url'
          placeholder='foto'
          disabled={logged ? "disabled" : ""}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required />

        {!logged ? (
          <button
            data-test="signup-btn"
            type='submit'>
            Cadastrar
          </button>
        ) : (
          <button
            data-test="signup-btn"
            disabled="disabled"
          //colocar imagem carregando aq e tirar o nome cadastrar
          >
            Cadastrar
          </button>
        )}



      </FormContainer>
      <Link data-test="login-link" to={'/'}>
        <TextoCadastro>Já tem uma conta? Faça login!</TextoCadastro>
      </Link>
    </Container>
  )
}

