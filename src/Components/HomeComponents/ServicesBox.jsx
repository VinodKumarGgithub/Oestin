import {
  Button,
  Flex,
  Box,
  Spacer,
  Input,
  Select,
  Text,
  HStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { TitleDescription } from "./TitleDescription";
import { useState } from "react";
export const ServicesBox = () => {
  let [img, setImg] = useState('img/banner/1.jpg');
  let [num, setNum] = useState(1)
  const handleimg = (url,n) => {
   setImg(url)
   setNum(n)
   console.log(n);
  }

  return (
    <section className="services-area ptb-90">
      <div className="container">
        <TitleDescription
          title="OUR AWESOME SERVICES"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <div className="row">
          <div className="col-lg-5">
            <ul role="tablist" className="nav nav-tabs">
              <li className="nav-item" role="presentation" >
                <a className={num===1?"nav-link active":"nav-link"} data-bs-toggle="tab" role="tab" aria-controls="spa"  aria-expanded="true" onClick={()=>handleimg('img/banner/1.jpg',1)}>
                  <span className="image p-img"><img src="img/icon/spa.png" alt=""/></span>
                  <span className="image s-img"><img src="img/icon/spa-hover.png" alt=""/></span>
                  <span className="title">Spa - Beauty &amp; Health</span>
                  <span className="text">
                    Lorem ipsum dolor gtsitrty amet, consectetur adipisicing
                    elit, sed do eiusm tempor incidid</span>
                </a>
              </li>

              <li className="nav-item" role="presentation">
                <a className={num===2?"nav-link active":"nav-link"} data-bs-toggle="tab" role="tab" aria-controls="swim"  aria-expanded="true" onClick={()=>handleimg('img/banner/2.jpg',2)}>
                  <span className="image p-img"
                  ><img src="img/icon/swim.png" alt=""
                    /></span>
                  <span className="image s-img"
                  ><img src="img/icon/swim-hover.png" alt=""
                    /></span>
                  <span className="title">Swimming Pool</span>
                  <span className="text"
                  >Lorem ipsum dolor rtysittg amet, consectetur adipisicing
                    elit, sed do eiusm tempor incididunt</span
                  >
                </a>
              </li>

              <li className="nav-item" role="presentation">
                <a className={num===3?"nav-link active":"nav-link"} data-bs-toggle="tab" role="tab" aria-controls="restaurant" aria-expanded="true" onClick={()=>handleimg('img/banner/3.jpg',3)}>
                  <span className="image p-img"
                  ><img src="img/icon/restaurent.png" alt=""
                    /></span>
                  <span className="image s-img"
                  ><img src="img/icon/restaurent-hover.png" alt=""
                    /></span>
                  <span className="title">Restaurant</span>
                  <span className="text"
                  >Lorem ipsum dolor frsit frtgamet, consectetur adipisicing
                    elit, sed do eiusm tempor doloreut</span
                  >
                </a>
              </li>

              <li className="nav-item" role="presentation">
                <a className={num===4?"nav-link active":"nav-link"} data-bs-toggle="tab" role="tab" aria-controls="conference" aria-expanded="true" onClick={()=>handleimg('img/banner/4.jpg',4)}>
                  <span className="image p-img"
                  ><img src="img/icon/conference.png" alt=""
                    /></span>
                  <span className="image s-img"
                  ><img src="img/icon/conference-hover.png" alt=""
                    /></span>
                  <span className="title">Conference</span>
                  <span className="text"
                  >Lorem ipsum dolor frsit frtramet, consectetur adipisicing
                    elit, sed do eiusm tempordoloreut</span
                  >
                </a>
              </li>

            </ul>

          </div>

          <div className="col-lg-7">
            <div className="tab-content">

              <div id="spa" className="tab-pane active" role="tabpanel">
                <img src={img} alt="" />
              </div>

              {/* <div id="swim" className="tab-pane" role="tabpanel">
                <img src="img/banner/2.jpg" alt="" />
              </div>

              <div id="restaurant" className="tab-pane" role="tabpanel">
                <img src="img/banner/3.jpg" alt="" />
              </div>

              <div id="conference" className="tab-pane" role="tabpanel">
                <img src="img/banner/1.jpg" alt="" />
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
