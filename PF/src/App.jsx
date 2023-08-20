import Menu from './pages/Menu/menu';
import Home from './pages/home/home';
import Cadastro from './pages/evento/evento';
import Pesquisa from './pages/pesquisa/pesquisa'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {


  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}>
        <Route index element={<Home/>}/>
        <Route path='/evento' element={<Cadastro/>}/>
        <Route path='/pesquisa' element={<Pesquisa/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
