import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, Badge, ChakraProvider, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";



export default function HospitalCard({ data }) {
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
              {/* ... other features */}
            </List>
          </VStack>
          <Button
           mt={3}
            colorScheme="red"
            size="sm"
          >
           <Link to={`/hospitals/${data._id}`}>Show more</Link>
          </Button>
        </Box>
      </Container>
    </ChakraProvider>
  );
}
