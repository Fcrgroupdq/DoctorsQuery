
import CalendarCom from "../components/doctors/cellendy";
import { ChakraProvider, Image } from "@chakra-ui/react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Select,
  VStack,
  Grid,
} from "@chakra-ui/react";

const Appointment = () => {
  return (
    <ChakraProvider>
      <Box
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        gap="1rem"
        p="2rem"
        borderRadius="lg"
        boxShadow="md"
        _hover={{
          boxShadow: "lg",
        }}
      >
        <Box
          maxW="100%"
          height="auto"
          borderRadius="md"
          transition="transform 0.2s"
          _hover={{
            transform: "scale(1.05)",
          }}
        >
          <CalendarCom />
        </Box>
        <Image
          src="https://th.bing.com/th/id/OIP.mWnJcZgzOjHemm1IvFqh3gHaGY?pid=ImgDet&w=1800&h=1552&rs=1"
          alt="Second Image"
          maxW="100%"
          height="auto"
          borderRadius="md"
          transition="transform 0.2s"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
      </Box>

      <Box bg="white" p="2rem" borderRadius="lg" boxShadow="lg" mx="auto">
        <form>
          <Grid templateColumns="1fr" gap="1.5rem">
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input size="lg" placeholder="Enter your full name" />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input size="lg" type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input size="lg" placeholder="Enter your phone number" />
            </FormControl>

            <FormControl>
              <FormLabel>Select Checkup Type</FormLabel>
              <Select size="lg" placeholder="Select a checkup type">
                <option>General Checkup</option>
                <option>Specialized Checkup</option>
                <option>Emergency</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input size="lg" type="number" placeholder="Enter your age" />
            </FormControl>

            <FormControl>
              <FormLabel>Select Gender</FormLabel>
              <Select size="lg" placeholder="Select your gender">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input size="lg" placeholder="Enter your address" />
            </FormControl>

            <FormControl>
              <FormLabel>Details about Concern</FormLabel>
              <Textarea
                size="lg"
                placeholder="Enter details about your concern"
              />
            </FormControl>
          </Grid>

          <Button
            colorScheme="teal"
            size="lg"
            width="100%"
            mt="1.5rem"
            type="submit"
          >
            Book Appointment
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default Appointment;
