import {Box} from "@chakra-ui/react";
import Header from "./Header";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

function Homepage(){
    return (
<Box className="main">
    <Header />
    <Highlights />
    <Testimonials />
    <About />
    </Box>
)
}

export default Homepage;