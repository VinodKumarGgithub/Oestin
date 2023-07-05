import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading, Stack } from "@chakra-ui/react";
import { Cardbox } from "./Cardbox";
import { TitleDescription } from "./TitleDescription";
import { Grid, GridItem } from '@chakra-ui/react'
import { RoomCard } from "./RoomSec/RoomCard";

export const RoomBox = () => {
    let RoomArr = Array(4).fill(0)
    return (
        <>
      <TitleDescription title='OUR FAVORITE ROOMS' desc='
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit
         dignissimos ex minima atque earum tempora. Cum fugit, eligendi sequi
         doloremque unde' />

    {/* our room img-box */}
    <Grid templateColumns='repeat(4, 1fr)' h='40em'>
       {
        RoomArr.map((ele,i)=>(<RoomCard key={i} i={i+1}/>))
       }
    </Grid>

    {/* <Stack className="h_our_room_box" h='40em' my='5em'>
    <Box className="h_our_room"  backgroundImage='img/room/1.jpg' >
         <Cardbox />
    </Box>
    <Box className="h_our_room" backgroundImage='/img/room/2.jpg'>
    <Cardbox />
    </Box>
    <Box  className="h_our_room" backgroundImage='/img/room/3.jpg'>
    <Cardbox />
    </Box>
    <Box className="h_our_room" backgroundImage='/img/room/4.jpg'>
    <Cardbox />
    </Box> */}
    </>
    )
}