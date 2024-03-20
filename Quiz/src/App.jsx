import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Leaderboard from './Pages/Leaderboard'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import Navbar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
   <div>
 <ChakraProvider>
    <div>
    
      <Navbar/>
      <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      
      </Routes>
   
    </div>
    </ChakraProvider>


   </div>
  )
}

export default App
