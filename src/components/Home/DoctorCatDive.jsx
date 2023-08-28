'use client'

import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'



const Card = ({ heading, description, icon, href }) => {
  return (
    <ChakraProvider>
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        {/* <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'} */}
          {/* bg={useColorModeValue('gray.100', 'gray.700')}> */}
          <img width={"100px"}  src={icon} />
        {/* </Flex> */}
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
    </ChakraProvider>
  )
}

export default function DoctorCatDiv() {
  return (
    <ChakraProvider>
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        Experts from Doctorsqueries
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={12} justify="center">
          <Card
            heading={'Gastroenterology'}
            icon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYbcEeZvd0WjEcrmcsKuO0l-hQMncpXua6A&usqp=CAU"}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Cardic serger'}
            icon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAP2wvvvgv9aWO__t1YSx9qNMrW5G4nYiIug&usqp=CAU"}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'ENT'}
            icon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFrykK0PqRrq7w87hO76dfrsQZlREBTq5Wg&usqp=CAU"}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Orthopedic'}
            icon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOQipLO9pNuSYGYsbjY5maxyohlj4WClMTaz2SI_5LTzJ82YJUhoH9rE2Yc1TVIpNQ-c&usqp=CAU"}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Urology'}
            icon={"https://cdn.pixabay.com/photo/2022/09/20/10/27/urology-7467570_1280.png"}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
    </ChakraProvider>
  )
}