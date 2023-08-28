"use client";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  ChakraProvider,
  SimpleGrid,
} from "@chakra-ui/react";

import video from "../../assets/Video.jpg";
import findDoctor from "../../assets/FindDoctors.jpg";
import findHospital from "../../assets/FindHospital.jpg";
import { Link } from "react-router-dom";


const featureData = [
  {
    heading: "Find Your Nearest Doctors",
    title:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    image: findDoctor,
    href: "/doctors",
  },
  {
    heading: "Find Your Nearest Hospital",
    title:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    image: findHospital,
    href: "/hospitals",
  },
  {
    heading: "Find Your Nearest Doctors",
    title:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    image: video,
    href: "/about",
  },
];

export default function FeatureDiv() {
  return (
    <ChakraProvider>
      <div>
        <SimpleGrid columns={[1,2,3]} spacing="40px">
          {featureData.map((item) => (
            <Link key={Math.random()} href={item.href}>
              <Center py={6}>
                {" "}
                <Box
                  maxW={"445px"}
                  w={"full"}
                  bg={"white"}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  p={6}
                  overflow={"hidden"}
                >
                  <Box
                    h={"210px"}
                    bg={"gray.100"}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={"relative"}
                  >
                    <img src={item.image} fill alt="Example" />
                  </Box>
                  <Stack>
                    <Heading
                      color={"gray.500"}
                      fontSize={"2xl"}
                      fontFamily={"body"}
                    >
                      {item.heading}
                    </Heading>
                    <Text color={"gray.500"}>{item.title}</Text>
                  </Stack>
                </Box>{" "}
              </Center>
            </Link>
          ))}
        </SimpleGrid>
      </div>
    </ChakraProvider>
  );
}
