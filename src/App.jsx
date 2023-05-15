import './App.css'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Log from './pages/Log'
import Footer from './components/Footer'
import Header from './components/Header'
import ModalCard from './components/ModalCard'
import { useSelector } from 'react-redux'

function App() {

  const {theme} = useSelector(store => store.action)


 

  return (
    <main className={`App ${theme? 'text-white bg-[url("/images/bg-01.jpg")]':'text-black bg-[url("/images/4907157.jpg")]'} font-Poppins`}>
      <Header theme={theme} />
      <Routes>

    
       <Route path='/' element={<Home />} />

       <Route path='/about' element={<About  />} />

       <Route path='/projects' element={<Projects  />} />

       <Route path='/contact' element={<Contact  />} />

      </Routes>
      <ModalCard />
      <Footer />
    </main>
    
    
    
    
  )
}

export default App
