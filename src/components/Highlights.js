import {Box, Heading} from "@chakra-ui/react";
import Card from "./Card";
import YellowButton from "./YellowButton";

function Highlights(){
    return (
<Box className="highlights">
    <Box className="title">
        <Heading as="h1">This Weeks Specials!</Heading>
        <YellowButton text="Online Menu" />
    </Box>
        <Card id="1" name="bruschetta" price="$11.30" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " />
        <Card id="2" name="greek salad" price="$7.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. " />
        <Card id="3" name="lemon dessert" price="$5.50" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
</Box>
    )
}

export default Highlights;