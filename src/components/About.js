import {Box, Heading, Text} from "@chakra-ui/react";
import image4 from "./../4.jpg"
import image5 from "./../5.jpg"


function About(){
    return (
<Box className="about">
   <Box className="text">
        <Heading as="h1" fontSize={50} color="#F4CE14">Little Lemon</Heading>
        <Heading as="h3" fontSize={30} fontWeight="thin">Chicago</Heading>
        <br />
        <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
   </Box>
   <Box className="images">
        <img className="img1" src={image4} alt="chefs in the restaurant cooking"/>
        <img className="img2" src={image5} alt="chefs in the restaurant laughing"/>
   </Box>
</Box>
    )
}

export default About;