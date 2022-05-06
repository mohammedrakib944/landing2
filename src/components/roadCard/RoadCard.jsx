import React from "react";
import "./roadcard.css";


const RoadCard = ({ data }) => {
  return (
    <div className="roadCard">
      <h2 className="percent">
        <p>{data.percent}</p>
      </h2>
      <h2 className="roadCradTitle">{data.title}</h2>
      <p>{data.para}</p>
    </div>
  );
};

export default RoadCard;
