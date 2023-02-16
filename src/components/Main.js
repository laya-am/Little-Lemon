import {Box} from "@chakra-ui/react";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

function Main(){
    return (
<Box className="main">
    <Highlights />
    <Testimonials />
    <About />
</Box>
    )
}

export default Main;