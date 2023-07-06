import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import {
    getHotelFailure,
    getHotelRequest,
    getHotelSuccess
} from "../Redux/action"
import {
    Stack,
    Card,
    CardBody,
    Heading,
    Text,
    Image,
    Box,
    Button,
} from '@chakra-ui/react'
import "../Components/hotelList.css"
import { Link as RouterLink } from "react-router-dom"


export const HotelList = () => {

    const hotelslist = useSelector((state) => state.hotels)

    console.log(hotelslist)

    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getHotelRequest());
        axios.get(`http://localhost:8080/hotellist`)
            .then((res) => {
                // console.log(res.data)
                dispatch(getHotelSuccess(res.data));
            })
            .catch((error) => {
                console.log(error)
                dispatch(getHotelFailure());
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Box className="hotelView">
            <div>
                <Heading>OUR ATR ROOMS</Heading>
                <p>Oestin hotel search allows users to compare hotel prices in just a few clicks from hundreds of booking sites for more than 5.0 million hotels</p>
            </div>
            <div>
                {hotelslist?.map((hotel) => (

                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        key={hotel.id}
                        my={10}
                    >

                        <RouterLink to={`/hotel-details/${hotel.id}`}>
                            <Image
                                objectFit='cover'
                                // minW={{ base: '100%', sm: '300px' }}
                                w="1000px" h="100%"
                                src={hotel.image}
                                alt={hotel.name}
                            />
                            <div
                                className="cost">
                                <h2>₹ {hotel.perNight}</h2>
                                <p>Per Night</p>
                            </div>
                        </RouterLink>

                        <Stack>
                            <CardBody my={5}>
                                <Heading size='md'>{hotel.name}</Heading>

                                <Text py='2'>
                                    {hotel.descriptionlist}
                                </Text>
                                <Heading size='md'>Room Facility</Heading>

                                <Text py='2'>
                                    {hotel.breakfastinclide}, {hotel.freewifi}, {hotel.privatebalcony}, {hotel.fullac}, {hotel.FlatScreenTV}, {hotel.RoomService}
                                </Text>
                                {/* <RouterLink to={`/hotel-details/${hotel.id}`}>
                                    <Button colorScheme='blue'>
                                        Hotel Details
                                    </Button>
                                </RouterLink> */}
                            </CardBody>
                        </Stack>
                    </Card>

                ))}
            </div>

        </Box>

    )
}