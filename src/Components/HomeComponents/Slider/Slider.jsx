import { Box } from "@chakra-ui/react"


export const SliderSec = () => {
    return (
        <section className="slider-area">
        <div className="slider-wrapper">
            <Box className="single-slide" backgroundImage="img/slider/1.jpg">
                <div className="banner-content overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="text-content-wrapper">
                                    <div className="text-content text-center">
                                        <h1 className="pt-180">welcome to Oestin</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <div className="banner-btn">
                                            <a className="default-btn" href="room-grid.html">explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            
            <Box className="single-slide" backgroundImage="img/slider/2.jpg">
                <div className="banner-content overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="text-content-wrapper slide-two">
                                    <div className="text-content text-center">
                                        <h1 className="pt-180">welcome to Oestin</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <div className="banner-btn">
                                            <a className="default-btn" href="room-grid.html">explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    </section>
      )
}