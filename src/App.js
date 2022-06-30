import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Client from './pages/Client'
import Contact from './pages/Contact'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/client' element={<Client />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
