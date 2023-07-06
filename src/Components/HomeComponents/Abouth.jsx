import { Box, HStack, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Text,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";

export const About = () => {
  return (
    <Box
      width="80%"
      margin="auto"
      marginTop="5em"
      display="flex"
      id="abouth_us"
    >

      <Box >
        <Image src="https://htmldemo.net/oestin/oestin/img/banner/4.jpg" />
        
      </Box>

      <Box maxW="32rem" textAlign="start" paddingLeft="2em">
        <Text mb={4} fontSize="3xl" color="#444" fontWeight="bold">
          ABOUT US
        </Text>
        <Text fontSize="md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit
          dignissimos ex minima atque earum tempora. Cum fugit, eligendi sequi
          doloremque unde, recusandae consequatur sed tenetur repellendus,
          deserunt quas minima.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit
          dignissimos ex minima
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit
          dignissimos ex minima atque earum tempora. Cum fugit, eligendi sequi
          doloremque unde, recusandae consequatur sed tenetur repellendus,
          deserunt quas minima. recusandae consequatur sed tenetur repellendus,
          deserunt quas minima.
        </Text>
        <HStack className="h-social-icon">
        <a href=""><i className="fa-brands fa-facebook-f" ></i></a>
        <a href=""><i className="fa-brands fa-instagram"></i></a>
        <a href=""><i className="fa-solid fa-rss"></i></a>
        <a href=""><i className="fa-brands fa-twitter"></i></a>
        <a href=""><i className="fa-brands fa-pinterest-p"></i></a>    
        </HStack>
      </Box>
    </Box>
  );
};
