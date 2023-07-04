import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading } from "@chakra-ui/react";
import { Cardbox } from "./Cardbox";
import { TitleDescription } from "./TitleDescription";


export const RoomBox = () => {
    return (
        <>
      <TitleDescription title='OUR FAVORITE ROOMS' desc='
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit
         dignissimos ex minima atque earum tempora. Cum fugit, eligendi sequi
         doloremque unde' />

    {/* our room img-box */}

    <HStack className="h_our_room_box" h='lg' my='5em'>
    <Box className="h_our_room" >
         <Image  src='https://htmldemo.net/oestin/oestin/img/room/1.jpg' />
         <Cardbox />
    </Box>
    <Box className="h_our_room" >
    <Image src='https://htmldemo.net/oestin/oestin/img/room/2.jpg'  />
    <Cardbox />
    </Box>
    <Box  className="h_our_room">
    <Image src='https://htmldemo.net/oestin/oestin/img/room/3.jpg'  />
    <Cardbox />
    </Box>
    <Box className="h_our_room" >
    <Image src='https://htmldemo.net/oestin/oestin/img/room/4.jpg'  />
    <Cardbox />
    </Box>
    </HStack>
        </>
    )
}