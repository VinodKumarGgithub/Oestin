import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading } from "@chakra-ui/react";

export const Availibility = () =>{
    return (
        <Box  display="flex" alignItems="center" 
        justifyContent="space-evenly"
         w='80%'
         m='auto'
         py='10'
         h='13em'
         boxShadow='0 10px 15px 0 rgba(0, 0, 0, 0.1)'
        mt='-5em'
        zIndex='2'
        bg='white'
        position={'relative'}
        >
          <Input 
           placeholder="Select Date and Time"
           size="md"
           type="date"
           w='15%'
           color='#626262'
           fontSize='90%'
           title="From"
          />
          <Input 
           placeholder="Select Date and Time"
           size="md"
           type="date" 
           w='15%'
           color='#626262'
           fontSize='90%'
           title="To"
          />
        <Select placeholder='ADULTS'
         w='15%'
         color='#626262'
         fontSize='90%'
         >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
        </Select>
        <Select placeholder='CHILDREN'
         w='15%'
         color='#626262'
         fontSize='90%'
         >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
        </Select>
        <Button 
        w='15%' 
        color='white'
        background='#b5876d none repeat scroll 0 0' 
        fontSize='90%'
        className="default-btn"
        >CHECK AVAILABILITY</Button>
         
        </Box>
    )
}