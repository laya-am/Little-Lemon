import {Button} from "@chakra-ui/react";


function YellowButton(props){
    return (
        <Button type="submit" onClick={props.click} bg="#F4CE14" borderRadius={10} m={30} color="black">{props.text}</Button>
    )
}


export default YellowButton;