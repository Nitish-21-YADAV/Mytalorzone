import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Western from './components/OtherPages/Western'
import './App.css'
import Home from './components/Home'
import Summary from './components/Summary'
import TraditionalHome from './components/OtherPages/TraditionalHome'
import TrendyPage from './components/OtherPages/TrendyPage'
import ContactForm from './components/OtherPages/ContactForm'
import LoginSignUp from './components/OtherPages/LoginUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Summary/>}/>
          <Route path='/traditional' element={<TraditionalHome/>}/>
          <Route path='/western' element={<Western/>}/>
          <Route path='/trendy' element={<TrendyPage/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
          <Route path='/signup' element={<LoginSignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
