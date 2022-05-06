import React from "react";
import style from "../../assets/common.module.css";
import TeamCard from "../../components/teamCard/TeamCard";
import "./team.css";
import { teamData } from "./teamData";


const Team = () => {
  return (
    <div className="TeamWrapper">
      <div className="container">
        <h2 className={style.gradientText} style={{ margin: "0 auto" }}>
          TEAM
        </h2>
        <br />
        <div className="teamGrid">
          {teamData.map((data, index) => (
            <TeamCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
