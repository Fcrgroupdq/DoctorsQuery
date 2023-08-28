import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarCom() {
  const [date, setDate] = useState(new Date());

  const updateLocalStorage = (newDate) => {
    const dd = String(newDate.getDate()).padStart(2, "0");
    const mm = String(newDate.getMonth() + 1).padStart(2, "0");
    const yyyy = newDate.getFullYear();
    localStorage.setItem("date", JSON.stringify(`${dd}/${mm}/${yyyy}`));
  };

  useEffect(() => {
    updateLocalStorage(date);
  }, [date]);

  return (
    <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md" maxW="400px" mx="auto">
      <Heading as="h2" size="md" mb={4} textAlign="center">
        Selected Date: {date.toDateString()}
      </Heading>

      <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
        <Calendar onChange={setDate} value={date} />
      </Box>
    </Box>
  );
}

export default CalendarCom;
