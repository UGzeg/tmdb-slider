import React, { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import "./styles.css"

const Rating = () => {
  const [rateUp, setRateUp] = useState(false);
  const [rateDown, setRateDown] = useState(false);

  const clickUp = () => setRateUp(!rateUp);
  const clickDown = () => setRateDown(!rateDown);

  return (
    <div className = {"itemRateContainer"}>
      <button className={`itemRate ${rateDown ? "disable" : ""} ${rateUp ? "active" : ""}`} onClick={clickUp} >
        <FaThumbsUp className = {"thumbIcon"}/>
      </button>
      <button className={`itemRate ${rateUp ? "disable" : ""} ${rateDown ? "active" : ""}`} onClick={clickDown} >
        <FaThumbsDown className = {"thumbIcon"}/>
      </button>
    </div>
  );
};

export default Rating;
