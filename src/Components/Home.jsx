import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading, Slider } from "@chakra-ui/react";
import { About } from "./HomeComponents/Abouth";
import { Availibility } from "./HomeComponents/AvailbilityCheck";
import { RoomBox } from "./HomeComponents/RoomBox";
import { ServicesBox } from "./HomeComponents/ServicesBox";
import { Navbar } from "./HomeComponents/Navbar/Navbar";
import { SliderSec } from "./HomeComponents/Slider/Slider";
import { Footer } from "./Footer/Footer";
import { Gallery } from "./HomeComponents/Gallery/Gallery";
import { Blogs } from "./HomeComponents/BlogSec/Blogs";
import { Clientarea } from "./HomeComponents/ClinetArea";
import { Pricing } from "./HomeComponents/Pricing/Pricing";
import { Registration } from "./Registration/Registration";


export const Home = () => {
    return (
       <div>
        <SliderSec />
       <Availibility />
        <About />
       <RoomBox />
       <ServicesBox />
       <Gallery />
       <Pricing/>
       <Blogs />
       <Clientarea />
       <Footer />
        </div>
    )
}