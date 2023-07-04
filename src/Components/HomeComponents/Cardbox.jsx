
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Button,
  Text,
  CardFooter,
  Box, 
  HStack, 
  Image 
} from "@chakra-ui/react";

export const Cardbox = () => {
  return (
   <>
   <Card align='center'
   m='auto'
   mt='-6em'
   bgColor='transparent'
   border='none'
   >
  <CardHeader >
    <Text fontSize='2xl' color='red' fontWeight='bold'>Royal suit</Text>
  </CardHeader>
  <Box  
   className='h_card_body_hover'>
    <Text>View a summary of all your customers over the last month.</Text>
  <CardFooter display='flex' justifyContent='center'>
  <Button bg='#b5876d' borderRadius='2px' color='white' w='8em' className="default-btn">Details</Button>
  </CardFooter>
    <Box color='white' fontSize='2xl' textAlign='end' w='90%'>$250 </Box>
  </Box>
  
</Card>
   </>
  );
};
