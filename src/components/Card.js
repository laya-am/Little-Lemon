import {Box, Heading, Text, Button} from "@chakra-ui/react";

function Card(props){
    return (
<Box className="card">
    <img src={require(`./../${props.id}.jpg`)} alt={`a ${props.name}`} />
    <Box className="text">
        <Heading as="h4" size="md" textTransform="uppercase">{props.name}</Heading>
        <p style={{color:"#EE9972"}}>{props.price}</p>
        <br />
        <Text>{props.description}</Text>
        <br />
        <Button>Order a Delivery</Button>
    </Box>
</Box>
    )
}

export default Card;