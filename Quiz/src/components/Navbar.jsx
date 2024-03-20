import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
 <Box bg="brown" p={4} pos={"sticky"} zIndex={1000} top={0}color="white">
<Flex justifyContent={"space-between"} alignItems={"center"}  margin={"auto"}>


<Flex gap={20} justifyContent={"space-between"} alignItems={"center"} >
  
<h3><img width={40} p={4}src='https://static.vecteezy.com/system/resources/previews/000/585/577/original/coffee-cup-logo-template-vector-icon-design.jpg'/></h3>

  
</Flex>
     <Flex gap={20} justifyContent={"space-around"} alignItems={'center'}>
   <Link to={"/"} >Home</Link>
   <Link  to={"/leaderboard"} >Leaderboard</Link>
   <Link to={"/quiz"} >Quiz</Link>
   
   </Flex>
   </Flex>
   
    
    </Box>



    </div>
  )
}

export default Navbar