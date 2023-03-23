import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain3.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" style={{ width: "150px" }}>
        <div
          style={{
            height: "150px",
            width: "150px",
            // backgroundColor: "darkgreen",
          }}
        >
          <img
            className="Tilt-inner pa3"
            src={brain}
            alt="brain"
            style={{ width: "110px" }}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
