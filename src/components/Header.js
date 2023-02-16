import {Box, Heading, Text} from "@chakra-ui/react";
import headerImage from "./../restaurantfood.jpg";
import YellowButton from "./YellowButton";

function Header(){
    return (
    <Box className="header">
        <Box className="headerText">
            <Heading as="h1" fontSize={50} color="#F4CE14">Little Lemon</Heading>
            <Heading as="h3" fontSize={30} fontWeight="thin">Chicago</Heading>
            <Text marginTop={50}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <YellowButton text="Reserve a Table Now" />
        </Box>
        <img src={headerImage} className="headerImage" alt="a tray of various antipasti" />
</Box>
    )
}

export default Header;