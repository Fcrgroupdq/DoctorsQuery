import React, { useEffect, useState } from "react";
import AllDoctorCart from "./AllDoctorCart";
import {
  ChakraProvider,
  Input,
  Spinner,
  Flex,
  Button,
  Spacer,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const Alldoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loding, setLoding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getDoctors = async () => {
    setLoding(true);
    await axios
      .get(`https://gold-walkingstick-cuff.cyclic.app/doctors/all`, {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
        },
      })
      .then((res) => {
        setDoctors(res.data);
        setLoding(false);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoding(false));
  };

  const getDoctorById = async (id) => {
    setLoding(true);
    await axios
      .get(`https://gold-walkingstick-cuff.cyclic.app/doctors/${id}`, {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
        },
      })
      .then((res) => {
        let data = [];
        data.push(res.data);
        setDoctors(data);
        setLoding(false);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoding(false));
  };
  useEffect(() => {
    getDoctors();
  }, []);

  const handleSearch = () => {
    if (searchTerm === "") {
      getDoctors()
      return;
    }
    getDoctorById(searchTerm);
  };

  if (loding) {
    return (
      <ChakraProvider>
        <Spinner />
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Flex gap={"20px"} direction={["column", "row"]} align="center" mb={4}>
        <Box gap={"12px"} display={"flex"}>
          <Input
            placeholder="Search doctor By DoctorID..."
            size="md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            mb={[2, 0]}
          />
          <Button onClick={handleSearch} colorScheme="pink">
            Search
          </Button>
        </Box>
        <Spacer />
        <Button colorScheme="teal" size="md" mb={[2, 0]}>
          <Link to="/admin/doctors">Add a new doctor</Link>
        </Button>
      </Flex>
      {doctors.length === 0 ? (
        <h2>No Doctor Fount With id:${searchTerm}</h2>
      ) : (
        doctors.map((item) => <AllDoctorCart key={Math.random()} doctor={item} />)
      )}
    </ChakraProvider>
  );
};

export default Alldoctor;
