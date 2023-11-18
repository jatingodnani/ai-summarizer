import { useState } from 'react'

import './App.css'
import { Header } from './Components/Header'
import { Summarizer } from './Components/Summarizer'

function App() {
 

  return (
    <>
      <main className='flex  flex-col  w-screen h-screen '>
         <Header/>
         <Summarizer/>  
      </main>
      
    </>
  )
}

export default App
