import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  useColorModeValue,
  ChakraProvider,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const AllHospitalCart = ({ hospital }) => {
  const { name, image1, image2, location, isPremium, _id } = hospital;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        shadow="md"
        bg={useColorModeValue("white", "gray.700")}
        mt={"12px"}
      >
        <Flex gap={'20px'} direction="row" justifyContent={"space-evenly"}>
          <Box w={"30%"}>
            <Image
              borderRadius={"25px"}
              src={image1}
              alt={name}
              boxSize="150px"
              objectFit="cover"
            />
          </Box>
          <Box w={"40%"} ml={4}>
            <Text fontSize="xl" fontWeight="bold">
              {name}
            </Text>
            <Text fontSize="md" color="gray.500">
              {location}
            </Text>
            <Text fontSize="md" color="gray.500">
              {_id}
            </Text>
            {isPremium && (
              <Badge colorScheme="pink" fontSize="sm" mt={2} variant="solid">
                Premium
              </Badge>
            )}
          </Box>

          <Flex w={"30%"} gap={"20px"}>
            <Button colorScheme="blue">Update</Button>
            <Button color={"red"} onClick={onOpen}>
              Delete
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Do You Really Want To Delete ?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  If you delete this Hospital you can't do undo
                </ModalBody>
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={4}
                  shadow="md"
                  bg={useColorModeValue("white", "gray.700")}
                  mt={"12px"}
                >
                  <Flex direction="row" justifyContent={"space-evenly"}>
                    <Box w={"30%"}>
                      <Image
                        borderRadius={"25px"}
                        src={image1}
                        alt={name}
                        boxSize="120px"
                        objectFit="cover"
                      />
                    </Box>
                    <Box w={"30%"} ml={4}>
                      <Text fontSize="xl" fontWeight="bold">
                        {name}
                      </Text>
                      <Text fontSize="md" color="gray.500">
                        {location}
                      </Text>
                      {isPremium && (
                        <Badge
                          colorScheme="pink"
                          fontSize="sm"
                          mt={2}
                          variant="solid"
                        >
                          Premium
                        </Badge>
                      )}
                    </Box>
                  </Flex>
                </Box>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button colorScheme="red" variant="ghost">
                    Yes Delete
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default AllHospitalCart;
