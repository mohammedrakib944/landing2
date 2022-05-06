import React from "react";
import "./properties.css";


const Properties = ({ data }) => {
  return (
    <div className="properties">
      <img alt="" src={data.img} />
      <div className="titleAndTile">
        <p>{data.qu}</p>
        <p>{data.time}</p>
      </div>
      <h3>{data.title}</h3>
    </div>
  );
};

export default Properties;
