import { Button, ChakraProvider, Spinner, Stack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import DoctorCart from "./doctorCart";
import SearchSection from "./searchSection";

export default function DoctorHeader() {
  const [doctors, setDoctors] = useState([]);
  const [loding, setLoding] = useState(false);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [showPag, setShowPag] = useState(true);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getDoctors = async () => {
    setLoding(true);
    await axios
      .get(
        `https://gold-walkingstick-cuff.cyclic.app/doctors?page=${currentPage}`,
        {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
          },
        }
      )
      .then((res) => {
        setDoctors(res.data.doctor);
        setTotalPages(res.data.totalPages);
        setCurrentPage(res.data.currentPage);
        setLoding(false);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoding(false));
  };

  const getNearestDoctor = async () => {
    setLoding(true);
    await axios
      .get(
        `https://gold-walkingstick-cuff.cyclic.app/doctors/doctors/near/?lat=${latitude}&lon=${longitude}`,
        {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setDoctors(res.data);
        // setCurrentPage(0)
        // setTotalPages(0)
        setLoding(false);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoding(false));
  };

  const getLocationFromChild = (lat, lon) => {
    setShowPag(false);
    setLatitude(lat);
    setLongitude(lon);
  };

  useEffect(() => {
    if (latitude !== null) {
      getNearestDoctor();
    }
  }, [latitude]);

  useEffect(() => {
    getDoctors();
  }, [currentPage]);

  if (loding) {
    return (
      <ChakraProvider>
        <h1 style={{ fontSize: "30px", textAlign: "center" }}>
          <Spinner
            thickness="3px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
          />
        </h1>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <SearchSection getLocationFromChild={getLocationFromChild} />
      <div>
        {doctors.length === 0 ? (
          <h1
            style={{
              color: "red",
              fontSize: "24px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            No Doctor Found At Your Location
          </h1>
        ) : (
          doctors.map((item, index) => (
            <div key={Math.random()}>
              {index === 3 ? (
                <div style={{ width: "80%", margin: "auto" }}>
                  <img src="http://doctorsqueries.com/wp-content/uploads/2022/11/Dr-Saloni-Sinha-DoctorsQueries.png" />
                </div>
              ) : (
                ""
              )}
              {index === 5 ? (
                <div style={{ width: "80%", margin: "auto" }}>
                  <img src="https://doctorsqueries.com/wp-content/uploads/2022/11/Whitecoats-Banner-DoctorsQueries-1368x300.jpg" />
                </div>
              ) : (
                ""
              )}
              <DoctorCart data={item} />
            </div>
          ))
        )}
      </div>

      {/* Pagination controls */}
      {showPag === false ? (
        ""
      ) : (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt="4"
        >
          <Button
            size="sm"
            colorScheme="red"
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              size="sm"
              colorScheme={currentPage === index + 1 ? "red" : "gray"}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            size="sm"
            colorScheme="red"
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Stack>
      )}
    </ChakraProvider>
  );
}
