import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading, Slider } from "@chakra-ui/react";
import { About } from "./HomeComponents/Abouth";
import { Availibility } from "./HomeComponents/AvailbilityCheck";
import { RoomBox } from "./HomeComponents/RoomBox";
import { ServicesBox } from "./HomeComponents/ServicesBox";
import { Navbar } from "./HomeComponents/Navbar/Navbar";
import { SliderSec } from "./HomeComponents/Slider/Slider";


export const Home = () => {
    return (
       <div>
        <SliderSec />
       <Availibility />
        <About />
       <RoomBox />
       <ServicesBox />
        </div>
    )
}