import { useState } from 'react'
import './App.css'
import Producttt from './components/Producttt'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import Footer from './components/Footer'





function App() {
  

  return (
    
      
        <div >
          
          <div className='appcss'>
          <Header/>
          </div>
          <Producttt />
          <div className='appcss'>
          <Footer/>
          </div>

           </div>
    
  )
}

export default App
