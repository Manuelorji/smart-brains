import React from "react";
import "./Rank.scss";

const Rank = () => {
  return (
    <div className="rank">
      <div>{"Manuel, your current rank is..."}</div>
      <div className="rank-number">{"#1"}</div>
    </div>
  );
};

export default Rank;
