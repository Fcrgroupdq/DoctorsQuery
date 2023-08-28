import React, { useState } from "react";
import {
  SimpleGrid,
  Input,
  Select,
  Container,
  Box,
  Heading,
  Text,
  Button,
  ChakraProvider,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
const API_KEY = "15106e32380f4441a9e659ec6346fa9c";

const SearchSection = ({ getLocationFromChild }) => {
  const [currentLocation, setCurrentLocation] = useState(false);
  const [search, setSearch] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [err, setError] = useState(null);

  async function geocodeCity(city) {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          city
        )}&key=${API_KEY}`
      );
      const { results } = response.data;
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry;
        return { latitude: lat, longitude: lng };
      }
      return null;
    } catch (error) {
      console.error("Error geocoding city:", error);
      return null;
    }
  }

  function GetLocation() {
    if ("geolocation" in navigator) {
      // Request the current position
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Retrieve latitude and longitude
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Update state with the location coordinates
          getLocationFromChild(latitude, longitude);
        },
        function (error) {
          // Handle errors
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }

  const handleSearch = async () => {
    if (search === "Near Me") {
      GetLocation();
    } else {
      const location = await geocodeCity(`${search}, india`);
      getLocationFromChild(location.latitude, location.longitude);
    }
  };

  const handleCurrentLocation = () => {
    setCurrentLocation(false);
    setSearch("Near Me");
    GetLocation();
  };

  const handleUserLocation = (e) => {
    setCurrentLocation(true);
    setSearch(e.target.value);
  };

  return (
    <ChakraProvider>
      <div>
        <div style={{ width: "80%", margin: "auto" }}>
          <SimpleGrid mt={"20px"} columns={[1, 2]} spacing="40px">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                <Input
                  onChange={handleUserLocation}
                  value={search}
                  placeholder="Enter Your Location"
                  size="md"
                />
                <Button onClick={handleSearch} colorScheme="red">
                  search
                </Button>
              </div>
              {currentLocation ? (
                <Button
                  onClick={handleCurrentLocation}
                  colorScheme="red"
                  mt={2}
                >
                  Use my Current Location
                </Button>
              ) : (
                ""
              )}
            </div>
            <Select placeholder="Select A Category">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </SimpleGrid>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default SearchSection;
