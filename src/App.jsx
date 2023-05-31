import Login from './pages/FirstPage/Login'
import Cadastro from './pages/FirstPage/Cadastro'
import Hoje from './pages/SecondPage/Hoje'
import Habitos from './pages/ThirdPage/Habitos'
import Historico from './pages/FourthPage/Historico'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/hoje' element={<Hoje />} />
        <Route path='/habitos' element={<Habitos /> } />
        <Route path='/historico' element={<Historico /> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
