// external import
import React from "react";
import VideoPlayer from "react-video-js-player";
import style from "../../assets/common.module.css";
import VideoPoster from "../../assets/img/img 6.png";
import Video from "../../assets/video/bg.mp4";
import RoadCard from "../../components/roadCard/RoadCard";
// inernal imports
import "./roadmap.css";
import { roadmapData } from "./roadmapData";



const Roadmap = () => {
  return (
    <>
      <div className="container">
        <div className="roadmap">
          <h5 className={style.barTitle}>ROADMAP</h5>
          <h2 className={style.gradientText}>KIDZ ROADMAP</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            alias.
          </p>
          <br />
          <br />
          <div className="roadmapGrid">
            {roadmapData.map((data, index) => (
              <RoadCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>

      {/* video section */}
      <br />
      <div className="videoImage">
        <VideoPlayer src={Video} poster={VideoPoster} />
      </div>
      <br />
    </>
  );
};

export default Roadmap;
