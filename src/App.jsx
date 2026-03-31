
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cart from './components/Cart'
import DigiTools from './components/DigiTools'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Princing from './components/Princing'
import StatsSection from './components/StatsSection'
import Steps from './components/Steps'
import ProductsCartBtn from './components/ProductCartBtn'
import Workflow from './components/Workflow'


const getDigiTools = async () =>{
  const res =await fetch("/digital-tools.json")
  return res.json()
}

const digiToolsPromise = getDigiTools()

function App() {
  const [activeTab, setActiveTab] = useState("products")
   const [carts, setCarts] =useState([])
   
   
  

  return (
    <>
      <NavBar carts={carts}></NavBar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <ProductsCartBtn carts={carts} activeTab={activeTab} setActiveTab={setActiveTab}></ProductsCartBtn>
     {
       activeTab === "products" ?<DigiTools  digiToolsPromise={digiToolsPromise} carts={carts} setCarts={setCarts}></DigiTools> : null
     }
      {
        activeTab === "cart" ?<Cart carts={carts} setCarts={setCarts}></Cart> : null
      }
      <Steps></Steps>
      <Princing></Princing>
      <Workflow></Workflow>
      <Footer></Footer>
      
    </>
  )
}

export default App
