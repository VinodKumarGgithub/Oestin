import React from "react";
import "../Allcss.css/all.css";
import { background, Input } from "@chakra-ui/react";
const MyBag = () => {
  return (
    <>
      <div id="mybag">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            
          </div>
          <div>
            <h2>MY BOOKING</h2>
          </div>
        </div>

        <div id="bagin">
          <p>Asansol, 713305</p>
          <Input
            variant="flushed"
            type="text"
            maxLength={"6"}
            placeholder="Change PIN Code...."
          />
        </div>
      </div>
    </>
  );
};

export default MyBag;
