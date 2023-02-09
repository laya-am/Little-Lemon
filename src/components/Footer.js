import logo from "./../Logo.svg";
import { VStack, HStack, Box, Center, Link, Text } from "@chakra-ui/react";

function Footer(){
    return (
        <Box className="Footer">
        <Center>
        <HStack spacing={16}>
            <img style={{backgroundColor:"white", padding:"5px"}} src={logo} alt="logo" />
            <Box >
            <VStack className="list">
            <Text as="b">Doormat Navigation</Text>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Menu</Link>
            <Link href="#">Reservations</Link>
            <Link href="#">Order Online</Link>
            <Link href="#">Login</Link>
            </VStack>
            </Box>
            <Box>
            <VStack>
            <Text as="b">Contact</Text>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
            </VStack>
            </Box>
            <Box>
            <VStack>
            <Text as="b">Social Media Links</Text>
            <Link href="https://instagram.com/">Instagram</Link>
            <Link href="https://tripadvisor.com/">Trip Advisor</Link>
            <Link href="https://facebook.com/">Facebook</Link>
            </VStack>
            </Box>
        </HStack>
        </Center>
        </Box>
    )
}

export default Footer;