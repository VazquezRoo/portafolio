import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import ModalCard from './components/ModalCard'
import {useSelector } from 'react-redux'

function App() {

  const {theme} = useSelector(store => store.action)





  return (
    <main id='home' className={`App ${theme? 'text-white bg-[url("/images/bg-01.jpg")]':'text-black bg-[url("/images/4907157.jpg")]'} font-Poppins scroll-smooth`}>
     <Header />


      <Home/>
      
      <ModalCard />

      <Footer/>
    </main>
    
    
    
    
  )
}

export default App
