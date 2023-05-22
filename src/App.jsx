import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import ModalCard from './components/ModalCard'
import {useSelector } from 'react-redux'
import BgParticles from './components/BgParticles'

function App() {

  const {theme} = useSelector(store => store.action)

  



  return (
    <main id='home' className={`App ${theme? 'text-white ':'text-black'} font-Popp ins scroll-smooth`}>
     <BgParticles/>
     <Header />


      <Home/>
      
      <ModalCard />

      <Footer/>
    </main>
    
    
    
    
  )
}

export default App
