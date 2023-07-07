import { Cardbox } from "../Cardbox"
import { Grid, GridItem } from '@chakra-ui/react'


export const RoomCard = ({i}) => {
    return (
        <GridItem    backgroundImage={`https://htmldemo.net/oestin/oestin/img/room/${i}.jpg`} className="h_roomCard">
         <Cardbox />
      </GridItem>
    )
}