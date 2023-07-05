import { Box,Button } from "@chakra-ui/react"
import { Link} from 'react-router-dom'


export const SliderCard = ({i,handleSlide}) => {

    return (
    <Box className="single-slide" backgroundImage={`img/slider/${i}.jpg`}>
       
       <div className="h_banner_box h_banner_box_hover">
       <Button ml='4em' 
       bg='' color='' 
       id="h_banner_preBtn"
       onClick={()=>{
        console.log(i);
       i===1? handleSlide(2) :handleSlide(1)
      }
     } 
       ><i className="fa-solid fa-chevron-left" ></i></Button>
       <div>
            <h1 className="">welcome to Oestin</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="banner-btn">
                <a className="default-btn" href="room-grid.html">explore</a>
            </div>
        </div>
        <Button
         bg=''
         mr='5em'
         color='' 
        id="h_banner_nextBtn"
        onClick={()=>{
            i===1? handleSlide(2) :handleSlide(1)
           }
        }
        ><i className="fa-solid fa-chevron-right"></i></Button>
        </div>
    </Box>
    )
}