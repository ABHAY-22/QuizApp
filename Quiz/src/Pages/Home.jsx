import { Box, Button, Center, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
       
    const[name,setname]=useState("")
        const[category,setcategory]=useState("")
        const [difficulty,setdifficulty]=useState("")
        const[error,setError]=useState(null);

   const handleLogin=(e)=>{
  e.preventDefault()
   }
          
        return (
          
          <Center h="100vh">
          <Box maxW={"md"} borderWidth={"1px"} borderRadius={"1g"}p={4} boxShadow={"md"}>
              <Input placeholder ="Name" type= "name" value={name} onChange={(e)=>setname(e.target.value)} mb={"4"}/>
              <Input placeholder="Category" type='name' value={category} onChange={(e)=>setcategory(e.target.value)} mb={"4"}/>
              
              <Button onClick={handleLogin} bg={"rgb(245,1,87)"}>Login</Button>
              
              
          </Box>
          </Center>
        )
      }
      
      


export default Home;