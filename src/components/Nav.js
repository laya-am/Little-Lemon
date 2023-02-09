import logo from "./../Logo.svg";
import {HStack, Box, Center} from "@chakra-ui/react"


function Nav(){
    return (
     <Box className="Nav" >
<ul>
<Center>
<HStack spacing={16}>
        <li>
        <img src={logo} alt="logo" />
        </li>
        <li>
        <a href="url">Home</a>
        </li>
        <li>
        <a href="url">About</a>
        </li>
        <li>
        <a href="url">Menu</a>
        </li>
        <li>
        <a href="url">Reservations</a>
        </li>
        <li>
        <a href="url">Order Online</a>
        </li>
        <li>
        <a href="url">Login</a>
        </li>
        </HStack>
        </Center>
</ul>
</Box> 
    )
}

export default Nav;