import React, { useContext, useState } from 'react'
import { Container, Logo, FormContainer, TextoCadastro, ButtonDiv } from './style'
import { Link, useNavigate } from 'react-router-dom'
import LogoTI from './../../assets/Logo_PNG.png'
import axios from 'axios'
import ImageContext from './../../context/ImageContext'
import AuthorizationContext from './../../context/AuthorizationContext'
import { ThreeDots } from 'react-loader-spinner'



export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logged, setLogged] = useState(false)
  const [imageProfile, setimageProfile] = useContext(ImageContext)
  const [token, setToken] = useContext(AuthorizationContext)
  const navigate = useNavigate()


  function userLogin(e) {
    e.preventDefault();
    setLogged(true)

    const informations = { email: email, password: password }

    const urlPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    axios.post(urlPost, informations)
      .then(res => {
        console.log(res.data)
        setimageProfile(res.data.image)
        setToken(res.data.token)
        console.log(res.data.token)
        navigate('/hoje')

      })
      .catch(erro => {
        alert(erro.response.data.message)
        setLogged(false)
        setEmail('')
        setPassword('')

      })


  }

  return (
    <Container>
      <Logo>
        <img src={LogoTI} alt='logo' />
      </Logo>
      <h1>TrackIt</h1>

      <FormContainer onSubmit={userLogin}>
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
          required

        />
        {!logged ? (
          <button data-test="login-btn" type='submit' >Entrar</button>
        ) : (
          <ButtonDiv data-test="login-btn" disabled="disabled">
            <ThreeDots
              height="13"
              width="51"
              radius="g"
              color='white'
              ariaLabel='three-dots-loading'
              wrapperStyle={{}}
              wrapperClass=""

            />
          </ButtonDiv>
        )}

      </FormContainer>
      <Link to={'/cadastro'}>
        <TextoCadastro data-test="singup-link">Não tem uma conta? Cadastre-se!</TextoCadastro>
      </Link>

    </Container>
  )
}

