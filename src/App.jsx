import './App.css'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Log from './pages/Log'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import ModalCard from './components/ModalCard'

function App() {

  const [theme, setTheme] = useState(true)

  useEffect(()=>{
      setTheme(theme)
  },[theme])

 

  return (
    <main className={`${theme? 'text-white bg-[url("/images/bg-01.jpg")]':'text-black bg-[url("/images/4907157.jpg")]'}`}>
      <Header theme={theme} setTheme={setTheme}/>
      <Routes>

    
       <Route path='/' element={<Home theme={theme}/>} />

       <Route path='/about' element={<About  theme={theme}/>} />

       <Route path='/projects' element={<Projects theme={theme} setTheme={setTheme}/>} />

       <Route path='/contact' element={<Contact theme={theme} setTheme={setTheme}/>} />

      </Routes>
      <ModalCard theme={theme}/>
      <Footer theme={theme}/>
    </main>
    
    
    
    
  )
}

export default App
