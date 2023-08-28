"use client"

// import { ChakraProvider, Spinner } from "@chakra-ui/react"
import axios from "axios"
import { useState,useEffect } from "react"
import { Box, Container, Heading,Spinner, Text, SimpleGrid, VStack, Image, Badge, ChakraProvider, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

export default function SingleHospital() {

    const {id} = useParams()
   const [data,setData] = useState({})
   const [loading,setLoading] = useState(false)

   useEffect(()=>{
    setLoading(true)
    axios.get(`https://gold-walkingstick-cuff.cyclic.app/hospital/${id}`, {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
      }
    })
    .then(res => {
        console.log(res)
      setData(res.data)
      setLoading(false)
    })
  },[])

  console.log(data)

  if (loading){
    return <ChakraProvider>
        <div style={{width:'30px',margin:'auto',alignItems:'center'}}>
            <Spinner />
        </div>
    </ChakraProvider>
  }

   return (
    <ChakraProvider>
    <Container maxW="5xl" py="8">
      <Box
        boxShadow="md"
        borderRadius="lg"
        p="6"
      >
        <Box mb="4">
          <Heading as="h1" size="xl">
            {data.name}
          </Heading>
          <Text color="gray.600" fontSize="lg" fontWeight="bold">{data.location}</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4" mb="8">
          <Image src={data.image1} alt="Hospital Image 1" />
          <Image src={data.image2} alt="Hospital Image 2" />
        </SimpleGrid>
        <Text color="gray.600" fontSize="lg" mb="8">
          {data.about}
        </Text>
        <VStack spacing="4" mb="8" align="start">
          <Text color="gray.600" fontWeight="bold">
            Established: {data.established} | Beds: {data.beds} | Facility: {data.facility}
          </Text>
          <Badge colorScheme={data.isPremium ? "green" : "gray"}>
            {data.isPremium ? "Premium Hospital" : "Standard Hospital"}
          </Badge>
        </VStack>
        <VStack spacing="4" align="start">
          <List spacing={2}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {data.feature1}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {data.feature2}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {data.feature3}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {data.feature4}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {data.feature5}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {data.feature6}
            </ListItem>
            {/* ... other features */}
          </List>
        </VStack>
        
      </Box>
    </Container>
  </ChakraProvider>
   )
}
