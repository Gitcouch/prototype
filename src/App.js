import './App.css'
// @ts-nocheck
// @ts-ignore
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './componets/layout/Header'
import Nav from './componets/layout/Nav'
import Footer from './componets/layout/Footer'
import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import NovedadesPage from './pages/NovedadesPage'
import ContactosPage from './pages/ContactosPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Nav />
      </Header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='nosotros' element={<NosotrosPage />} />
        <Route path='novedades' element={<NovedadesPage />} />
        <Route path='contacto' element={<ContactosPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
