import logo from "./../Logo.svg";
import {HStack, Box, Center} from "@chakra-ui/react";
import {Link} from "react-router-dom";

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
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/menu">Menu</Link>
        </li>
        <li>
        <Link to="/reservations">Reservations</Link>
        </li>
        <li>
        <Link to="/orderonline">Order Online</Link>
        </li>
        <li>
        <Link to="/login">Login</Link>
        </li>
        </HStack>
        </Center>
</ul>
</Box>
    )
}

export default Nav;