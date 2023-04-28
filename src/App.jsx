import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import ModalCard from './components/ModalCard'

function App() {
 

  return (
    
   <main className=' w-screen h-screen bg-[url("/images/bg-01.jpg")] bg-cover'>
    <section className=' w-screen '>
    <Header/>
    </section>
    <ModalCard/>
    <Cards/>
    <Footer/>
    
   </main>
    
    
    
    
  )
}

export default App
