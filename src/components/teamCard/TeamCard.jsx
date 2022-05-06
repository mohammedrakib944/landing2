import React from "react";
import "./teamcard.css";


const TeamCard = ({ data }) => {
  return (
    <div className="teamCard">
      <img src={data.img} />
      <h2>{data.title}</h2>
      <h5>{data.position}</h5>

      <ul className="teamLinks">
        <li>
          <a href="#">
            <i className="fa-brands fa-discord"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
