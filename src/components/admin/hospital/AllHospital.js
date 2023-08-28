'use client'

import React, { useEffect, useState } from "react";
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
import AllHospitalCart from "./AllHospitalCart";

const AllHospital = () => {
  const [hospital, setHospital] = useState([]);
  const [loding, setLoding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getHospital = async () => {
    setLoding(true);
    await axios
      .get(`https://gold-walkingstick-cuff.cyclic.app/hospital`, {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
        },
      })
      .then((res) => {
        setHospital(res.data);
        setLoding(false);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoding(false));
  };

  const getHospitalById = async (id) => {
    setLoding(true);
    await axios
      .get(`https://gold-walkingstick-cuff.cyclic.app/hospital/${id}`, {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
        },
      })
      .then((res) => {
        let data = [];
        console.log(res.data)
        data.push(res.data);
        setHospital(data);
        setLoding(false);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoding(false));
  };

  useEffect(() => {
    getHospital();
  }, []);

  const handleSearch = () => {
    if (searchTerm === "") {
      getHospital()
      return;
    }
    getHospitalById(searchTerm);
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
            placeholder="Search Hospital By HospitalID..."
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
          Add a new hospital
        </Button>
      </Flex>
      {hospital.length === 0 ? (
        <h2>No Doctor Fount With id:${searchTerm}</h2>
      ) : (
        hospital.map((item) => <AllHospitalCart key={Math.random()} hospital={item} /> )
      )}
    </ChakraProvider>
  );
};

export default AllHospital;
