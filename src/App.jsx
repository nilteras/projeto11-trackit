import Login from './pages/FirstPage/Login'
import Cadastro from './pages/FirstPage/Cadastro'
import Hoje from './pages/SecondPage/Hoje'
import Habitos from './pages/ThirdPage/Habitos'
import Historico from './pages/FourthPage/Historico'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageContext from './context/ImageContext'
import AuthorizationContext from './context/AuthorizationContext'
import { useState } from 'react'

function App() {

  const [imageProfile, setImageProfile] = useState('')
  const [token, setToken] = useState('')

  return (
    <BrowserRouter>
      <ImageContext.Provider value={[imageProfile, setImageProfile]}>
        <AuthorizationContext.Provider value={[token, setToken]}>

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/hoje' element={<Hoje />} />
            <Route path='/habitos' element={<Habitos />} />
            <Route path='/historico' element={<Historico />} />
          </Routes>

        </AuthorizationContext.Provider>
      </ImageContext.Provider>
    </BrowserRouter>
  )
}

export default App
