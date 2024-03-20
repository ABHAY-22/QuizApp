import { Box, Button, Center, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = () => {
       

    const navigate = useNavigate();

    const[name,setname]=useState("")
        const[category,setcategory]=useState("")
        const [difficulty,setdifficulty]=useState("")
        const[questions,setquestions]=useState("");




   const handleLogin=(e)=>{
    e.preventDefault()

    
    navigate("/quiz")
   }
          
        return (
          
          <Center h="100vh">
          <Box maxW={"md"} borderWidth={"1px"} borderRadius={"1g"}p={4} boxShadow={"md"}>
              <Input placeholder =" Enter your Name" type= "name" value={name} onChange={(e)=>setname(e.target.value)} mb={"4"} size="lg"/>
             
              <Select placeholder='Select Category' value={category} onChange={(e)=>setcategory(e.target.value)} mb={"4"} size="lg">
             <option value='option1'>General Knowledge</option>
              <option value='option2'>Sports</option>
              <option value='option3'>Geography</option>
                </Select>

            <Select placeholder='Select Difficulty' value={difficulty} onChange={(e)=>setdifficulty(e.target.value)} mb={"4"} size="lg" >
             <option value='option1'>Easy</option>
              <option value='option2'>Medium</option>
              <option value='option3'>Hard</option>
                </Select>

             
              <Select placeholder='Choose number of Questions' type='name' value={questions} onChange={(e)=>setquestions(e.target.value)} mb={"4"} size="lg">
             <option value='option1'>1</option>
              <option value='option2'>2</option>
              <option value='option3'>3</option>

                </Select>
              
              <Center>
              <Button onClick={handleLogin} bg={"rgb(245,1,87)"} size="lg">Login</Button>
              </Center>
              
          </Box>
          </Center>
        )
      }
      
      


export default Home;