
import './App.css'
import Banner from './components/Banner'
import DigiTools from './components/DigiTools'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Princing from './components/Princing'
import StatsSection from './components/StatsSection'
import Steps from './components/Steps'


const getDigiTools = async () =>{
  const res =await fetch("/digital-tools.json")
  return res.json()
}

const digiToolsPromise = getDigiTools()

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <DigiTools  digiToolsPromise={digiToolsPromise}></DigiTools>
      <Steps></Steps>
      <Princing></Princing>
      <Footer></Footer>
      
    </>
  )
}

export default App
