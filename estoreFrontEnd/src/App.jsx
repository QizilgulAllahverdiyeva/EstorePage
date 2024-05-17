import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './layout/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/form' element={<Form/>}/> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
