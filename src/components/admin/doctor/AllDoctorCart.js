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
  useToast,
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
import axios from "axios";

const AllDoctorCart = ({ doctor }) => {
  const { name, image, location, specialty, isPremium, _id } = doctor;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleDeleteDoctor = (id) => {
    axios
      .delete(`http://localhost:8585/hospital/delete/${id}`, {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
        },
      })
      .then((res) => {
        toast({
          title: `${res.data.msg}`,
          position: "top-right",
          isClosable: true,
          status: "error",
          duration: 4000,
        });
      })
      .catch((err) => alert(err));
  };

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
        <Flex direction="row" justifyContent={"space-evenly"}>
          <Box w={"30%"}>
            <Image
              borderRadius={"25px"}
              src={image}
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
            <Text fontSize="md" color="gray.500">
              {_id}
            </Text>
            <Text fontSize="sm" color="gray.600" mt={1}>
              {specialty}
            </Text>
            {isPremium && (
              <Badge colorScheme="pink" fontSize="sm" mt={2} variant="solid">
                Premium
              </Badge>
            )}
          </Box>

          <Flex w={"40%"} gap={"20px"}>
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
                  If you delete this Doctor you can't do undo
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
                        src={image}
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
                      <Text fontSize="sm" color="gray.600" mt={1}>
                        {specialty}
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
                  <Button
                    onClick={() => handleDeleteDoctor(_id)}
                    colorScheme="red"
                    variant="ghost"
                  >
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

export default AllDoctorCart;
