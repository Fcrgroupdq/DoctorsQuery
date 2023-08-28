
import { useState, useEffect } from "react";
import { Box, Image, Button } from "@chakra-ui/react";

const images = [
	// "http://doctorsqueries.com/wp-content/uploads/2022/11/Dr-Saloni-Sinha-DoctorsQueries.png",
	// "http://doctorsqueries.com/wp-content/uploads/2022/11/Whitecoats-Banner-DoctorsQueries-1368x300.jpg",
	"https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png"
];

const Carouse = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex((currentImageIndex + 1) % images.length);
		}, 4000);

		return () => clearInterval(intervalId);
	}, [currentImageIndex]);

	// const handlePrevClick = () => {
	// 	setCurrentImageIndex(
	// 		(currentImageIndex - 1 + images.length) % images.length
	// 	);
	// };

	// const handleNextClick = () => {
	// 	setCurrentImageIndex((currentImageIndex + 1) % images.length);
	// };

	return (
		<>
			<Box display="flex" alignItems="center" justifyContent="center" w="100%">
				{/* <Button onClick={handlePrevClick}>|</Button> */}
				<Image
					w="100%"
					src={images[currentImageIndex]}
					alt={`Image ${currentImageIndex + 1}`}
				/>
				{/* <Button onClick={handleNextClick}>|</Button> */}
			</Box>
			<br />
			
			<br />
		</>
	);
};

export default Carouse;