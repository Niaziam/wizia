import './App.css'
import Features from './components/Features'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import Partners from './components/Partners'


function App() {
  
  return (
    <div className='font-Montserrat bg-primary'>
      <Header />
      <FirstSection />
      <Partners />
      <Features />
    </div>
  )
}

export default App
