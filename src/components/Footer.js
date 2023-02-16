import logo from "./../Logo.svg";
import { HStack, Box, Center, Link, Text } from "@chakra-ui/react";

function Footer(){
    return (
        <Box className="footer">
        <Center>
        <HStack spacing={16}>
            <img style={{backgroundColor:"white", padding:"5px"}} src={logo} alt="logo" />
            <Box className="list">
            <Text as="b">Doormat Navigation</Text>
            <br/>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Menu</Link>
            <Link href="#">Reservations</Link>
            <Link href="#">Order Online</Link>
            <Link href="#">Login</Link>
            </Box>
            <Box className="list">
            <Text as="b">Contact</Text>
            <br/>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
            <br/>
            <br/>
            <br/>
            </Box>
            <Box className="list">
            <Text as="b">Social Media Links</Text>
            <br/>
            <Link href="https://instagram.com/">Instagram</Link>
            <Link href="https://tripadvisor.com/">Trip Advisor</Link>
            <Link href="https://facebook.com/">Facebook</Link>
            <br/>
            <br/>
            <br/>
            </Box>
        </HStack>
        </Center>
        </Box>
    )
}

export default Footer;