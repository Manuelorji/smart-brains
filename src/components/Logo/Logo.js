import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.scss";
const Logo = () => {
  return (
    <div className="logo">
      <Tilt className="Tilt" options={{ max: 55 }}>
        <div className="Tilt-inner">
          <img alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
