import { Box, Center, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
 <Box bg="brown" p={4} pos="sticky" top={0} color="white">
      <Flex justifyContent="center" alignItems="center">


<Center>
     <Flex gap={20} justifyContent={"space-between"} alignItems={'center'}>
   <Link to={"/"} >Home</Link>
   <Link  to={"/leaderboard"} >Leaderboard</Link>
   {/* <Link to={"/quiz"} >Quiz</Link> */}
   
   </Flex>
   </Center>
   </Flex>
   
    
    </Box>



    </div>
  )
}

export default Navbar