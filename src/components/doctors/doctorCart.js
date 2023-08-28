
import {
    Box,
    Container,
    Avatar,
    Heading,
    Text,
    List,
    ListItem,
    ListIcon,
    ChakraProvider,
    useMediaQuery,
    Button
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import { useState } from'react';
import { Link } from 'react-router-dom';


export default function DoctorCart({ data }) {
    const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [showAllText, setShowAllText] = useState('See More');
  
    const toggleShowFeatures = () => {
      setShowAllFeatures(!showAllFeatures);
      setShowAllText(showAllFeatures ? 'See More' : 'See Less');
    };
  
    const extractFeatures = () => {
      const features = [];
  
      for (const key in data) {
        if (key.startsWith('feature') && data[key]) {
          features.push(data[key]);
        }
      }
  
      return features;
    };
  
    const visibleFeatures = showAllFeatures
      ? extractFeatures()
      : extractFeatures().slice(0, 3);
  
  return (
    <ChakraProvider>
    <Container py={8} maxW={isLargerThanTablet ? 'container.lg' : 'full'}>
      <Box
        p={6}
        bg="white"
        boxShadow="md"
        borderRadius="md"
        display="flex"
        flexDirection={isLargerThanTablet ? 'row' : 'column'}
        alignItems={isLargerThanTablet ? 'flex-start' : 'center'}
        _hover={{
          boxShadow: 'lg',
        }}
      >
        <Avatar
          size={isLargerThanTablet ? '3xl' : '2xl'}
          src={data.image}
          alt={data.name}
        />
        <Box
          ml={isLargerThanTablet ? 6 : 0}
          mt={isLargerThanTablet ? 0 : 4}
          textAlign={isLargerThanTablet ? 'left' : 'center'}
        >
          <Heading as="h1" size="xl" mb={2}>
            {data.name}
          </Heading>
          <Text fontSize="lg" color="red.500" fontWeight="bold" mb={2}>
            {data.spacility}
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Fees: ${data.fees}
          </Text>
          <Text fontSize="md" color="gray.500" mb={4}>
            {data.exp}
          </Text>
          <Text fontSize="md" color="gray.500" mb={4}>
            {data.org}
          </Text>
          <List spacing={2}>
            {visibleFeatures.map((feature, index) => (
              <ListItem key={index}>
                <ListIcon as={CheckIcon} color="red.500" />
                {feature}
              </ListItem>
            ))}
          </List>

          <Button mt={2} ml={2} size="sm" colorScheme="red">
            <Link to={`/doctors/${data._id}/appointment`} >Book Appointment</Link>
          </Button>
          <Button mt={2} size="sm" onClick={toggleShowFeatures}>
          <Link  to={`/doctors/${data._id}`}>show more</Link>
          </Button>
        </Box>
      </Box>
    </Container>

  
    </ChakraProvider>
  );
}
