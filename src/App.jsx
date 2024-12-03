import './App.css'
import FeatureHighlight from './components/FeatureHighlight'
import Features from './components/Features'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import Partners from './components/Partners'
import Results from './components/Results'
import Testimonial from './components/Testimonial'


function App() {
  
  return (
    <div className='font-Montserrat bg-primary overflow-x-hidden'>
      <Header />
      <FirstSection />
      <Partners />
      <Features />
      <FeatureHighlight />
      <Testimonial />
      <Results />
    </div>
  )
}

export default App
