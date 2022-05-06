import React from "react";
import "./metacard.css";


const MetaCard = (props) => {
  const { data } = props;
  return (
    <div className="metaCard">
      <h4 className="metaTitle">
        <i className="fa-regular fa-circle"></i> <span>{data.title}</span>
      </h4>
      <p>{data.para}</p>
    </div>
  );
};

export default MetaCard;
